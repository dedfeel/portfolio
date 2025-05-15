import React, { useState } from 'react'
import '../style/Portfolio.css'
import Header from '../components/Header'
import Data from '../data/projects.json'
import vlevo from '../assets/vlevo.png'
import vpravo from '../assets/vpravo.png'
import Footer from '../components/Footer'
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

  return (
    <div>
      <Header/>
      <img src={BurgerMenu} className='BurgerMenu' alt="" />
      <h1 className='MainAbout'>PROJECT</h1>
      <div className='portfolio'>
        <h1 className='text-5xl'>Project</h1>
        <div className='projects'>
          <p onClick={prev} className='prev' disabled={index === 0}><img className=' prevImg w-15' src={vlevo}  alt="" /></p>
          <a href=''  className='projectBox'>
            <img className='ProjectImg' src={item.image} alt="" />
            <div>
              <h1 className='itemTitle'>{item.title}</h1>
              <p>{item.description}</p>
              <p>{item.techStack}</p>
            </div> 
          </a>
          <p onClick={next} className='next' disabled={index === Data.length - 1} ><img className='nextImg w-15' src={vpravo}alt="" /></p>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
} 
