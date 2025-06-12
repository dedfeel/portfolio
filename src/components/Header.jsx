import React from 'react'
import '../style/Header.css'
import '../index.css'
import { Link, useLocation } from 'react-router-dom'
import ins from '../assets/insLogo.png'
import whatsApp from '../assets/whatsapp.png'
import github from '../assets/githublogo.png'
import tg from '../assets/Tg.png'

export default function Header({ isMenuOpen, closeMenu }) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className={`header ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className='div'>
        <h1 className='h1'>Berik Aziz</h1>
        <h2 className='h2'>Front-End Developer</h2>
        <h2 className='h2'>Professional certificate: <span className='Meta'><br />Meta Front-End Developer</span></h2>
        <p className='p'>Fast websites. Clean code. Happy users.</p>
      </div>

      <div className='headLink'>
        <Link 
          className={`headDiv ${currentPath === '/' ? 'active' : ''}`} 
          to="/"
          onClick={closeMenu}
        >
          <span className="line"></span>
          <span className="text">ABOUT</span>
        </Link>
        <Link 
          className={`headDiv ${currentPath === '/possibility' ? 'active' : ''}`} 
          to="/possibility"
          onClick={closeMenu}
        >
          <span className="line"></span>
          <span className="text">SKILLS</span>
        </Link>
        <Link 
          className={`headDiv ${currentPath === '/portfolio' ? 'active' : ''}`} 
          to="/portfolio"
          onClick={closeMenu}
        >
          <span className="line"></span>
          <span className="text">PROJECTS</span>
        </Link>
      </div>

      <div className='headImg'>
        <a href="https://github.com/dedfeel"><img className='github' src={github} alt="GitHub" /></a>
        <a href="https://wa.me/77057673435"><img className='whatsApp' src={whatsApp} alt="WhatsApp" /></a>
        <a href="https://www.instagram.com/azzi_xxy/"><img className='ins' src={ins} alt="Instagram" /></a>
        <a href="https://t.me/azzi_xxy"><img className='tg' src={tg} alt="Telegram" /></a>
      </div>
    </div>
  )
}