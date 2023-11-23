// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { styled } from "styled-components";

function Works() {
  return (
    <StyledWorks id="works">
      <Header>
        <h2>My Projects</h2>
        <h4>Most recent work</h4>
      </Header>
      <Main>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          grabCursor={true}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="projects__content">
              <img className="projects__img" src="eduprotrack1.png" />
              <div>
                <span className="projects__subtitle">web - EduProTrack</span>
                <h1 className="projects__title">School Management System</h1>
                <a
                  href="https://tradehub-e-commerce.netlify.app/"
                  className="projects__button"
                >
                  View Demo <IoIosArrowRoundForward />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projects__content">
              <img className="projects__img" src="tradehub3.png" />
              <div>
                <span className="projects__subtitle">web - TradeHub</span>
                <h1 className="projects__title">E-Commerce Application</h1>
                <a
                  href="https://eduprotrack.netlify.app/"
                  className="projects__button"
                >
                  View Demo <IoIosArrowRoundForward />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Main>
    </StyledWorks>
  );
}

const StyledWorks = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  padding: 2rem 0;
  margin-bottom: 2rem;
  width: 100%;

  text-align: center;

  h2 {
    font-size: 2rem;
  }
  h4 {
    font-weight: 400;
    color: #777;
  }
`;

const Main = styled.div`
  overflow: initial;

  .projects__content {
    display: grid;
    justify-content: center;
  }

  .projects__img {
    width: 400px;
    height: auto;
    border-radius: 0.75rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  .projects__subtitle {
    font-size: 24px;
    font-weight: 300;

    color: #777;
  }
  .projects__title {
    font-size: 1.6rem;
    margin: 0.5rem 0;
  }
  .projects__button {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    transition: 0.4s ease;

    display: flex;
    align-items: center;

    svg {
      width: 40px;
      height: 40px;
    }

    &:hover {
      color: #df6a2a;
      svg {
        transform: translateX(0.25rem);
      }
    }
  }
`;

export default Works;
