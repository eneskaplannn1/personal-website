import { IoLogoGithub } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { useEffect, useState } from "react";
import AnimatedLetters from "../ui/AnimatedLetters";

import { easeIn, easeInOut, motion } from "framer-motion";
import { Animated } from "react-animated-css";

function Home() {
  const [className, setClassName] = useState("text-animate");
  const myName = ["H", "i", ",", "I", "'", "m", " ", "E", "n", "e", "s"];
  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: easeInOut }}
      className="overflow-x-hidden max-w-screen section-height"
      id="home"
    >
      <div className="flex max-w-sm sm:max-w-lg  px-2 mx-auto lg:pt-52 gap-y-16 md:max-w-3xl flex-col-reverse lg:max-w-[950px] lg:ml-24 xl:max-w-[1300px] lg:mx-auto py-20 lg:grid lg:grid-cols-[2fr,1fr] xxl:mx-auto xxl:max-w-[1500px]">
        <div className="relative flex  items-center justify-center flex-col py-14 space-y-8 md:after:text-5xl md:before:text-5xl before:font-laBerra after:font-laBerra before:content-['<body>'] before:text-primary before:text-4xl before:absolute  before:left-0 md:before:left-4 md:after:left-4  before:-top-4 before:opacity-75 after:content-['</body>'] after:text-primary after:text-4xl xl:after:text-6xl xl:before:text-6xl after:absolute  after:left-0 after:-bottom-4 after:opacity-75">
          <Animated>
            <h1 className="relative font-sans ml-16 sm:ml-0 font-medium px-4 sm:px-8 py-14 mb-4 text-black before:content-['<h1>'] before:text-primary before:font-laBerra after:font-laBerra before:text-4xl md:before:text-5xl md:after:text-5xl xl:py-20 xl:after:-left-16  xl:before:-left-16   before:absolute xl:after:text-6xl xl:before:text-6xl before:z-10 before:top-0 before:-left-3 before:opacity-80 after:content-['</h1>'] after:text-primary after:text-4xl after:absolute after:z-10 after:-bottom-4 after:-left-3 after:opacity-80">
              <AnimatedLetters
                strArray={myName}
                idx={1}
                letterClass={className}
              />
              <br />
              <AnimatedLetters
                strArray={jobArray}
                idx={11}
                letterClass={className}
              />
            </h1>
          </Animated>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: easeIn }}
          className="flex items-center justify-center"
        >
          <img
            src="me3.jpg"
            className="w-3/5 rounded-full md:w-1/2 lg:w-full"
          />
        </motion.div>
      </div>
    </motion.main>
  );
}

export default Home;
