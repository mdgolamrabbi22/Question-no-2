import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Fotter'
import Card from './components/Card'

function App() {
 

  return (
    <>
      <Header/>
      <Banner/>
      <h1 className='text-center text-4xl m-10 text-amber-500 font-bold' >Our All Products</h1>
      <Card/>
      <Footer/>
    </>
  )
}

export default App
