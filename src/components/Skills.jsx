import { styled } from "styled-components";
import FrontEndTable from "../ui/FrontEndTable";
import BackendTable from "../ui/BackendTable";
import Heading from "../ui/Heading";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

motion;

function Skills() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <StyledSkills id="skills">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.8 }}
        ref={ref}
      >
        <div className="header">
          <Heading title="Skills" subTitle="My Favorite Skills" />
        </div>
        <div className="main">
          <FrontEndTable />
          <BackendTable />
        </div>
      </motion.div>
    </StyledSkills>
  );
}

export default Skills;

const StyledSkills = styled.div`
  width: 100vw;
  height: 100vh;

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 0 8rem;
  }
`;
