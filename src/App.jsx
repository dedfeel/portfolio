import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Possibility from './pages/Possibility'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/possibility' element={<Possibility/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
