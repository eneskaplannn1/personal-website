import { BsBraces } from "react-icons/bs";
import { FaHtml5, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

function FrontEndTable() {
  return (
    <div className="space-y-16">
      <h4 className="flex items-center justify-center text-4xl text-center gap-x-2">
        <BsBraces />
        My FrontEnd Stack
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

const animationVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: { opacity: 1, y: 0 },
};

const skillData = [
  {
    icon: FaHtml5,
    color: "E44D26",
    description: "HTML5",
  },
  {
    icon: DiCss3,
    color: "#3a2f9d",
    description: "CSS",
  },
  {
    icon: FaReact,
    color: "53C1DE",
    description: "ReactJS",
  },
  {
    icon: SiStyledcomponents,
    color: "#ff9e93",
    description: "Styled Components",
  },
  {
    icon: SiTailwindcss,
    color: "44a8b3",
    description: "Tailwind",
  },
  {
    icon: TbBrandNextjs,
    color: "black",
    description: "NextJS",
  },
];

export default FrontEndTable;
