// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <section id="services">
      <div className="py-12 mx-auto overflow-hidden max-w-[1400px] ">
        <h1 className="mb-24 header">My Services</h1>
        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={200 / 3}
          grabCursor={true}
        >
          {swiperContentList.map((el, i) => {
            return (
              <SwiperSlide
                className="relative flex items-center justify-center overflow-visible icon-animation h-[422.2px]"
                key={i}
              >
                <div className="bg-[#e6e6e6] rounded-full w-[400px] h-[400px] text-center flex flex-col p-16 py-12 gap-y-6">
                  <div className="flex flex-col items-center justify-center text-2xl icon">
                    <el.icon />
                    <h4> {el.title}</h4>
                  </div>
                  <div className="text-xl opacity-75">{el.description}</div>
                </div>
                <div className="absolute inset-0 transition duration-500 hover:rounded-full hover:border-black hover:border-2 "></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
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
    description: " Boş bıraktım, çünkü orada bir açıklama yok.", // Boş bıraktım, çünkü orada bir açıklama yok.
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

// const Main = styled.div`
//   transition: all 10s ease;
//   .swiper-slide {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 430px;
//   }

//   .projects-content {
//     display: grid;
//     justify-content: center;
//   }

//   .services-content {
//     position: relative;
//     align-self: center;
//     justify-self: center;
//     background-color: #e6e6e6;

//     display: flex;
//     flex-direction: column;

//     gap: 0.3rem;
//     width: 400px;
//     height: 400px;

//     border-radius: 7.75rem;
//     padding: 2rem;

//     &:hover {
//       svg {
//         transition-duration: 1s;
//         transform: rotateY(360deg);
//       }
//     }
//   }

//   .services-border {
//     position: absolute;
//     width: 420px;
//     height: 420px;

//     inset: 0;
//     left: -10px;
//     top: -10px;

//     border: 3px solid black;
//     border-radius: 200px;

//     opacity: 0;
//     transition: opacity 0.4s ease;

//     &:hover {
//       opacity: 1;
//     }
//   }

//   .services-head {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     text-align: center;

//     gap: 0.5rem;

//     svg {
//       width: 80px;
//       height: 80px;
//     }
//   }

//   .services-description {
//     text-align: center;
//     line-height: 36px;
//   }
// `;

export default Services2;
