import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { Player } from "@lottiefiles/react-lottie-player";

export default function About3() {
    return (
      <div data-scroll-section>
<div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-left">
  <p className="font-normal text-left text-sm leading-3 text-indigo-700 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer pb-2">
    Passion
  </p>
  <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
    <div className="w-full lg:w-6/12">
      <h2 className="title w-full text-left font-bold lg:text-5xl text-3xl lg:leading-10 text-white leading-9">
        The <span className="primary-color">delight</span> of self learning, it's a journey, really...
      </h2>
      <p className="font-normal text-xl	 leading-6 text-gray-500 dark:text-gray-200 mt-6 text-font">
      I am deeply passionate about embarking on a self-learning journey to master the art of coding. Just as the well-known saying goes, "Learning is a lifelong process," I firmly believe that continuous self-improvement is the key to unlocking new opportunities and personal growth.
      </p>
      <p className="font-normal text-xl	 leading-6 text-gray-500 dark:text-gray-200 mt-6 text-font">
      In today's fast-paced and ever-evolving world, acquiring coding skills has become increasingly valuable and empowering. The ability to write code allows individuals to bring their creative ideas to life, solve complex problems, and make a positive impact in various industries and sectors.
      </p>
    </div>
    <div className="w-full lg:w-6/12">
    <Player
                autoplay
                loop
                src="https://lottie.host/8149a7d2-cde5-41b8-9528-793e1f8218fe/z7A03bC747.json"
              ></Player>
    </div>
  </div>
  <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 mt-10">
  <div className="w-full lg:w-6/12">
    {/* Your content on the left */}
  </div>
  <div className="w-full lg:w-6/12 flex justify-end">
    <h2 className="title w-full font-bold lg:text-5xl text-3xl lg:leading-10 text-white leading-9 sm:text-center md:text-right">
      And my <span className="primary-color">favorite</span> tech stack is... *drumrolls 🥁*
    </h2>
  </div>
</div>




  <div className="relative mt-24">
    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
      <div className="z-20 w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center">
        <BiLogoMongodb className="z-5 text-green-400" size={32}/>
      </div>
      <div className="z-20 w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center">
        <FaNodeJs className="z-5 text-green-400" size={32}/>
      </div>
      <div className="z-20 w-12 h-12 bg-gray-200 rounded-full justify-center items-center sm:flex hidden">
        <FaReact className="z-5 z-20 text-blue-400" size={32}/>
      </div>
    </div>
    <hr className="z-1 absolute top-2/4 w-full bg-gray-500 bg-opacity-20" />
  </div>


  
  
  <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
    <div>
      <p className="title lg:text-2xl text-xl lg:leading-6 leading-5 text-green-500 dark:text-white mt-6">
        MongoDB
      </p>
      <p className="text-font-white text-base leading-6 dark:text-gray-200 mt-6">
      MongoDB is a flexible and scalable NoSQL database system designed for efficient handling of unstructured data, offering replication and high availability for data durability.
      </p>
    </div>
    <div>
      <p className="title lg:text-2xl text-xl lg:leading-6 leading-5 text-green-400 dark:text-white mt-6">
        NodeJS
      </p>
      <p className="text-font-white text-base leading-6 dark:text-gray-200 mt-6">
      Node.js is a powerful and versatile JavaScript runtime that allows for server-side scripting and enables building scalable, high-performance applications using event-driven, non-blocking I/O paradigm.
      </p>
    </div>
    <div className="sm:block hidden">
      <p className="title lg:text-2xl text-xl lg:leading-6 leading-5 text-blue-500 dark:text-white mt-6">
        React
      </p>
      <p className="text-font-white text-base leading-6 dark:text-gray-200 mt-6">
      React is a popular JavaScript library used for building user interfaces. It allows developers to create reusable UI components and efficiently manage application state, resulting in interactive and dynamic web applications.
      </p>
    </div>
  </div>
  <div className="sm:hidden block relative mt-8">
    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
    <div className="z-20 w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center">
        <FaReact className="z-5 text-blue-400" size={32}/>
      </div>
    </div>
    <hr className="z-0 absolute top-2/4 w-full bg-gray-500 bg-opacity-20" />
  </div>
  <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
    <div>
      <p className="title lg:text-2xl text-xl lg:leading-6 leading-5 text-blue-500 dark:text-white mt-6">
        React
      </p>
      <p className="text-font-white text-base leading-6 dark:text-gray-200 mt-6">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </div>
  </div>
</div>
</div>

    );
}
