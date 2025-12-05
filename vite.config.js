import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { PDFDocument } from 'pdf-lib'

// https://vitejs.dev/config/
// Dev helper: previously used a proxy target; now we serve directly via middleware.
// Left here as documentation for prior approach.
const resumeProxyTarget = process.env.VITE_RESUME_PROXY_TARGET || 'http://localhost:3000'

// Dev-only middleware mirroring production behavior for `/resume`.
// - Intercepts `/resume` and `/api/resume`
// - Picks a PDF if available (else most recent file) from `public/resume`
// - Redirects `/resume` → `/resume/<basename>` (no extension) for cleaner titles
// - Resolves `/resume/<name>` by basename (ignoring extension)
// - Streams inline with original filename for downloads
// - For PDFs, sets Title metadata to the basename
const resumeDevPlugin = {
  name: 'resume-dev-plugin',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      try {
        const url = req.url || ''
        if (url.startsWith('/resume') || url.startsWith('/api/resume')) {
          const resumeDir = path.join(process.cwd(), 'public', 'resume')
          if (!fs.existsSync(resumeDir)) {
            res.statusCode = 404
            res.end('Resume directory not found.')
            return
          }
          const files = fs.readdirSync(resumeDir).filter((f) => !f.startsWith('.'))
          if (!files || files.length === 0) {
            res.statusCode = 404
            res.end('No resume file found.')
            return
          }
          const pdfFiles = files.filter((f) => path.extname(f).toLowerCase() === '.pdf')
          const pickList = pdfFiles.length > 0 ? pdfFiles : files
          const fileInfos = pickList.map((filename) => {
            const fullPath = path.join(resumeDir, filename)
            const stat = fs.statSync(fullPath)
            return { filename, fullPath, mtimeMs: stat.mtimeMs }
          })
          fileInfos.sort((a, b) => b.mtimeMs - a.mtimeMs)
          let { filename, fullPath } = fileInfos[0]

          // If URL is exactly /resume, redirect to /resume/<basename> (no extension)
          if (url === '/resume' || url === '/resume/') {
            res.statusCode = 302
            res.setHeader('Location', `/resume/${encodeURIComponent(path.parse(filename).name)}`)
            res.end()
            return
          }

          // If URL includes /resume/<name>, try to match by basename ignoring extension
          const m = url.match(/^\/resume\/(.+)$/)
          if (m && m[1]) {
            const requestedBase = decodeURIComponent(m[1]).toLowerCase()
            const byBase = fileInfos.find((fi) => path.parse(fi.filename).name.toLowerCase() === requestedBase)
            if (byBase) {
              filename = byBase.filename
              fullPath = byBase.fullPath
            }
          }
          const ext = path.extname(filename).toLowerCase()
          const mime =
            ext === '.pdf'
              ? 'application/pdf'
              : ext === '.docx'
              ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
              : ext === '.doc'
              ? 'application/msword'
              : 'application/octet-stream'
          res.setHeader('Content-Type', mime)
          res.setHeader('X-Content-Type-Options', 'nosniff')
          res.setHeader('Content-Disposition', `inline; filename="${filename}"`)
          if (ext === '.pdf') {
            try {
              const baseName = path.parse(filename).name
              const raw = fs.readFileSync(fullPath)
              const pdfDoc = await PDFDocument.load(raw)
              pdfDoc.setTitle(baseName, { showInWindowTitleBar: true })
              const modified = await pdfDoc.save()
              res.end(Buffer.from(modified))
            } catch (e) {
              console.error('Failed to set PDF title metadata (dev), streaming original:', e)
              const stream = fs.createReadStream(fullPath)
              stream.on('error', (err) => {
                console.error('Error streaming resume (vite dev):', err)
                res.statusCode = 500
                res.end('Failed to read resume file.')
              })
              stream.pipe(res)
            }
          } else {
            const stream = fs.createReadStream(fullPath)
            stream.on('error', (err) => {
              console.error('Error streaming resume (vite dev):', err)
              res.statusCode = 500
              res.end('Failed to read resume file.')
            })
            stream.pipe(res)
          }
          return
        }
      } catch (err) {
        console.error('Resume dev plugin error:', err)
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), resumeDevPlugin],
})
