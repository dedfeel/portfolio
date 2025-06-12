import React, { useState } from 'react'
import '../style/Portfolio.css'
import '../index.css'
import Header from '../components/Header'
import Data from '../data/projects.json'
import vlevo from '../assets/vlevo.png'
import vpravo from '../assets/vpravo.png'
import BurgerMenu from '../assets/burgerMenu.png'


export default function Portfolio() {
  const [index, setIndex] = useState(0);
            
  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };
  
  const item = Data[index];

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
  );
  };

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
        <h1 className='MainAbout'>PROJECT</h1>
      </div>
      
      <div className='portfolio'>
        <h1 className='text-5xl project-title'>Project</h1>
        <div className='projects'>
          <p onClick={prev} className='prev' disabled={index === 0}><img className=' prevImg w-15' src={vlevo}  alt="" /></p>
          <a href={item.link}  className='projectBox'>
            <img className='ProjectImg' src={item.image} alt="" />
            <div>
              <h1 className='itemTitle'>{item.title}</h1>
              <p>{item.description}</p>
              <p>{item.techStack}</p>
            </div> 
          </a>
          <p onClick={next} className='next' disabled={index === Data.length - 1} ><img className='nextImg w-15' src={vpravo}alt="" /></p>
        </div>

        <div className="project-container">
          {Data.map((item) => (
            <a
              key={item.index}
              href={item.link}
              target="_blank"
              className="project-card"
            >
            
              <img src={item.image} alt={item.title} className="project-image" />
              <div className="project-content">
                <h2 className="project-title">{item.title}</h2>
                <p className="project-description">{item.description}</p>
                <p className="project-tech">{item.techStack.join(",")}</p>
              </div>
            </a>
          ))}
        </div>
          <p className='comment'>These projects were made for personal practice only, so some of 
          the  websites don't have a responsive design. Please view them on a laptop. Thank you!</p>
        
      </div>
      </div>
     
    </div>
  )
} 
