import { styled } from "styled-components";
import FrontEndTable from "../ui/FrontEndTable";
import BackendTable from "../ui/BackendTable";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Skills() {
  return (
    <section className="py-24 section-height" id="skills">
      <motion.div variants={container} className="mx-auto space-y-12 max-w-xxl">
        <h1 className="header">My Tech Stack</h1>
        <div className="grid grid-cols-2 gap-x-24">
          <FrontEndTable />
          <BackendTable />
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
