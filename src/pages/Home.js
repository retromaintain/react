import * as React from 'react';

import IndexPage from '../components/IndexPage';
import Footer from '../components/Footer';
//import ChartComponent from '../components/ChartGitHub';
// import Hero2 from '../components/Hero2';
import '../transition';
import Example from '../components/Navbar';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'
import transition from '../transition';

const Home = () => {
    const ref = useRef(null);

    const options = {
      smooth: true,
      multiplier: 0.7,
    } 

    return (
        <>
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
             <Example />
            <IndexPage />
            {/* <Hero2 /> */}
            {/* <ChartComponent /> */}
            <Footer />
            </main>
     </LocomotiveScrollProvider> 
        </>
        
    );
};

export default transition(Home);

// export default function Home() {
//   return (
//     <>
//         <Example />
//         <IndexPage />
//         <Footer />
//     </>
//   );
// }