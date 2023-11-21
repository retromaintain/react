import * as React from 'react';
import PorfolioIndex from '../components/Portfolio';
import Footer from '../components/Footer';
import transition from '../transition';
import Example from '../components/Navbar';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'

const Porfolio = () => {

    const ref = useRef(null);
    const options = {
        smooth: true,
        multiplier: 0.7,
    }

    return (
        <LocomotiveScrollProvider options={options} containerRef={ref}>
            <main data-scroll-container ref={ref}>
        
        <>
             <Example /> 
                <PorfolioIndex />
            <Footer />
        </>
        </main>
        </LocomotiveScrollProvider>
    );
};
export default transition(Porfolio);