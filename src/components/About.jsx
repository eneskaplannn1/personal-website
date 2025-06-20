import { IoLogoGithub } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { easeIn, motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 min-h-fit">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, ease: easeIn }}
        className="max-w-xs mx-auto space-y-16 text-xl text-black opacity-75 xl:max-w-4xl xl:text-2xl xxl:max-w-[1400px] xxl:text-2xl lg:max-w-2xl md:max-w-lg gap-y-12"
      >
        <h1 className="text-6xl text-center text-black opacity-70">About Me</h1>
        <p>
          Hello, my name is Enes, and I am currently studying Computer
          Engineering at college.
        </p>
        <p>
          I am a Full Stack and Mobile Developer with experience in building
          various projects. I specialize in creating responsive web applications
          and mobile apps, focusing particularly on UI/UX. I am dedicated to
          delivering high-quality, scalable solutions that meet client needs.
        </p>
        <p>
          My technology stack includes TypeScript, NextJS, React, React Native,
          Expo, Node.js, ASP.NET, MongoDB, MSSQL, and Docker. I have experience
          in both frontend and backend development, as well as mobile app
          development, web scraping, and database management, allowing me to
          create comprehensive solutions across different platforms.
        </p>
        <h4 className="text-4xl">My links</h4>
        <div className="flex space-x-4 icon">
          <a target="blank" href="https://github.com/eneskaplannn1">
            <IoLogoGithub className="opacity-75 cursor-pointer hover:opacity-100" />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/enes-kaplan-9b6a10242/"
          >
            <BsLinkedin className="opacity-75 cursor-pointer hover:opacity-100" />
          </a>
          <a target="blank" href="https://www.instagram.com/eneskaplannn1">
            <FaInstagram className="opacity-75 cursor-pointer hover:opacity-100" />
          </a>
          <a target="blank" href="https://twitter.com/eneskaplannn1">
            <FaXTwitter className="opacity-75 cursor-pointer hover:opacity-100" />
          </a>
        </div>

        <a
          target="blank"
          className="block px-8 py-4 text-xl font-bold text-white transition duration-300 border border-transparent outline-none w-fit bg-primary rounded-xl hover:bg-white hover:text-primary hover:border-primary hover:shadow-2xl"
          href="https://drive.google.com/file/d/1l7CyRT6shctSjCZOOI7n-mQQ_EesZUzI/view?usp=sharing"
        >
          Resume
        </a>
      </motion.div>
    </section>
  );
}

export default About;
