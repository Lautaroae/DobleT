import React, { useState } from 'react'
import Video from "../../videos/Video.mp4"
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements"
import { Button } from '../ButtonElement'

const Hero = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Somos una empresa dedicada a la sublimacion</HeroH1>
                <HeroP>Nos encanta ganar dinero</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get Started{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero