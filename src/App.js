import './App.css';
import * as React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Porfolio from './pages/Porfolio';
import ReactGPT from './pages/ReactGPT';
import CodeCord from './pages/CodeCord';
import Kics from './pages/Kics';
import GPTEssay from './pages/GPTEssay';
import Darkmode from 'darkmode-js';



import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef, useEffect } from 'react'



function App() {
  const darkOptions = {
 // default: 'unset'
    time: '1s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#ededed',  // default: '#fff'
    buttonColorDark: '#121212',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }

  const darkmode = new Darkmode(darkOptions);
  darkmode.showWidget();
  const ref = useRef(null);

  console.warn = () => {};
  
  const options = {
    smooth: true,
    multiplier: 0.7,
  } 

  return (
    <>
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
    <div className="App bg-dark">
      <BrowserRouter>
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Porfolio />} />
        <Route path="/codecord" element={<CodeCord />} />
        <Route path="/react-gpt" element={<ReactGPT />} />
        <Route path="/kics" element={<Kics />} />
        <Route path="/gpt-essay" element={<GPTEssay />} />
        

      {/* <Example />
      <IndexPage /> */}
      </Routes>
      </AnimatePresence>
      </BrowserRouter>
    </div>
    </main>
    </LocomotiveScrollProvider>
    </>
  );
}

export default App;
