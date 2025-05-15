import React from 'react'
import '../style/Header.css'
import { Link, useLocation } from 'react-router-dom'
import ins from '../assets/insLogo.png'
import whatsApp from '../assets/whatsapp.png'
import github from '../assets/githublogo.png'
import tg from '../assets/Tg.png'

export default function Header() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className='header'>
      <div className='div'>
        <h1 className='h1'>Berik Aziz</h1>
        <h2 className='h2'>Front-End Developer</h2>
        <p className='p'>Fast websites. Clean code. Happy users.</p>
      </div>

      <div className='headLink'>
        <Link className={`headDiv ${currentPath === '/' ? 'active' : ''}`} to="/">
          <span className="line"></span>
          <span className="text">ABOUT</span>
        </Link>
        <Link className={`headDiv ${currentPath === '/possibility' ? 'active' : ''}`} to="/possibility">
          <span className="line"></span>
          <span className="text">SKILLS</span>
        </Link>
        <Link className={`headDiv ${currentPath === '/portfolio' ? 'active' : ''}`} to="/portfolio">
          <span className="line"></span>
          <span className="text">PROJECTS</span>
        </Link>
      </div>

      <div className='headImg'>
        <a href="#"><img className='github' src={github} alt="GitHub" /></a>
        <a href="#"><img className='whatsApp' src={whatsApp} alt="WhatsApp" /></a>
        <a href="#"><img className='ins' src={ins} alt="Instagram" /></a>
        <a href="#"><img className='tg' src={tg} alt="Telegram" /></a>
      </div>
    </div>
  )
}
