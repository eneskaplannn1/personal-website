// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { styled } from "styled-components";

import { IoCodeSlashOutline } from "react-icons/io5";
import { GiWireframeGlobe } from "react-icons/gi";
import { GoDatabase } from "react-icons/go";
import { HiOutlineServerStack } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { RxComponent1 } from "react-icons/rx";
import { DiResponsive } from "react-icons/di";
import Heading from "../ui/Heading";

function Services() {
  return (
    <StyledServices id="services">
      <Heading title="My Services" subTitle="What i offer" />
      <Main>
        <Swiper modules={[Pagination]} slidesPerView={3} grabCursor={true}>
          <SwiperSlide>
            <div className="services-content">
              <div className="services-head">
                <FaReact />
                <h4> Application Development with React</h4>
              </div>
              <div className="services-description">
                I have the ability to use React to create modern and
                user-friendly interfaces.
              </div>
              <div className="services-border"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-content">
              <div className="services-head">
                <RxComponent1 />
                <h4> Component Based Development</h4>
              </div>
              <div className="services-description">
                I can create modular and reusable React components when
                developing applications.
              </div>
              <div className="services-border"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-content">
              <div className="services-head">
                <DiResponsive />
                <h4> Responsive Design</h4>
              </div>
              <div className="services-description">
                I can create responsive designs suitable for mobile and desktop
                devices.
              </div>
              <div className="services-border"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-content">
              <div className="services-head">
                <IoCodeSlashOutline />
                <h4> Web-site design</h4>
              </div>
              <div className="services-description"></div>
              <div className="services-border"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-content">
              <div className="services-head">
                <GiWireframeGlobe />
                <h4> Designing RESTful API's</h4>
              </div>
              <div className="services-description">
                I am experienced in the development of RESTful APIs.
              </div>
              <div className="services-border"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-content">
              <div className="services-head">
                <GoDatabase />
                <h4>Database Management</h4>
              </div>
              <div className="services-description">
                I have the ability to work with databases like MongoDB.
              </div>
              <div className="services-border"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-content">
              <div className="services-head">
                <HiOutlineServerStack />
                <h4>Design server-side Applications</h4>
              </div>
              <div className="services-description">
                I can develop server-side applications using Node.js.
              </div>
              <div className="services-border"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Main>
    </StyledServices>
  );
}

const StyledServices = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 0 5rem;
`;

const Main = styled.div`
  transition: all 10s ease;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 430px;
  }

  .projects-content {
    display: grid;
    justify-content: center;
  }

  .services-content {
    position: relative;
    align-self: center;
    justify-self: center;
    background-color: #e6e6e6;

    display: flex;
    flex-direction: column;

    gap: 0.3rem;
    width: 400px;
    height: 400px;

    border-radius: 7.75rem;
    padding: 2rem;

    &:hover {
      svg {
        transition-duration: 1s;
        transform: rotateY(360deg);
      }
    }
  }

  .services-border {
    position: absolute;
    width: 420px;
    height: 420px;

    inset: 0;
    left: -10px;
    top: -10px;

    border: 3px solid black;
    border-radius: 200px;

    opacity: 0;
    transition: opacity 0.4s ease;

    &:hover {
      opacity: 1;
    }
  }

  .services-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    gap: 0.5rem;

    svg {
      width: 80px;
      height: 80px;
    }
  }

  .services-description {
    text-align: center;
    line-height: 36px;
  }
`;

export default Services;
