import { useState } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Hero } from './Components/Hero'
import { About } from './Components/About'
import { Why } from './Components/Why'
import { Responsibility } from './Components/Responsibility'
import { Contact } from './Components/Contact'
import { Partners } from './Components/Partners'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className=' fixed w-full'>
      <Navbar />
      </div>
      <Hero />
      <About />
      <Why />
      <Responsibility />
      <Contact />
      <Partners />
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
