import { styled } from "styled-components";

function About() {
  return (
    <StyledAbout id="about">
      <div className="about-content">
        <h2>About</h2>
        <h1>About Me</h1>
        <p>
          My name is Enes , and I am currently studying Computer Engineering at
          Yeditepe University. I have a keen interest in both frontend and
          backend development.
        </p>
        <p>
          I enjoy keeping myself updated, learning new technologies, and
          embracing new challenges. In addition to my academic pursuits, I am a
          Fullstack Developer who loves to learn and contribute to teamwork.
        </p>
        <p>
          I am eager to gain knowledge and skills while paying attention to
          details.
        </p>
      </div>
      <div>
        <img src="coding2.jpg" />
      </div>
    </StyledAbout>
  );
}

export default About;

const StyledAbout = styled.div`
  background-color: #f7f7f7;
  max-width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  .about-content {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    padding: 1rem 2rem;
    /* background-color: ; */
    font-family: "Quicksand", sans-serif;

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 30px;
      color: #1c1e53;
      line-height: 36px;
      font-weight: 400;
    }
  }
  img {
    align-self: flex-start;
    max-width: 100%;

    font-style: italic;
    background-repeat: no-repeat;
    background-size: cover;
    shape-margin: 0.75rem;

    border-radius: var(--border-radius-sm);
    -webkit-object-fit: cover;
    object-fit: cover;
  }
`;

const Container = styled.div``;
