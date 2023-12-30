import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"


function App() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App h-full w-full m-0 p-0 flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
      {scroll ? (
        <div className="bg-black fixed right-12 bottom-12 sm:right-4 sm:bottom-4 flex justify-center items-center rounded-full h-16 w-16" onClick={scrollToTop}>
          <FaArrowUp size={24} color="white" />
        </div>
      ) : ""}
    </div>
  )
}

export default App
