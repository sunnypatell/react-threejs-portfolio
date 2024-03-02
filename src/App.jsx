import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

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
          <div className="div relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
