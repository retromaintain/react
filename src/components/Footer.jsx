import "../App.css";
import { FaReact } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Fragment, useState } from "react";
import { SiKofi } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { Transition, Dialog } from "@headlessui/react";
import { DiMitlicence } from "react-icons/di";

import { FaWindowClose } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { Tooltip } from "react-tooltip";

export default function Footer() {
  let [isOpen, setIsOpen] = useState(true);
  const [isPromptMissingDialogOpen, setIsPromptMissingDialogOpen] =
    useState(false);

  return (
    <>
      <div data-scroll-section>
        <Transition appear show={isPromptMissingDialogOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto text-font"
            onClose={() => setIsPromptMissingDialogOpen(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-99" />
              </Transition.Child>

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
                onClick={() => setIsPromptMissingDialogOpen(false)}
              >
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white/5 backdrop-blur-3xl backdrop shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h2"
                    className="text-4xl title leading-6 text-center font-bold primary-color"
                  >
                    <div className="flex items-center justify-center m-3"></div>
                    React out to me.
                  </Dialog.Title>
                  <hr className="border-gray-300 opacity-10 mt-5" />
                  <div className="mt-4 text-font">
                    <IoIosMail className="text-4xl text-center mx-auto primary-color" />
                    <p className="text-center text-gray-200">
                      kalmixdev@gmail.com
                    </p>
                    <FaDiscord className="text-4xl text-center mx-auto primary-color" />
                    <p className="text-center text-gray-200">@jas1el</p>
                  </div>
                  <div className="mt-4 flex items-center justify-center">
                    <button
                      onClick={() => setIsPromptMissingDialogOpen(false)}
                      className="mb-3 px-4 py-2 text-lg font-azeret-mono-black primary-bg text-white opacity-60 rounded-lg shadow-lg hover:opacity-30 transition-all duration-300"
                    >
                      <FaWindowClose className="inline align-middle mr-2" />
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>

        <footer
          className={`mt-52 border-t border-gray-300 border-opacity-10 font-azeret-mono-regular text-gray-200 z-50 w-full text-font text-lg`}
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-center text-blue-600 ">
              <FaReact className="text-8xl light-backdrop-xl react-icon-spin" />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed">
              Made with{" "}
              <FaHeart className="inline align-middle text-red-600 pulse" /> by{" "}
              <strong className="primary-color hover:opacity-25 transition-all duration-300">
                Kalmix
              </strong>
              <br />
              Animations provided by{" "}
              <a className="primary-color hover:opacity-25 transition-all duration-300" href="https://lottiefiles.com/">LottieFiles</a>
              <br />
              <DiMitlicence className="inline align-middle mb-2 !text-red-600 !-mr-1" size={50}/> <span className="!text-xl !mt-10">License</span>
             
            </p>

            <ul className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              <li>
                <Tooltip id="portfolio" />
                <a
                  className="hover:text-gray-400 transition-colors duration-300"
                  href="https://kalmix.github.io/"
                  data-tooltip-content="Root Repository"
                  data-tooltip-id="portfolio"
                >
                  Repository
                </a>
              </li>

              <li>
                <Tooltip id="source" />
                <a
                  className="hover:text-gray-400 transition-colors duration-300 "
                  href="https://github.com/kalmix/GPT-React"
                  data-tooltip-content="Code of this project"
                  data-tooltip-id="source"
                >
                  Source Code
                </a>
              </li>

              <li>
                <Tooltip id="api" />
                <a
                  data-tooltip-content="Click me"
                  data-tooltip-id="api"
                  onClick={() => setIsPromptMissingDialogOpen(true)}
                  className="hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                >
                  Quick Contact
                </a>
              </li>
            </ul>

            <ul className="mt-12 flex justify-center gap-6 md:gap-8">
              <li>
                <Tooltip id="twitter" />
                <a
                  href="https://twitter.com/kalmixdev"
                  rel="noreferrer"
                  target="_blank"
                  data-tooltip-content="Twitter: @kalmixdev"
                  data-tooltip-id="twitter"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <Tooltip id="discord" />
                <a
                  href="https://discordapp.com/users/929094106339213363"
                  rel="noreferrer"
                  target="_blank"
                  data-tooltip-id="discord"
                  data-tooltip-content="Discord: @jas1el"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  <span className="sr-only">Discord</span>
                  <FaDiscord size={24} />
                </a>
              </li>

              <li>
                <Tooltip id="kofi" />
                <a
                  href="https://ko-fi.com/kalmix"
                  rel="noreferrer"
                  target="_blank"
                  data-tooltip-id="kofi"
                  data-tooltip-content="Ko-fi Dontations"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  <SiKofi size={24} />
                  <span className="sr-only">Ko-Fi</span>
                </a>
              </li>
              <li>
                <Tooltip id="medium" />
                <a
                  href="https://medium.com/@kalmixdev"
                  rel="noreferrer"
                  target="_blank"
                  data-tooltip-id="medium"
                  data-tooltip-content="Medium DevBlog"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  <span className="sr-only">Medium</span>
                  <FaMedium size={24} />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
