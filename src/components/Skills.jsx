import FrontEndTable from "../ui/FrontEndTable";
import BackendTable from "../ui/BackendTable";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="py-24 section-height"
      id="skills"
    >
      <div className="max-w-xs mx-auto space-y-12 sm:max-w-md lg:max-w-3xl xl:max-w-6xl xxl:max-w-xxl">
        <h1 className="!text-5xl header">My Tech Stack</h1>
        <div className="grid gap-24 xl:grid-cols-2 xxl:gap-x-8 ">
          <FrontEndTable />
          <BackendTable />
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
