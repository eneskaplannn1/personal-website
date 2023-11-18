import { styled } from "styled-components";

function Works() {
  return (
    <StyledWorks id="works">
      <Header>
        <h2>My Projects</h2>
        <h4>Most recent work</h4>
      </Header>
      <Main>
        <div className="projects__content">
          <img className="projects__img" />
          <div>
            <span className="projects__subtitle"></span>
            <h1 className="projects__title"></h1>
            <a href="#" className="projects__button">
              View Demo
            </a>
          </div>
        </div>
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
    width: 250px;
    border-radius: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .projects__subtitle {
    font-size: 12px;
    color: black;
  }
  .projects__title {
    font-size: 1.6rem;
    margin-bottom: 1.25rem;
    margin: 0.5rem 1.25rem;
  }
  .projects__button {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
  }
`;

export default Works;
