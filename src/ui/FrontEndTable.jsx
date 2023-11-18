import { BsBraces } from "react-icons/bs";
import { FaHtml5, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SkillContainer from "./SkillContainer";
import { styled } from "styled-components";

function FrontEndTable() {
  return (
    <Side>
      <h4 className="head">
        <BsBraces />
        My FrontEnd Stack
      </h4>
      <SkillContainer>
        <div className="box">
          <div className="icon">
            <FaHtml5 color="E44D26" />
          </div>
          <div className="description">HTML5</div>
        </div>
        <div className="box">
          <div className="icon">
            <DiCss3 color="#3a2f9d" />
          </div>
          <div className="description">CSS</div>
        </div>
        <div className="box">
          <div className="icon">
            <FaReact color="53C1DE" />
          </div>
          <div className="description">ReactJS</div>
        </div>
        <div className="box">
          <div className="icon">
            <SiStyledcomponents color="#ff9e93" />
          </div>
          <div className="description">Styled Components</div>
        </div>
        <div className="box">
          <div className="icon">
            <SiTailwindcss color="44a8b3" />
          </div>
          <div className="description">Tailwind</div>
        </div>
        <div className="box">
          <div className="icon">
            <TbBrandNextjs color="black" Alt />
          </div>
          <div className="description">NextJS</div>
        </div>
      </SkillContainer>
    </Side>
  );
}

export default FrontEndTable;
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
