import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas } from './components' // if you want to use skills balls make sure to import tech and do the same for src\components\index.js
import Feedbacks from './components/Feedbacks'
// import { Analytics } from "@vercel/analytics/react"

const OTUWebring = () => {
  useEffect(() => {
    let hostname = window.location.hostname
    if (hostname.startsWith('www.')) {
      hostname = hostname.substring(4)
    }

    const prevLink = document.getElementById('webring-prev')
    const nextLink = document.getElementById('webring-next')

    if (prevLink) {
      prevLink.href = 'https://otu-ring.com/prev.html?from=' + encodeURIComponent(hostname)
    }
    if (nextLink) {
      nextLink.href = 'https://otu-ring.com/next.html?from=' + encodeURIComponent(hostname)
    }
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '0.5rem 0',
        marginTop: '-3rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <a
        id="webring-prev"
        href="#"
        title="Previous site"
        style={{
          color: '#71717a',
          fontSize: '16px',
          textDecoration: 'none',
          padding: '0.5rem',
          borderRadius: '4px',
          transition: 'all 0.2s ease',
          background: 'transparent',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#fafafa'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.backgroundColor = 'transparent' }}
      >
        &larr;
      </a>
      <a href="https://otu-ring.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://otu-ring.com/assets/ontariotech.svg"
          alt="OTU Webring"
          style={{ height: '20px', width: 'auto', opacity: 0.7, transition: 'opacity 0.2s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7' }}
        />
      </a>
      <a
        id="webring-next"
        href="#"
        title="Next site"
        style={{
          color: '#71717a',
          fontSize: '16px',
          textDecoration: 'none',
          padding: '0.5rem',
          borderRadius: '4px',
          transition: 'all 0.2s ease',
          background: 'transparent',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#fafafa'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.backgroundColor = 'transparent' }}
      >
        &rarr;
      </a>
    </div>
  )
}

function App() {
  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Education />
          <Experience />
          <Extracurricular />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="div relative z-0">
            <Contact />
            <StarsCanvas />
            <OTUWebring />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
