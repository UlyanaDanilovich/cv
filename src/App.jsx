import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Cards from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/> 
    <About/>
    <Cards/>
    <Projects/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default App
