import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
    ServicesContainer, ServicesH1, ServicesWrapper,
    ServicesCard, ServicesIcon, ServicesH2, ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Lawn Mowing </ServicesH2>
                    <ServicesP>We help you create beautiful gardens.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Pruning/Hedging</ServicesH2>
                    <ServicesP>Pruning and hedging at the correct time of year for each type of plant are paramount to plant health and bloom performance.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Leaf Removal</ServicesH2>
                    <ServicesP>Leaf removal can be customized on most contracts to mirror a clients expectations of quantity of visits. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;