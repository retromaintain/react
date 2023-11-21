import * as React from 'react';
import ReactGPTindex from '../components/ReactGPTindex';
import Footer from '../components/Footer';
import transition from '../transition';
import Example from '../components/Navbar';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'

const Folio = () => {

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
                <ReactGPTindex />
            <Footer />
        </>
        </main>
        </LocomotiveScrollProvider>
    );
};

export default transition(Folio);