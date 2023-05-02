import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/AboutUs/Data';
import PastEvents from '../components/PastEvents';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutUs {...homeObjOne} />
            <PastEvents />
            {/* <AboutUs {...homeObjTwo} />
            <AboutUs {...homeObjThree} /> */}
        </>
    )
}

export default Home