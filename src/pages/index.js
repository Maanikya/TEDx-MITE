import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import { homeObjOne } from '../components/AboutUs/Data';
import PastEvents from '../components/PastEvents';
import Footer from '../components/Footer';

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
            <Footer />
            {/* <AboutUs {...homeObjTwo} />
            <AboutUs {...homeObjThree} /> */}
        </>
    )
}

export default Home