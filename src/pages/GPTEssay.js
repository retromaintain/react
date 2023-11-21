import * as React from "react";
import GPTEssayIndex from "../components/GPTEssayIndex";
import Footer from "../components/Footer";
import Example from "../components/Navbar";
import transition from "../transition";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

const CodeCord = () => {
  const ref = useRef(null);
  const options = {
    smooth: true,
    multiplier: 0.7,
  };

  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
           <Example />
          <GPTEssayIndex />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default transition(CodeCord);
