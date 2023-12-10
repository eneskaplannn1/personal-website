import { keyframes, styled } from "styled-components";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <StyledSpan className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl">
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </StyledSpan>
  );
};
const bounceIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const rubberBand = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`;

const StyledSpan = styled.span`
  font-weight: 600;

  .text-animate {
    display: inline-block;
    opacity: 0;
    animation: ${bounceIn} 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    min-width: 10px;
  }

  .text-animate-hover {
    min-width: 10px;
    display: inline-block;
    animation-fill-mode: both;

    &:hover {
      animation: ${rubberBand} 1s forwards;
      color: #e55305;
    }
  }

  ${Array.from(
    { length: 35 },
    (_, i) => `
    .text-animate._${i + 1} {
      animation-delay: ${(i + 1) / 10}s;
    }
  `
  ).join("")}
`;

export default AnimatedLetters;
