import { keyframes, styled } from "styled-components";

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 3rem;
  font-family: "Roboto", sans-serif;

  .box {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .icon {
    border-radius: 45%;
    height: 200px;
    background-color: #eee;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100px;
      height: 100px;
      color: orange;
      &:hover {
        animation: ${bounceAnimation} 1s;
      }
    }
  }

  .description {
    text-align: center;
    font-weight: 500;
  }
`;

export default SkillContainer;
