import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements"


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP> te vamos ayudar</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP> te vamos ayudar</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP> te vamos ayudar</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services