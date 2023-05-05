import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./Hero.css";


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        []
    );

    return (
        <HeroContainer id='home'>
            <HeroContent>
                <HeroBg>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            fullScreen: false,
                            background: {
                                color: {
                                    value: "#000000",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ff0000",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                </HeroBg>

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