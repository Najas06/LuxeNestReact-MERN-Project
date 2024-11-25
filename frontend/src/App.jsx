import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import About from './pages/About'
import Signup from './pages/Signup'
import Header from './components/Header'

function App() {
  return (
    // BrowesrRoutes to change 
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App