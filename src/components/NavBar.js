import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      {<span
        className={`
          h-[1px] inline-block  bg-white
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          `}
      >
        &nbsp;
      </span>}
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          bg-white`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
  const handleClick = () => {
    toggle();
    router.push(href);
  };

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    text-purple-500 relative z-10 lg:px-16 md:px-12 sm:px-8
    "
    >
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-purple-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-purple-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-purple-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/ChrisMooneyDev"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Bitcross"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/chris-mooney-dev/"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 1, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-purple-200/75 rounded-lg backdrop-blur-md py-32
      "
        >
          <nav className="flex items-center flex-col justify-center text-purple-900 space-y-4">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="pb-8"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center space-x-8 justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/ChrisMooneyDev"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Bitcross"
              target={"_blank"}
              className="w-12 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chris-mooney-dev/"
              target={"_blank"}
              className="w-12 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
