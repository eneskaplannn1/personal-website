import { useEffect, useState } from "react";
import { styled } from "styled-components";
import AnimatedLetters from "../ui/AnimatedLetters";

function Home() {
  const [className, setClassName] = useState("text-animate");
  const myName = ["H", "i", ",", "I", "'", "m", " ", "E", "n", "e", "s"];
  const jobArray = [
    "w",
    "e",
    "b",
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
    ".",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledHomePage id="home">
      <div className="left">
        <h1>
          <AnimatedLetters strArray={myName} idx={1} letterClass={className} />
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
        <img src="main.jpg" />
      </div>
    </StyledHomePage>
  );
}

export default Home;

const StyledHomePage = styled.div`
  width: 100vw;
  height: 80vh;

  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 4rem 0rem;
  justify-content: center;
  gap: 2rem;

  .left {
    margin-left: 4rem;
    h1 {
      color: #000;
      font-size: 56px;
      line-height: 53px;
      margin: 0;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      position: relative;
      padding: 1rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;

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
      margin: 3.5rem 0;
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

    position: relative;

    &:before {
      content: "<body>";
      font-family: "La Belle Aurore", cursive;
      color: #e55305;
      font-size: 30px;
      position: absolute;
      left: -40px;
      margin-top: -100px;
      opacity: 0.8;
    }
    &:after {
      content: "</body>";
      font-family: "La Belle Aurore", cursive;
      color: #e55305;
      font-size: 30px;
      margin-right: 10px;
      bottom: 35px;
      left: -40px;
      position: absolute;
      opacity: 0.8;
    }
  }

  .image {
    img {
      width: 350px;
      border-radius: 50%;
      height: auto;
    }
  }
`;
