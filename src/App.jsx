import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-full w-full m-0 p-0 gap-4 flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <br></br>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  )
}

export default App
