import "../App.css";
import { Player } from "@lottiefiles/react-lottie-player";
import RandomizedText from "./RandomWord";
import TypeScriptFill from "./TypeScript";
import { TbSpace } from "react-icons/tb";
import TooltipIcon from "./TooltipIcon";
import { Tooltip } from "@material-tailwind/react";

function IndexPage() {
  return (
    <>
      <div className="lg:px-6 xl:px-0 bg-dark lg:-mt-28 " data-scroll-section>
        <div className="container mx-auto relative z-20"></div>
        <div className="mx-auto container relative z-0 px-4 xl:px-0">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
              <h2 className=" text-center md:text-left text-gray-400 text-lg lg:text-2xl text-font">
                My name is
              </h2>
              <h1
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="horizontal"
                className="lg:ml-6 title primary-color-shadow text-3xl lg:text-6xl xl:text-9xl font-black text-gray-300 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color"
              >
                Kalmix,
              </h1>
              <h1
                data-scroll
                data-scroll-speed="-1"
                data-scroll-direction="horizontal"
                data-scroll-delay="1"
                className="title primary-color-shadow text-3xl lg:text-6xl xl:text-9xl font-black text-gray-300 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color"
              >
                <RandomizedText className="random-word" />
              </h1>
              <hr className="w-1/2 md:w-1/4 my-4 md:my-8 border-gray-600 hidden lg:block" />
              <h2 className=" py-4 text-center md:text-left md:py-8 text-gray-600 text-lg lg:text-2xl text-font !pt-0">
                I'm a self-taught{" "}
                <span className="taught">interdisciplinary</span> Developer, I'm
                currently working on{" "}
                <TypeScriptFill className="inline align-middle mb-2 " /> Open
                Source Projects while being an undergraduate SWE{" "}
                <TooltipIcon className="inline align-middle !mb-2" />
              </h2>

              <div className="w-full flex justify-center md:block lg:table-header-group">
                <Tooltip
                  content="Press The 'Space' Key"
                  className="backdrop-blur-md bg-opacity-25 bg-gray-600 text-font-white text-base cursor-pointer "
                >
                  {/* <Button size="lg" className="title primary-bg main-button cursor-pointer">
                  
                  <TbSpace className="h-[18px] w-[18px] inline" /> Press Space to continue
                </Button>  */}
                  <span className="inline-flex !bg-opacity-75 h-full title animate-background-shine cursor-not-allowed items-center justify-center rounded-full  border border-white/80 bg-[linear-gradient(110deg,#666899,45%,#fff,55%,#666899)] bg-[length:250%_100%] px-3 py-2 text-xl font-medium text-white backdrop-blur-3xl">
                    Press Space{" "}
                    <TbSpace className="h-[18px] w-[18px] inline mx-2" /> to
                    continue
                  </span>
                </Tooltip>
              </div>
            </div>
            <div className="w-1/2 lg:w-full sm:w-2/5 h-64 md:h-auto md:w-auto m-auto flex items-center overflow-visible z-50 pointer-events-none">
              <div className="relative z-50">
            <div className="!-z-10">
                  <Player
                    autoplay
                    className="absolute top-0 left-12 transform-gpu scale-110 md:scale-[2.1] moon"
                    loop
                    speed={0.2}
                    src="https://assets3.lottiefiles.com/packages/lf20_0hwoSNGpaK.json"
                  ></Player>
                </div>
                {/* Moon */}
                
                {/* Astronaut */}
                <div
                  data-scroll
                  data-scroll-speed="-1"
                  data-scroll-direction="horizontal"
                >
                  <Player
                    autoplay
                    speed={0.7}
                    className="duration-1000 ease-in-out sm:scale-125 transform-gpu scale-90 md:scale-110 astronaut"
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_l3xc4jty.json"
                  ></Player>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-6 xl:px-0 bg-dark lg:-mt-28 z-50">
          <div className="container mx-auto relative z-20"></div>
          <div className="mx-auto container relative z-0 px-4 xl:px-0">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-1/2 sm:w-2/5 h-64 md:h-auto md:w-auto m-auto flex items-center overflow-hidden">
                <div
                  className="relative"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="horizontal"
                >
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
                <h1
                  data-scroll
                  data-scroll-speed="-1"
                  data-scroll-direction="horizontal"
                  className="title primary-color-shadow text-3xl lg:text-6xl xl:text-9xl font-black text-gray-300 text-center md:text-right "
                >
                  Merging
                </h1>
                <h1
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="horizontal"
                  className="title primary-color-shadow text-3xl lg:text-6xl xl:text-9xl font-black text-gray-300 text-center md:text-right "
                >
                  <span className="primary-color">pieces</span>.
                </h1>
                <hr className=" my-4 md:my-8 border-gray-600 hidden lg:block" />
                <h2 className="py-4 text-center md:text-right md:py-8 text-gray-600 text-lg lg:text-2xl text-font">
                  Coding has always been a passion of mine. I love to create
                  also destroy *<i>cough</i>*{" "}
                  
                  <span className="primary-color">bugs</span> *<i>cough</i>*.
                  Dive into this site to learn more about me and what I do. I
                  promise it <span className="primary-color ">will be fun!</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
