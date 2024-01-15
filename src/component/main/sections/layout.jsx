import React from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Resume from './pages/resume.jsx'
import Service from './pages/service.jsx'
import Skills from './pages/skills.jsx'
import Testimonial from './pages/testimonial.jsx'
import Contact from './pages/contact.jsx'
const Layout = () => {
  return (
    <>
        <Home/>
        <About/>
        <Resume/>
        <Service/>
        <Skills/>
        <Testimonial/>
        <Contact/>
    </> 
  )
}

export default Layout