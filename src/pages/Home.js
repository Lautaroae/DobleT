import React, { useState } from 'react'
import Hero from '../components/heroSection/Hero'
import { homeObjOne } from '../components/infoSection/Data'
import Info from '../components/infoSection/Info'
import NavBar from '../components/navBar/navBar'
import Sidebar from '../components/navBar/Sidebar/Sidebar'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
    </>
  )
}

export default Home