import React, { useState } from 'react'
import Header from '../components/Header'
import Strelka from '../assets/niz.png'
import BurgerMenu from '../assets/burgerMenu.png'

import '../index.css'
import '../style/Skills.css'

export default function Possibility() {
  const [langOpen, setLangOpen] = useState(false);
  const [frameworksOpen, setFrameworksOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [generalOpen, setGeneralOpen] = useState(false);


  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <div className={`homeDiv ${isMenuOpen ? 'hiddenDiv' : ''}`}>
        <div className='headContainer'>
        <img 
        src={BurgerMenu}  
        className='BurgerMenu' 
        alt="Menu" 
        onClick={toggleMenu}
      />
        <h1 className='MainAbout'>SKILLS</h1>
      </div>
      <div className='sectoin'>
        <h1 className='Skills'>Skills</h1>
        <h1 className='text-2xl  '>My technical level</h1>

        <div className="container px-4 text-white ">
          <div className="language">
            <h1
              onClick={() => setLangOpen(prev => !prev)}
              className="flex items-center justify-between cursor-pointer text-xl font-semibold "
            >
              Programming languages
              <img
                src={Strelka}
                alt=""
                className={`h-3 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`}
              />
            </h1>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                langOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p>Javascript</p>
              <p>HTML5</p>
              <p>CSS3</p>
              
            </div>
          </div>

          <div className="frameworks">
            <h1
              onClick={() => setFrameworksOpen(prev => !prev)}
              className="flex items-center justify-between cursor-pointer text-xl font-semibold"
            >
              Frameworks and libraries
              <img
                src={Strelka}
                alt=""
                className={`h-3 transition-transform duration-300 ${frameworksOpen ? 'rotate-180' : ''}`}
              />
            </h1>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                frameworksOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p>Tailwind CSS</p>
              <p>React (Vite)</p>
              <p>Bootstrap</p>
            </div>
          </div>

          <div className="tools">
            <h1
              onClick={() => setToolsOpen(prev => !prev)}
              className="flex items-center justify-between cursor-pointer text-xl font-semibold"
            >
              Other Tools
              <img
                src={Strelka}
                alt=""
                className={`h-3 transition-transform duration-300 ${toolsOpen ? 'rotate-180' : ''}`}
              />
            </h1>
            <div
              className={`transition-all duration-300 overflow-hidden   ${
                toolsOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p>GitHub</p>
              <p>REST API</p>
              <p>Axios</p>
              <p>VS Code</p>
            </div>
          </div>

          <div className="General">
            <h1
              onClick={() => setGeneralOpen(prev => !prev)}
              className="flex items-center justify-between cursor-pointer text-xl font-semibold"
            >
              Skills (General)
              <img
                src={Strelka}
                alt=""
                className={`h-3 transition-transform duration-300 ${generalOpen ? 'rotate-180' : ''}`}
              />
            </h1>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                generalOpen ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p>Responsive Design</p>
              <p>Component-based Thinking</p>
              <p>Focus on UI/UX</p>
              <p>Writing fast, clean code</p>
              <p>Working with projects</p>
            </div>
          </div>
        </div>
      </div>

      <div className='Experience'>
        <div className='box'>
          <h2 className='texth2'>+ 1</h2>
          <p className='text2'>Experience</p>
        </div>
        <div className='box'>
          <h2 className='texth2'>+ 10</h2>
          <p className='text2'>Projects</p>
        </div>
        <div className='box'>
          <h2 className='texth2'>React + Vite</h2>
          <p className='text2'>Stack</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}
