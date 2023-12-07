import { motion } from "framer-motion";

import { DiMongodb, DiNodejs } from "react-icons/di";
import { IoServerSharp } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { SiPostman } from "react-icons/si";

function BackendTable() {
  return (
    <div className="space-y-16">
      <h4 className="flex items-center justify-center text-4xl text-center gap-x-2">
        <IoServerSharp />
        My Backend Stack
      </h4>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="grid grid-cols-3 gap-8"
      >
        {skillData.map((data, i) => {
          return (
            <motion.div
              className="flex flex-col items-center justify-center w-48 h-48 space-y-2 bg-[#ddd] rounded-full"
              key={i}
            >
              <div className="icon">
                <data.icon color={data.color} />
              </div>
              <div className="text-lg font-medium break-words">
                {data.description}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default BackendTable;

const animationVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: { opacity: 1, y: 0 },
};

const skillData = [
  {
    icon: DiNodejs,
    color: "5AAD45",
    description: "NodeJS",
  },
  {
    icon: DiMongodb,
    color: "6BBF47",
    description: "MongoDB",
  },
  {
    icon: SiExpress,
    color: "black",
    description: "Express js",
  },
  {
    icon: LiaDocker,
    color: "#3440a8",
    description: "Docker",
  },
  {
    icon: SiPostman,
    color: "#f54900",
    description: "Postman",
  },
];
