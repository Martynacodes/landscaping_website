import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import {
    HeroContainer, HeroBackground, VideoBackground,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBackground>
            <HeroContent>
                <HeroH1>Landscaping Made Easy</HeroH1>
                <HeroP>Schedule a service today and receive a 10% discount on your next serivce.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Schedule a service {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    )
};

export default HeroSection;