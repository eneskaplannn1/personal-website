import { styled } from "styled-components";
import FrontEndTable from "../ui/FrontEndTable";
import BackendTable from "../ui/BackendTable";
import Heading from "../ui/Heading";

function Skills() {
  return (
    <StyledSkills id="skills">
      <Heading title="Skills" subTitle="My Favorite Skills" />
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
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 0 8rem;
`;
