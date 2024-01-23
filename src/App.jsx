import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import MyWork from './components/MyWork'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div className='max-w-[1300px] w-[95%] m-auto bg-white my-4 rounded-xl overflow-hidden '>
        <Navbar />
        <HeroSection />
        <AboutSection/>
        <Experience />
        <Skills />
        <Education />
        <MyWork />
      </div>
    </>
  )
}

export default App
