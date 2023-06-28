
import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiJson, SiOpenai } from "react-icons/si";
import { PiLinkSimpleDuotone } from "react-icons/pi";
import { Button } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter/";
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaHammer } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";

const npminstall = `npm install axios`;


const codeString = `
//example of a request to the OpenAI API using Axios
const axios = require('axios');

//token
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

//request headers
const headers = {
  'Content-Type': 'application/json',
  'Authorization': \`Bearer \${OPENAI_API_KEY}\`
};

//payload
const data = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Hello!' }
  ]
};


//request
axios.post('https://api.openai.com/v1/chat/completions', data, { headers })
  .then(response => {
    //log response
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
`;






export default function GPTEssayIndex() {
    
    const [buttonText, setButtonText] = useState('Copy');
    const [buttonClass, setButtonClass] = useState('bg-gray-800');
  
    const copyCode = () => {
      setButtonClass('bg-green-300');
      setButtonText('Copied');
  
      setTimeout(() => {
        setButtonText('Copy');
        setButtonClass('bg-gray-800');
      }, 2000);
    };

  return (
    <div data-scroll-section>
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <p className="text-font text-left text-sm leading-3 text-white mb-2 hover:text-white cursor-pointer transition-all">
          Projects
        </p>
        <h2 className="title mt-4 xl:w-8/12 lg:w-10/12 text-left w-full font-bold primary-color lg:text-6xl text-3xl lg:leading-10 leading-9">
          <SiOpenai className='inline align-middle mb-4 mr-2'/><span className='text-white'>GPT</span>-Essay.
        </h2>
        <p className="text-font text-left font-normal text-base leading-6 text-gray-600 mt-6">
        GPT-Essay is a desktop application built with Python, designed to assist users in generating high-quality essays effortlessly. Harnessing the power of advanced natural language processing and the cutting-edge GPT-3.5 language model, GPT-Essay offers a streamlined and user-friendly platform for generating well-structured and coherent essays on a wide range of topics.
        It has support for PDF export, and it has a CLI and GUI versions.

        </p>
        <div className="flex justify-start mt-2">
          <FaPython
            className="z-5 text-blue-300 text-center inline mr-2 mt-2"
            size={32}
          />
          <SiJson
            className="z-5 text-gray-400 text-center inline mr-2  my-2"
            size={32}
          />
        </div>
        <hr className="border-gray-300 opacity-10 mt-8" />
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full rounded-xl"
          src="https://i.ibb.co/sJHr57F/image.png"
          alt="Group of people Chilling"
        />
        <img
          className="lg:hidden sm:block hidden w-full rounded-xl"
          src="https://i.ibb.co/sJHr57F/image.png"
          alt="Group of people Chilling"
        />
        <img
          className="sm:hidden block w-full rounded-xl"
          src="https://i.ibb.co/sJHr57F/image.png"
          alt="Group of people Chilling"
        />
      </div>
      <div className="flex justify-end mt-2 h-auto">
        <a href='https://github.com/kalmix/GPT-React' target='_blank'>
        <FaGithub
          className="z-5 text-gray-600 text-center inline ml-2 mt-2 align-middle hover:opacity-40 transition-all duration-300"
          size={32}
        />
        </a>
        <a href='https://gpt-on-react.vercel.app/' target='_blank'>
        <PiLinkSimpleDuotone
          className="z-5 text-blue-400 text-center inline mr-2 ml-2 mt-2 align-middle hover:opacity-40 transition-all duration-300"
          size={32}
        />
        </a>
      </div>
      <hr className="border-gray-300 opacity-10 mt-4" />

      <h1 className='title lg:text-8xl text-4xl text-white primary-color m-24'>Build it yourself <FaHammer className='inline primary-color'/>.</h1>

      <div className="relative max-w-4xl mx-auto mt-24">
      <div className="bg-dark text-white p-4 rounded-md border text-font mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Install with <FaNpm className='inline text-red-600' size={35}/>:</span>
          </div>
          <div className="overflow-x-auto ">
          <SyntaxHighlighter language="lang-bash" className="text-start bg-dark font-text rounded-lg " style={stackoverflowDark} >
            {npminstall}
            {/* <pre id="code" className="text-gray-300 text-start">
              {"        "}
              <code>
                {"\n"}&lt;div class="flex justify-center items-center
                bg-blue-500 text-white p-4"&gt;{"\n"}
                {"  "}&lt;h1 class="text-2xl"&gt;Hello, Tailwind CSS!&lt;/h1&gt;
                {"\n"}
                &lt;/div&gt;
              </code>
              {"\n"}
              {"\n"}
            </pre> */}
            </SyntaxHighlighter>
          </div>
        </div>
        
        <div className="bg-dark text-white p-4 rounded-md border text-font">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Open AI Axios Snippet:</span>
            <CopyToClipboard text={codeString} >
            <button
                onClick={copyCode}
              className={`transition-all bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md ${buttonClass}` }
            >
              {buttonText}
            </button>
            </CopyToClipboard>
          </div>
          <div className="overflow-x-auto ">
          <SyntaxHighlighter language="javascript" className="text-start bg-dark font-text rounded-lg " style={stackoverflowDark} >
            {codeString}
            {/* <pre id="code" className="text-gray-300 text-start">
              {"        "}
              <code>
                {"\n"}&lt;div class="flex justify-center items-center
                bg-blue-500 text-white p-4"&gt;{"\n"}
                {"  "}&lt;h1 class="text-2xl"&gt;Hello, Tailwind CSS!&lt;/h1&gt;
                {"\n"}
                &lt;/div&gt;
              </code>
              {"\n"}
              {"\n"}
            </pre> */}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      {/* <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
            <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
            <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
            <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
        </div>
    </div> */}
    </div>
    </div>
  );
}
