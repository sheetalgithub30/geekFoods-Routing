import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Quotes from './Quotes/Quotes.jsx'
import Resturant from './Resturant/Resturant.jsx'
import Contact from './Contact/Contact.jsx'
import Food from './Food/Food.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}></Route>
        <Route path ='/quotes' element={<Quotes/>}></Route>
        <Route path ='/resturants'element={<Resturant/>}></Route>
        <Route path='/foods' element={<Food/>}></Route>
        <Route path = '/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App