import React from 'react'

import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'

import Projects from './components/projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Skills from './components/Education/Skills'
const app = () => {
  return (
    <>  
    <Header/>
    <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default app