import React from 'react'
import Hero from '../components/heroSection/Hero'
import Info from '../components/infoSection/Info'
import Info2 from '../components/infoSection/Info2'
import Info3 from '../components/infoSection/Info3'
import Services from '../components/services/Services'
import SliderData from '../components/services/SliderData'


const Home = () => {

  return (
    <>

      <Hero />
      <Info />
      <Info2 />
      <Services slides={SliderData} />
      <Info3 />

    </>
  )
}

export default Home