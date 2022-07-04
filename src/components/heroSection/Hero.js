import React from 'react'
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements"

const Hero = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4" />
            </HeroBg>
        </HeroContainer>
    )
}

export default Hero