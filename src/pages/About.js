import * as React from 'react';
import Example from '../components/Navbar';
import About3 from '../components/About3';
import Footer from '../components/Footer';
import transition from '../transition';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'

const About = () => {

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
                <About3 />
            <Footer />
        </>
        </main>
        </LocomotiveScrollProvider>
    );
};

export default transition(About);

// export default function About() {
//   return (
//     <>
//         <Example />
//         <About3 />
//         <Footer />
//     </>
//   );
// }