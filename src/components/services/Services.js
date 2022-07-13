import React, { useState } from 'react'
import { ServicesContainer, ServicesH1, ServicesCard } from "./ServicesElements"
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import SliderData from './SliderData'

const Services = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <ServicesContainer id="services">
            <ServicesH1>Mira nuestros trabajos realizados</ServicesH1>
            <section className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
                <ServicesCard>

                    {SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? "slide active" : "slide"} key={index}>
                                {index === current && (
                                    <img src={process.env.PUBLIC_URL + `/assets/products/${slide.image}`} />
                                )}

                            </div>
                        )
                    })}

                </ServicesCard>
            </section>

        </ServicesContainer>
    )
}

export default Services