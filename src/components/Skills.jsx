import FrontEndTable from "../ui/FrontEndTable";
import BackendTable from "../ui/BackendTable";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="py-24 section-height" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mx-auto space-y-12 max-w-xxl"
      >
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
