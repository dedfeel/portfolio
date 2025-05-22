
import React, { useState } from 'react'
import '../style/Home.css'
import '../index.css'
import Header from '../components/Header'
import BurgerMenu from '../assets/burgerMenu.png'

export default function Home() {
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
      <div className='headContainer'>
        <img 
        src={BurgerMenu}  
        className='BurgerMenu' 
        alt="Menu" 
        onClick={toggleMenu}
      />
        <h1 className='MainAbout'>ABOUT</h1>
      </div>
      
      <div className='main'>
        <div>
           <div className='maintext'>
                <h3>Experience & Technologies</h3>
                <p className='text2'>I am a frontend developer with 1 year of experience, specializing in building modern and responsive web interfaces using React, JavaScript, Tailwind CSS, and Bootstrap. I have strong skills in HTML5, CSS3, and GitHub.</p>
                <br /><h3>API & Data Integration</h3> 
                <p className='text2'>I have experience working with REST APIs and am proficient in using React and Axios for seamless data integration in frontend applications.</p>
                <br /><h3> Soft Skills & Design Knowledge</h3>
                <p className='text2'>I am a responsible and self-motivated developer with strong teamwork and communication skills. I have a solid understanding of responsive web design principles and basic UI/UX design knowledge using tools like Figma and Adobe Photoshop.</p>
                <br /><h3>Future Goals</h3>
                <p className='text2'>Currently, I am expanding my backend development skills with Node.js and PostgreSQL. My goal is to become a Full Stack Developer and continue growing as a well-rounded professional. I am always eager to learn new technologies and improve my skills.</p>
            </div>
        </div>
      </div>
    </div>
  )
}