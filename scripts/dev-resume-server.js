// Lightweight local dev server to serve /api/resume and /resume
// Reads the latest PDF from public/resume and streams it preserving filename

import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()
const PORT = process.env.RESUME_DEV_PORT || 3000

app.get(['/api/resume', '/resume'], (req, res) => {
  try {
    const resumeDir = path.join(process.cwd(), 'public', 'resume')
    if (!fs.existsSync(resumeDir)) {
      res.status(404).send('Resume directory not found.')
      return
    }

    const files = fs
      .readdirSync(resumeDir)
      .filter((f) => !f.startsWith('.'))

    const pdfFiles = files.filter((f) => path.extname(f).toLowerCase() === '.pdf')
    const useList = pdfFiles.length > 0 ? pdfFiles : files

    if (useList.length === 0) {
      res.status(404).send('No resume file found.')
      return
    }

    const fileInfos = useList.map((filename) => {
      const fullPath = path.join(resumeDir, filename)
      const stat = fs.statSync(fullPath)
      return { filename, fullPath, mtimeMs: stat.mtimeMs }
    })

    fileInfos.sort((a, b) => b.mtimeMs - a.mtimeMs)
    const { filename, fullPath } = fileInfos[0]

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
    res.setHeader('Content-Disposition', `inline; filename="${filename}"`)

    const stream = fs.createReadStream(fullPath)
    stream.on('error', (err) => {
      console.error('Error streaming resume:', err)
      res.status(500).send('Failed to read resume file.')
    })
    stream.pipe(res)
  } catch (err) {
    console.error('Unexpected error in resume dev server:', err)
    res.status(500).send('Unexpected server error.')
  }
})

app.listen(PORT, () => {
  console.log(`Resume dev server listening on http://localhost:${PORT}`)
})
