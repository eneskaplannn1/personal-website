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

function Services() {
  return (
    <StyledServices id="services">
      <Header>
        <h2>My Services</h2>
        <h4>What i offer</h4>
      </Header>
      <Main>
        <Swiper
          modules={[Pagination]}
          spaceBetween={200}
          slidesPerView={3}
          grabCursor={true}
          className="container"
        >
          <SwiperSlide>
            <div className="services__content">
              <div className="services__head">
                <FaReact />
                <h4> Application Development with React</h4>
              </div>
              <div className="services__description">
                I have the ability to use React to create modern and
                user-friendly interfaces.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__content">
              <div className="services__head">
                <RxComponent1 />
                <h4> Component Based Development</h4>
              </div>
              <div className="services__description">
                I can create modular and reusable React components when
                developing applications.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__content">
              <div className="services__head">
                <DiResponsive />
                <h4> Responsive Design</h4>
              </div>
              <div className="services__description">
                I can create responsive designs suitable for mobile and desktop
                devices.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__content">
              <div className="services__head">
                <IoCodeSlashOutline />
                <h4> Web-site design</h4>
              </div>
              <div className="services__description"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__content">
              <div className="services__head">
                <GiWireframeGlobe />
                <h4> Designing RESTful API's</h4>
              </div>
              <div className="services__description">
                I am experienced in the development of RESTful APIs.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__content">
              <div className="services__head">
                <GoDatabase />
                <h4>Database Management</h4>
              </div>
              <div className="services__description">
                I have the ability to work with databases like MongoDB.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__content">
              <div className="services__head">
                <HiOutlineServerStack />
                <h4>Design server-side Applications</h4>
              </div>
              <div className="services__description">
                I can develop server-side applications using Node.js.
              </div>
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

const Header = styled.div`
  text-align: center;
  width: 100%;

  padding: 2rem 0;

  h2 {
    font-size: 2rem;
  }
  h4 {
    font-weight: 400;
    color: #777;
  }
`;

const Main = styled.div`
  .projects__content {
    display: grid;
    justify-content: center;
  }

  .services__content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    background-color: #e6e6e6;
    width: 400px;
    height: 400px;

    border-radius: 40%;
    padding: 2rem;
  }

  .services__head {
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

  .services__description {
    text-align: center;
    line-height: 36px;
  }
`;

export default Services;
