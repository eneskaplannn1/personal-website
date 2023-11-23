import { styled } from "styled-components";

function Heading({ title, subTitle }) {
  return (
    <StyledHeading>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
    </StyledHeading>
  );
}

export default Heading;

const StyledHeading = styled.header`
  padding: 2rem 0;
  margin-bottom: 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
  }
  h4 {
    font-weight: 400;
    color: #777;
  }
`;
