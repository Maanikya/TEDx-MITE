import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroContent>
                <HeroH1>
                    Ideas worth spreading.
                </HeroH1>
                <HeroP>
                    Lorem ipsum siuuuuuu wewfwnfkwenvlkw wvpsnevpnvpn wvinswvik swdnvipksnvpon
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/Register' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Register Now {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection