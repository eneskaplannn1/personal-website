import { styled } from "styled-components";
import FrontEndTable from "../ui/FrontEndTable";
import BackendTable from "../ui/BackendTable";

function Skills() {
  return (
    <StyledSkills id="skills">
      <Header>
        <h3>Skills</h3>
        <h4>My Favorite Skills</h4>
      </Header>

      <Main>
        <FrontEndTable />
        <BackendTable />
      </Main>
    </StyledSkills>
  );
}

export default Skills;

const StyledSkills = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
`;

const Header = styled.div`
  padding: 2rem 0;
  margin-bottom: 2rem;
  width: 100%;

  text-align: center;

  h3 {
    font-size: 2rem;
  }
  h4 {
    font-weight: 400;
    color: #777;
  }
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 0 8rem;
`;
