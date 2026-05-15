import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'
import Product from './Pages/Product'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'

import PGN from './Pages/PGN'
import Navbar2 from './Components/Navbar2'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Courses' element={<Courses/>} />
        <Route path='/Courses/:courseId' element={<CourseDetail/>} />
        
        <Route path='/product' element={<Product />}>
          <Route path='Men' element={<Men />} />
          <Route path='Women' element={<Women />} />
          <Route path='Kids' element={<Kids />} />
        </Route>

        <Route path='*' element={<PGN/>}/>
      </Routes>
      <Footer/>     

      
    </div>
  )
}

export default App
