import { useEffect, useState } from "react";
import AnimatedLetters from "../ui/AnimatedLetters";

import { easeInOut, motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: easeInOut }}
      className="overflow-x-hidden max-w-screen section-height "
      id="home"
    >
      <div className="max-w-[1400px] mx-auto py-40 grid grid-cols-[2fr,1fr] gap-x-8">
        <div className="relative px-16 py-8 space-y-8 before:font-laBerra after:font-laBerra before:content-['<body>'] before:text-primary before:text-4xl before:absolute  before:-left-8 before:-top-8 before:opacity-75 after:content-['</body>'] after:text-primary after:text-4xl after:absolute  after:-left-8 after:-bottom-8 after:opacity-75">
          <h1 className="relative font-sans text-5xl font-medium py-16 mb-4 text-black before:content-['<h1>'] before:text-primary before:font-laBerra after:font-laBerra before:text-4xl before:absolute before:z-10 before:-top-1 before:-left-16 before:opacity-80 after:content-['</h1>'] after:text-primary after:text-4xl after:absolute after:z-10 after:-bottom-4 after:-left-16 after:opacity-80">
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
          <button className="text-xl transition duration-300 btn bg-primary hover:-translate-y-3 ">
            <a href="enesbaba">Download resume</a>
          </button>
        </div>
        <div>
          <img src="me3.jpg" className="rounded-full" />
        </div>
      </div>
    </motion.main>
  );
}

export default Home;
