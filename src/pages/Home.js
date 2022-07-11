import React, { useState } from 'react'
import Hero from '../components/heroSection/Hero'
import Info from '../components/infoSection/Info'
import Info2 from '../components/infoSection/Info2'
import Info3 from '../components/infoSection/Info3'
import NavBar from '../components/navBar/navBar'
import Services from '../components/services/Services'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <NavBar toggle={toggle} />
      <Hero />
      <Info />
      <Info2 />
      <Services />
      <Info3 />

    </>
  )
}

export default Home