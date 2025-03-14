import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics /> {/* To use vercel analytics in layout */}
    <SpeedInsights />
  </React.StrictMode>,
)
