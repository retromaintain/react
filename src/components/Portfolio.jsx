import React from "react";
import { FaReact } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { PiCursorClickFill } from "react-icons/pi";
import { BsFillBootstrapFill } from "react-icons/bs";

export default function PorfolioIndex() {
  return (
    <div data-scroll-section>
<section className="bg-dark dark:bg-gray-900 mt-10">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="primary-color title text-3xl font-semibold text-center text-gray-100 capitalize lg:text-6xl dark:text-white">
      Web Portfolio.
    </h1>
    <p className="mt-4 text-font text-center text-gray-600 lg:text-xl">Here you can see in more detail some of my web-development projects. <br /> Just <PiCursorClickFill className="inline" /> them to see the sites in action.</p>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
      <div
        className="flex items-end overflow-hidden bg-contain rounded-xl h-96 hover:scale-110 hover:border hover:border-indigo-500 transition-all"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/sJHr57F/image.png")'
        }}
      >
        <div className="w-full px-8 py-4 overflow-hidden rounded-b-xl backdrop-blur-lg bg-white/30 dark:bg-gray-800/60">
          <h2 className="mt-4 text-xl font-semibold text-blue-200 capitalize dark:text-white">
            React-GPT
          </h2>
            <div className="flex justify-center">
          <FaReact className="z-5 text-blue-400 text-center inline mr-2 mt-2" size={32}/>
          <SiAxios className="z-5 text-purple-200 text-center inline mr-2  my-2" size={32}/>
          <SiTailwindcss className="z-5 text-blue-400 text-center inline mr-2  my-2" size={32}/>
          <FaNodeJs className="z-5 text-green-400 text-center inline mr-2  my-2" size={32}/>
            </div>
        </div>
      </div>
      <div
        className="flex items-end overflow-hidden bg-contain rounded-xl h-96 hover:scale-110 hover:border hover:border-indigo-500 transition-all"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/Np5gNzW/image.png")'
        }}
      >
        <div className="w-full px-8 py-4 overflow-hidden rounded-b-xl backdrop-blur-lg bg-white/30 dark:bg-gray-800/60 ">
          <h2 className="mt-4 text-xl font-semibold text-indigo-600 dark:text-white">
            internetrepdom
          </h2>
          <div className="flex justify-center">
          <FaHtml5 className="z-5 !text-orange-300 text-center inline mr-2 mt-2 align-middle" size={32}/>
          <BsFillBootstrapFill className="z-5 text-purple-200 text-center inline mr-2  my-2 align-middle " size={32}/>
          <SiJavascript className="z-5 text-yellow-400 text-center inline mr-2  my-2 align-middle" size={32}/>
          </div>
        </div>
      </div>
      <div
        className="flex items-end overflow-hidden bg-contain rounded-xl h-96 hover:scale-110  hover:border hover:border-orange-500 transition-all"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/6JssRxk/image.png")'
        }}
      >
        <div className="w-full px-8 py-4 overflow-hidden rounded-b-xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/60">
          <h2 className="mt-4 text-xl font-semibold text-orange-900 capitalize dark:text-white">
            Mixser Agency
          </h2>
          <div className="flex justify-center">
          <FaHtml5 className="z-5 !text-orange-300 text-center inline mr-2 mt-2 align-middle" size={32}/>
          <FaBootstrap className="z-5 text-purple-200 text-center inline mr-2  my-2 align-middle " size={32}/>
          <SiJavascript className="z-5 text-yellow-400 text-center inline mr-2  my-2 align-middle" size={32}/>
            </div>
        </div>
      </div>
      <div
        className="flex items-end overflow-hidden bg-contain rounded-xl h-96 hover:scale-110 hover:border hover:border-green-500 transition-all"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/P1CxTpf/image.png")'
        }}
      >
        <div className="w-full px-8 py-4 overflow-hidden rounded-b-xl backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
          <h2 className="mt-4 text-xl font-semibold text-green-600 capitalize dark:text-white">
            PyBin.py
          </h2>
          <div className="flex justify-center">
          <FaHtml5 className="z-5 !text-orange-300 text-center inline mr-2 mt-2 align-middle" size={32}/>
          <SiTailwindcss className="z-5 text-blue-500 text-center inline mr-2  my-2 align-middle " size={32}/>
          <SiJavascript className="z-5 text-yellow-400 text-center inline mr-2  my-2 align-middle" size={32}/>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>

  );
}
