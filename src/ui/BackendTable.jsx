import SkillContainer from "./SkillContainer";
import { styled } from "styled-components";

import { DiMongodb, DiNodejs } from "react-icons/di";
import { IoServerSharp } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";

function BackendTable() {
  return (
    <Side>
      <h4 className="head">
        <IoServerSharp />
        My Backend Stack
      </h4>
      <SkillContainer>
        <div className="box">
          <div className="icon">
            <DiNodejs color="5AAD45" />
          </div>
          <div className="description">NodeJS</div>
        </div>
        <div className="box">
          <div className="icon">
            <DiMongodb color="6BBF47" />
          </div>
          <div className="description">MongoDB</div>
        </div>
        <div className="box">
          <div className="icon">
            <SiExpress color="Black" />
          </div>
          <div className="description">Express js</div>
        </div>
        <div className="box">
          <div className="icon">
            <LiaDocker color="#3440a8" />
          </div>
          <div className="description">Docker</div>
        </div>
      </SkillContainer>
    </Side>
  );
}

export default BackendTable;
const Side = styled.div`
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    font-size: 1.3rem;

    margin-bottom: 2rem;
  }
`;
