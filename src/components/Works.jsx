// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Works() {
  return (
    <section className="py-12 section-height" id="works">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="header">My Projects</h1>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex relative flex-col shadow-2xl w-[480px] h-80  rounded-2xl">
            <img className="w-full h-full rounded-2xl" src="eduprotrack1.png" />
            <div className="absolute  inset-0 z-10 hover:block rounded-2xl space-y-6 to-[#001b5e] font-bold text-white hover:bg-gradient-to-r from-gray-200 group">
              <h3 className="text-2xl">School Management System</h3>
              <p className="text-xl text-primary ">ReactJS , NodeJS</p>
              <button className="bg-indigo-600 btn">More info</button>
            </div>
          </div>
          <div className="flex flex-col shadow-2xl w-[480px] h-80  rounded-2xl">
            <img className="w-full h-full rounded-2xl" src="tradehub3.png" />
          </div>
          <div className="flex flex-col shadow-2xl w-[480px] h-80  rounded-2xl">
            <img className="w-full h-full rounded-2xl" src="eduprotrack1.png" />
          </div>
          <div className="flex flex-col shadow-2xl w-[480px] h-80  rounded-2xl">
            <img className="w-full h-full rounded-2xl" src="tradehub3.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
