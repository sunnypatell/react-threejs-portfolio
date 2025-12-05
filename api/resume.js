// Vercel Serverless Function to serve the resume at /resume
// It finds the first file in public/resume and streams it back
// with Content-Disposition set to the actual filename so downloads
// keep the original name.

// Serverless handler that serves the current resume at a stable route.
// Key behaviors:
// - Reads files from `public/resume` (prefer a .pdf, else latest modified)
// - Redirects `/api/resume` to `/resume/<basename>` (no extension) for clean titles
// - Supports `/api/resume/<name>` where `<name>` is the basename (no extension)
// - Streams the file inline with the original filename via Content-Disposition
// - For PDFs, sets the PDF metadata Title to the basename so viewers/tab titles are clean
import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

export default async function handler(req, res) {
  try {
    const resumeDir = path.join(process.cwd(), 'public', 'resume');
    if (!fs.existsSync(resumeDir)) {
      res.status(404).send('Resume directory not found.');
      return;
    }

    const files = fs
      .readdirSync(resumeDir)
      .filter((f) => !f.startsWith('.'));
    if (!files || files.length === 0) {
      res.status(404).send('No resume file found.');
      return;
    }

    // Prefer a PDF resume if available, otherwise pick most recent file
    // Prefer PDF to ensure inline preview and consistent behavior
    const pdfFiles = files.filter((f) => path.extname(f).toLowerCase() === '.pdf');
    const pickFileList = pdfFiles.length > 0 ? pdfFiles : files;

    const fileInfos = pickFileList.map((filename) => {
      const fullPath = path.join(resumeDir, filename);
      const stat = fs.statSync(fullPath);
      return { filename, fullPath, mtimeMs: stat.mtimeMs };
    });
    fileInfos.sort((a, b) => b.mtimeMs - a.mtimeMs);
    let { filename, fullPath } = fileInfos[0];

    // If request path is /api/resume exactly, redirect to /resume/<filename>
    // so the browser's address bar reflects the actual filename (affects tab title)
    const url = req.url || '';
    // If a name segment is provided (e.g., /api/resume/Resume-Sunny-Patel),
    // try to serve the matching file ignoring extension.
    // If a specific basename is requested, try to match it ignoring extension
    const match = url.match(/^\/api\/resume\/(.+)$/);
    if (match && match[1]) {
      const requestedBase = decodeURIComponent(match[1]).toLowerCase();
      const byBase = fileInfos.find((fi) => path.parse(fi.filename).name.toLowerCase() === requestedBase);
      if (byBase) {
        filename = byBase.filename;
        fullPath = byBase.fullPath;
      }
    } else if (url === '/api/resume' || url === '/api/resume/') {
      // Redirect to pretty URL (no extension) so the address bar/tab title show the basename
      const base = path.parse(filename).name;
      res.statusCode = 302;
      res.setHeader('Location', `/resume/${encodeURIComponent(base)}`);
      res.end();
      return;
    }

    const ext = path.extname(filename).toLowerCase();
    const mime =
      ext === '.pdf'
        ? 'application/pdf'
        : ext === '.docx'
        ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        : ext === '.doc'
        ? 'application/msword'
        : 'application/octet-stream';

    // Set headers to preserve filename when downloading
    // Serve inline and preserve the real filename for downloads
    res.setHeader('Content-Type', mime);
    res.setHeader('Content-Disposition', `inline; filename="${filename}"`);

    // For PDFs, adjust the PDF Title metadata to the basename (without ".pdf")
    if (ext === '.pdf') {
      try {
        const baseName = path.parse(filename).name;
        const raw = fs.readFileSync(fullPath);
        const pdfDoc = await PDFDocument.load(raw);
        // showInWindowTitleBar hints some viewers to use this Title in the UI
        pdfDoc.setTitle(baseName, { showInWindowTitleBar: true });
        const modified = await pdfDoc.save();
        res.end(Buffer.from(modified));
      } catch (e) {
        console.error('Failed to set PDF title metadata, streaming original:', e);
        const stream = fs.createReadStream(fullPath);
        stream.on('error', (err) => {
          console.error('Error streaming resume:', err);
          res.status(500).send('Failed to read resume file.');
        });
        stream.pipe(res);
      }
    } else {
      // Non-PDF files: just stream as-is
      const stream = fs.createReadStream(fullPath);
      stream.on('error', (err) => {
        console.error('Error streaming resume:', err);
        res.status(500).send('Failed to read resume file.');
      });
      stream.pipe(res);
    }
  } catch (err) {
    console.error('Unexpected error in resume handler:', err);
    res.status(500).send('Unexpected server error.');
  }
}
