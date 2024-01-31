import { BsBraces } from "react-icons/bs";
import { FaHtml5, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";

function FrontEndTable() {
  return (
    <div className="space-y-16">
      <h4 className="flex items-center justify-center text-3xl text-center sm:text-4xl gap-x-2">
        <BsBraces />
        My FrontEnd Stack
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
              <div className="text-base font-medium text-center break-words xxl:text-lg">
                {data.description}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

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
    icon: IoLogoJavascript,
    color: "f0db4f",
    description: "Javascript",
  },
  {
    icon: SiTypescript,
    color: "0050e8",
    description: "TypeScript",
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
  {
    icon: SiRedux,
    color: "purple",
    description: "Redux",
  },
];

export default FrontEndTable;
