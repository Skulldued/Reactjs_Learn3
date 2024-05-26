import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Manage from './component/Manage'
import Newsletter from './component/Newsletter'
import Card from "../src/component/Card";
import Footer from './component/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Manage/>
      <Newsletter/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
