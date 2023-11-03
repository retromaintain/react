import React from "react";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FaWindowClose } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { Fragment } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import { ChevronDownIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { AiFillMediumSquare, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { PiPaperclip } from "react-icons/pi";
import { RxDiscordLogo } from "react-icons/rx";
import { GrProjects } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { PiRobotThin } from "react-icons/pi";
import Logo from "./Logo";
import { FaReact } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineCamera } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { useRef, useEffect } from "react";
// import Darkmode from "darkmode-js";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};





const navListMenuItems = [
  {
    color: "blue",
    icon: AiOutlineCamera,
    title: "Kics",
    description:
      "Fullstack MERN app for uploading and sharing pics. Pinterest-like.",
    path: "/kics",
  },
  {
    color: "orange",
    icon: IoBookOutline,
    title: "GPT-Essay",
    description: "PyQt5 GUI that uses the OpenAI API to generate essays.",
    path: "/gpt-essay",
  },
  {
    color: "blue",
    icon: FaReact,
    path: "/react-gpt",
    title: (
      <div className="flex items-center gap-1">
        React-GPT{" "}
        <Chip
          size="sm"
          color="blue"
          variant="ghost"
          value="New!"
          className="capitalize"
        />
      </div>
    ),
    description: "React-GPT is an implementation of OpenAI's API.",
  },
  {
    color: "green",
    icon: PiRobotThin,
    title: "CodeCord",
    path: "/codecord",
    description: "Discord Bot that lookup for code problems. Made with Python.",
  },
];

function NavListMenu() {
  const [isPromptMissingDialogOpen, setIsPromptMissingDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);


  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, path }, key) => (
      <a href={path} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-black/60">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              className="flex items-center text-sm text-font-white"
            >
              {title}
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-font !text-gray-200"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="text-font">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 text-font-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <GrProjects className="h-[18px] w-[18px] iconer" />
              Projects
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block bg-dark-blur backdrop-filter backdrop-blur-[20px]">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const [isPromptMissingDialogOpen, setIsPromptMissingDialogOpen] = useState(false);
  
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
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <a href="/portfolio">
            <ListItem className="flex items-center gap-2 py-2 pr-4 text-font-white ">
              <PiPaperclip className="h-[18px] w-[18px]" />
              Portfolio
            </ListItem>
          </a>
        </Typography>
        <NavListMenu />
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <a href="/about" className="hover-anchor">
            <ListItem className="flex items-center gap-2 py-2 pr-4 text-font-white">
              <BiUser className="h-[18px] w-[18px]" />
              About Me
            </ListItem>
          </a>
        </Typography>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <a 
            onClick={() => setIsPromptMissingDialogOpen(true)}
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4 text-font-white">
              <BiMailSend className="h-[18px] w-[18px]" />
              Contact
            </ListItem>
          </a>
        </Typography>
      </List>
    </>
  );
}

export default function Example() {
  
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>

      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 top-0 z-10 sticky bg-dark-blur backdrop-filter backdrop-blur-[20px]">
        <div className="flex items-center justify-between text-white">
          <a href="/">
            <Logo />
          </a>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex items-center">
            <a href="https://medium.com/@kalmixdev" target="_blank">
              <AiFillMediumSquare
                className="hover:opacity-50 transition-all duration-300"
                size={20}
              />
            </a>
            <a href="https://github.com/kalmix" target="_blank">
              <FaGithub
                className="hover:opacity-50 transition-all duration-300"
                size={18}
              />
            </a>
            <a href="https://twitter.com/kalmixdev" target="_blank">
              <FaTwitter
                className="hover:text-blue-500 transition-all duration-300"
                size={18}
              />
            </a>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XIcon
                className="h-6 w-6 transition-all duration-300"
                strokeWidth={2}
                color="white"
              />
            ) : (
              <MenuAlt3Icon
                className="h-6 w-6 transition-all duration-300"
                strokeWidth={2}
                color="white"
              />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <a href="https://github.com/kalmix">
              <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                GitHub
              </Button>
            </a>
            <a href="https://medium.com/@kalmixdev">
              <Button className="" size="sm" fullWidth>
                Medium DevBlog
              </Button>
            </a>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
