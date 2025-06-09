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
      viewport={{ once: true, amount: 0.4 }}
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
    title: "Full Stack Development",
    description:
      "I develop modern web applications using React, Next.js, and TypeScript for frontend, and Node.js/ASP.NET for backend.",
  },
  {
    icon: RxComponent1,
    title: "Mobile App Development",
    description:
      "I create cross-platform mobile applications using React Native and Expo, ensuring native performance and user experience.",
  },
  {
    icon: DiResponsive,
    title: "Responsive Design",
    description:
      "I implement responsive designs that work seamlessly across all devices, from mobile to desktop, using modern CSS frameworks.",
  },
  {
    icon: IoCodeSlashOutline,
    title: "Web Development",
    description:
      "I build modern, performant, and SEO-friendly websites using Next.js, TypeScript, and best practices in web development.",
  },
  {
    icon: GiWireframeGlobe,
    title: "API Development",
    description:
      "I design and implement RESTful APIs using Node.js, Express, and ASP.NET, with proper documentation and security measures.",
  },
  {
    icon: GoDatabase,
    title: "Database Solutions",
    description:
      "I work with both SQL (MSSQL) and NoSQL (MongoDB) databases, implementing efficient data models and queries.",
  },
  {
    icon: HiOutlineServerStack,
    title: "Web Scraping & Automation",
    description:
      "I develop web scraping solutions and automation tools using Puppeteer and Cheerio for data extraction and processing.",
  },
];

export default Services2;
