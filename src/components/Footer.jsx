import { styled } from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      © Copyright by Enes Kaplan.
      <a href="https://github.com/eneskaplannn1/personal-website">
        Click here to see source code
      </a>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  padding: 5rem 3rem;

  background-color: black;
  color: white;

  a {
    transition: 0.4s ease;
    &:hover {
      color: #df6a2a;
    }
  }
`;

export default Footer;
