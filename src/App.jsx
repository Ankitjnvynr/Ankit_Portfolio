import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-[1300px] w-[95%] m-auto bg-white my-4 rounded-xl overflow-hidden p-2 px-10'>
        <Navbar />
        <HeroSection />
      </div>
    </>
  )
}

export default App
