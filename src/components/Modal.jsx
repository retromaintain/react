import * as React from "react"
import { Tooltip, Typography } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaWindowClose, FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function Kicsindex() {
    const [isPromptMissingDialogOpen, setIsPromptMissingDialogOpen] =
    useState(false);

return (
  <>
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
                    <div className="flex items-center justify-center m-3">
                    </div>
                    React out to me.
                  </Dialog.Title>
                  <hr className="border-gray-600 mt-5 opacity-25" />
                  <div className="mt-4 text-font">
                    <IoIosMail className="text-4xl text-center mx-auto primary-color" />
                    <p className="text-center text-gray-200">
                      kalmixdev@gmail.com
                    </p>
                    <FaDiscord className="text-4xl text-center mx-auto primary-color" />
                    <p className="text-center text-gray-200">
                      @jas1el
                    </p>
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
  </>
);
}