import * as React from 'react';
import CodeCordIndex from '../components/CodeCordIndex';
import Footer from '../components/Footer';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'
import transition from '../transition';

const CodeCord = () => {

    const ref = useRef(null);
    const options = {
        smooth: true,
        multiplier: 0.7,
    }

    return (
        <LocomotiveScrollProvider options={options} containerRef={ref}>
            <main data-scroll-container ref={ref}>
                <CodeCordIndex />
                <Footer />
        </main>
        </LocomotiveScrollProvider>
    );
};

export default transition(CodeCord);