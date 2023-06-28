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

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'




function App() {
  const ref = useRef(null);

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
