import React from 'react'
import ins from '../assets/insLogo.png'
import whatsApp from '../assets/whatsapp.png'
import github from '../assets/githublogo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <h1>b_Aziz</h1>
      <p>Front-End Developer</p>
      <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About me</Link>
            <Link to={'/possibility'}>Skills</Link>
            <Link to={'/portfolio'}>Portfolio</Link>
      </div>
      <div>
        <a href=""><img src={github} alt="" /></a>
        <a href=""><img src={whatsApp} alt="" /></a>
        <a href=""><img src={ins} alt="" /></a>

      </div>
    
      
    </div>
  )
}
