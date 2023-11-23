import { styled } from "styled-components";
import Heading from "../ui/Heading";
import { FiMessageCircle } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";

function ContactMe() {
  return (
    <StyledContactMe id="contactMe">
      <Heading title="Contact me" subTitle="Get in touch" />
      <div className="contact-container container">
        <div className="contact-content">
          <div className="contact-title">
            <FiMessageCircle /> Talk to me
          </div>
          <div className="contact-info">
            <div className="contact-data">
              <div className="contact-data-title">Email</div>
              <div className="contact-data-info">eneskaplannn1@gmail.com</div>
            </div>
            <div className="contact-data">
              <div className="contact-data-title">Phone Number</div>
              <div className="contact-data-info">+90 (551) 947 8837</div>
            </div>
          </div>
        </div>
        <div className="contact-content">
          <div className="contact-title">
            <RiSendPlaneLine /> Send me your project
          </div>
          <form action="" className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag" htmlFor="name">
                Name
              </label>
              <input
                className="contact-form-input"
                type="text"
                id="name"
                placeholder="Write your name"
              />
            </div>
            <div className="contact-form-div ">
              <label className="contact-form-tag" htmlFor="email">
                Email
              </label>
              <input
                className="contact-form-input"
                type="text"
                id="email"
                placeholder="Write your email"
              />
            </div>
            <div className="contact-form-div ">
              <label className="contact-form-tag" htmlFor="email">
                Project
              </label>
              <textarea
                style={{ height: "10rem", resize: "none", width: "100%" }}
                className="contact-form-input "
                placeholder="Write your project"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </StyledContactMe>
  );
}

const StyledContactMe = styled.div`
  width: 1200px;
  height: 100vh;

  margin: 0 auto;

  .contact-container {
    row-gap: 3.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .contact-title {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.4rem;
    margin-bottom: 2.5rem;
  }

  .contact-info,
  .contact-data,
  .contact-form {
    display: grid;
  }

  .contact-info {
    row-gap: 2rem;

    .contact-data {
      row-gap: 0.75rem;

      .contact-data-title {
      }
      .contact-data-info {
      }
    }
  }
  .contact-form {
    position: relative;
    row-gap: 2rem;

    .contact-form-div {
      position: relative;
      height: 4rem;

      .contact-form-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid black;
        border-radius: 2rem;
        padding: 1.5rem;
        background-color: none;
        outline: none;
        z-index: 1;
      }
      .contact-form-tag {
        position: absolute;
        top: -0.75rem;
        left: 1.25rem;
        z-index: 10;
        background-color: white;
        font-weight: 500;
        padding: 0.3rem;
      }
    }
  }

  .contact-form-area {
  }
`;

export default ContactMe;
