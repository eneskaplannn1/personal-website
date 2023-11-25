import { useEffect, useState } from "react";
import { styled } from "styled-components";
import AnimatedLetters from "../ui/AnimatedLetters";

function Home() {
  const [className, setClassName] = useState("text-animate");
  const myName = ["H", "i", ",", "I", "'", "m", " ", "E", "n", "e", "s"];
  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledHomePage id="home">
      <div className="container">
        <div className="about-content">
          <h1>
            <AnimatedLetters
              strArray={myName}
              idx={1}
              letterClass={className}
            />
            <br />
            <AnimatedLetters
              strArray={jobArray}
              idx={11}
              letterClass={className}
            />
          </h1>
          <button>
            <a href="enesbaba">Download resume</a>
          </button>
        </div>
        <div className="image">
          <img src="me3.jpg" />
        </div>
      </div>
    </StyledHomePage>
  );
}

export default Home;

const StyledHomePage = styled.div`
  width: 100vw;
  height: calc(100vh - 5rem);

  padding: 5rem 3rem;

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    column-gap: 2rem;

    .about-content {
      margin-left: 4rem;
      position: relative;

      h1 {
        color: #000;
        font-size: 56px;
        line-height: 100px;
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        position: relative;
        padding: 1rem;

        margin-bottom: 3.5rem;

        &:before {
          content: "<h1>";
          font-family: "La Belle Aurore", cursive;
          color: #e55305;
          font-size: 30px;
          position: absolute;
          margin-top: -70px;
          left: -25px;
          opacity: 0.8;
        }

        &:after {
          content: "</h1>";
          font-family: "La Belle Aurore", cursive;
          color: #e55305;
          font-size: 30px;
          margin-right: 10px;
          bottom: -70px;
          left: -25px;
          position: absolute;
          opacity: 0.8;
        }
      }
      button {
        padding: 1rem;
        font-weight: 300;
        font-size: 1.3rem;

        border-radius: 12px;

        transition: background 0.4s, color 0.4s;

        background-color: white;
        color: #c95a1e;
        border: 1px solid #c95a1e;

        &:hover {
          background-color: #c95a1e;

          color: white;
        }
      }
      &:before {
        content: "<body>";
        font-family: "La Belle Aurore", cursive;
        color: #e55305;
        font-size: 30px;
        position: absolute;
        left: -50px;
        top: -100px;
        opacity: 0.8;
      }
      &:after {
        content: "</body>";
        font-family: "La Belle Aurore", cursive;
        color: #e55305;
        font-size: 30px;
        margin-right: 10px;
        left: -50px;
        bottom: -100px;
        position: absolute;
        opacity: 0.8;
      }
    }
  }

  .image {
    img {
      width: 400px;
      height: auto;
      border-radius: 50%;
      height: auto;
    }
  }
`;
