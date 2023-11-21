import * as React from 'react';
import Kicsindex from '../components/Kicsindex';
import Footer from '../components/Footer';
import transition from '../transition';
import Example from '../components/Navbar';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'

const Kics = () => {

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
                <Kicsindex />
            <Footer />
        </>
        </main>
        </LocomotiveScrollProvider>
    );
};

export default transition(Kics);