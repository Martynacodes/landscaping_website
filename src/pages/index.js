import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
    homeObjectOne,
    homeObjectTwo,
    homeObjectThree,
    homeObjectFour
} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjectOne} />
            <Services />
            <InfoSection {...homeObjectThree} />
            <InfoSection {...homeObjectFour} />

            {/* /* passing in the data from homeObbject */}
            <Footer />
        </>
    )
}

export default Home;