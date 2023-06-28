import React from "react";
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
import {
  ChevronDownIcon,
  MenuAlt3Icon,
  XIcon
} from "@heroicons/react/outline";
import { useState } from "react";
 
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
    description: "Fullstack MERN app for uploading and sharing pics. Pinterest-like.",
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, path }, key) => (
      <a href={path} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
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
            <Typography variant="small" className="font-normal text-font !text-gray-500">
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
        <MenuHandler >
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

  return (
    
    <>

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
        
        <a href="/about">
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
        <a href="https://discord.gg/FJbQK6U8k7" target="_blank">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-font-white">
          <RxDiscordLogo className="h-[18px] w-[18px]" />
          Discord
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
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 top-0 z-10 sticky bg-dark-blur backdrop-filter backdrop-blur-[20px]">
      <div className="flex items-center justify-between text-white">
        <a href="/">
        <Logo />
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
            <a href="https://medium.com/@kalmixdev" target="_blank">
              <AiFillMediumSquare className="hover:opacity-50 transition-all duration-300" size={25}/>
            </a>
            <a href="https://github.com/kalmix" target="_blank">
            <FaGithub className="hover:opacity-50 transition-all duration-300"  size={25}/>
            </a>
            <a href="https://twitter.com/kalmixdev" target="_blank">
            <FaTwitter className="hover:text-blue-500 transition-all duration-300"  size={25}/>
            </a>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XIcon className="h-6 w-6 transition-all duration-300" strokeWidth={2} color="white"/>
          ) : (
            <MenuAlt3Icon className="h-6 w-6 transition-all duration-300" strokeWidth={2} color="white"/>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            GitHub
          </Button>
          <Button className="" size="sm" fullWidth>
            Medium DevBlog
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}