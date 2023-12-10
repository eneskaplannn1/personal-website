// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { easeInOut, motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { IoCodeSlashOutline } from "react-icons/io5";
import { GiWireframeGlobe } from "react-icons/gi";
import { GoDatabase } from "react-icons/go";
import { HiOutlineServerStack } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { RxComponent1 } from "react-icons/rx";
import { DiResponsive } from "react-icons/di";

function Services2() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: easeInOut }}
    >
      <div className="py-12 mx-auto overflow-hidden max-w-sx sm:max-w-lg lg:max-w-[1200px] xl:max-w-[1400px] ">
        <h1 className="mb-24 header">My Services</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 2,
            },
            1600: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          grabCursor={true}
        >
          {swiperContentList.map((el, i) => {
            return (
              <SwiperSlide
                className="relative flex items-center justify-center overflow-visible  icon-animation h-[650px] group"
                key={i}
              >
                <div className="bg-[#e6e6e6] rounded-full w-[250px] h-[250px]   sm:w-[400px] sm:h-[400px] text-center flex flex-col justify-center p-16 py-12 gap-y-2 sm:gap-y-5 relative">
                  <div className="flex flex-col items-center justify-center text-md sm:text-2xl icon">
                    <el.icon />
                    <h4> {el.title}</h4>
                  </div>
                  <div className="text-xs opacity-75 sm:text-xl">
                    {el.description}
                  </div>
                  <div className=" xl:absolute xl:z-10 xl:inset-0 xl:transition xl:duration-500 xl:w-[422px] xl:left-[-11px] xl:top-[-11px] xl:h-[422px] xl:group-hover:rounded-full xl:group-hover:border-black xl:group-hover:border-2 "></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
}

const swiperContentList = [
  {
    icon: FaReact,
    title: "Application Development with React",
    description:
      "I have the ability to use React to create modern and user-friendly interfaces.",
  },
  {
    icon: RxComponent1,
    title: "Component Based Development",
    description:
      "I can create modular and reusable React components when developing applications.",
  },
  {
    icon: DiResponsive,
    title: "Responsive Design",
    description:
      "I can create responsive designs suitable for mobile and desktop devices.",
  },
  {
    icon: IoCodeSlashOutline,
    title: "Web-site design",
    description:
      " I specialize in web design, showcasing my skills in creating user-friendly, aesthetic, and effective websites. ",
  },
  {
    icon: GiWireframeGlobe,
    title: "Designing RESTful API's",
    description: "I am experienced in the development of RESTful APIs.",
  },
  {
    icon: GoDatabase,
    title: "Database Management",
    description: "I have the ability to work with databases like MongoDB.",
  },
  {
    icon: HiOutlineServerStack,
    title: "Design server-side Applications",
    description: "I can develop server-side applications using Node.js.",
  },
];

export default Services2;
