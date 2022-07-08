import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import Hero from '../components/heroSection/Hero'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/Data'
import Info from '../components/infoSection/Info'
import NavBar from '../components/navBar/navBar'
import Sidebar from '../components/navBar/Sidebar/Sidebar'
import Services from '../components/services/Services'


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
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Home