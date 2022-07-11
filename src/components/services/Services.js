import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements"
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/svg-1.svg"
import Icon3 from "../../images/svg-1.svg"

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Mira nuestros trabajos realizados</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP> te vamos ayudar</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP> te vamos ayudar</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP> te vamos ayudar</ServicesP>
                </ServicesCard>


            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services