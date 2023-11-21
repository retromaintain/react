import React from "react";
import "../App.css";
import { Player } from "@lottiefiles/react-lottie-player";
// import { Button, Tooltip } from "@material-tailwind/react";
// import RandomizedText from "./RandomWord";
// import TypeScriptFill from "./TypeScript";

// import TooltipIcon from "./TooltipIcon";

function Hero2() {
  return (
    <>
    <div data-scroll-section>
    {/* <hr className="border-1 border-gray-700/30 mb-10 visible lg:invisible sm:visible" /> */}
      <div className="lg:px-6 xl:px-0 bg-dark lg:-mt-28 z-50">
        <div className="container mx-auto relative z-20"></div>
        <div className="mx-auto container relative z-0 px-4 xl:px-0">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-1/2 sm:w-2/5 h-64 md:h-auto md:w-auto m-auto flex items-center overflow-hidden">
              <div className="relative">
                {/* Moon */}
                <Player
                  autoplay
                  className="absolute top-0 left-0 transform-gpu scale-110 md:scale-150 moon"
                  loop
                  speed={0.5}
                  src="https://assets1.lottiefiles.com/private_files/lf30_n0xnbjiz.json"
                ></Player>

                {/* Astronaut */}
                <Player
                  autoplay
                  speed={0.7}
                  className="transition-all duration-700 ease-in-out sm:scale-125 transform-gpu scale-90 md:scale-110 astronaut"
                  loop
                  src="https://assets10.lottiefiles.com/packages/lf20_3k8saiyl.json"
                ></Player>
              </div>
            </div>
            <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48 ">
              <h1 className="title primary-color-shadow text-3xl lg:text-6xl xl:text-9xl font-black text-gray-300 text-center md:text-right ">
                Merging <span className="primary-color">pieces</span>.
              </h1>
              <hr className=" my-4 md:my-8 border-gray-600 hidden lg:block" />
              <h2 className="py-4 text-center md:text-right md:py-8 text-gray-600 text-lg lg:text-2xl text-font">
                Coding has always been a passion of mine. I love to create also destroy *<i>cough</i>* <span className="primary-color">bugs</span> *<i>cough</i>*.
                Dive into this site to learn more about me and what I do. I promise it will be fun!
              </h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Hero2;
