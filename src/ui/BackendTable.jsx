import { motion } from "framer-motion";

import { DiMongodb, DiNodejs } from "react-icons/di";
import { IoServerSharp } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { SiPostman } from "react-icons/si";

function BackendTable() {
  return (
    <div className="space-y-16">
      <h4 className="flex items-center justify-center text-3xl text-center sm:text-4xl gap-x-2">
        <IoServerSharp />
        My Backend Stack
      </h4>
      <motion.div className="grid grid-cols-2 gap-8 md:grid-cols-3 ">
        {skillData.map((data, i) => {
          return (
            <motion.div
              className="flex flex-col items-center justify-center w-32 h-32 md:h-36 md:w-36  lg:w-48 lg:h-48  xl:w-36 xl:h-36 xxl:w-48 xxl:h-48 space-y-2 bg-[#ddd] rounded-full"
              key={i}
            >
              <div className="icon">
                <data.icon color={data.color} />
              </div>
              <div className="font-medium text-center break-words text-md xxl:text-lg">
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
