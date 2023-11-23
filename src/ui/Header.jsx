import { styled } from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  return (
    <StyledHeader>
      <StyledNavbar>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="works" spy={true} smooth={true} duration={500}>
              Works
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="contactMe" spy={true} smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
      </StyledNavbar>
      <StyledSocialLinks>
        <ul>
          <li>
            <a href="https://github.com/eneskaplannn1">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/enes-kaplan-9b6a10242/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/eneskaplannn1/">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </StyledSocialLinks>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  width: 100vw;
  height: 5rem;
  background-color: var(--color-white-0);

  position: relative;
`;

const StyledNavbar = styled.nav`
  position: absolute;
  left: 5%;
  height: 100%;

  ul {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    li {
      font-size: 30px;
      cursor: pointer;
    }
  }
`;

const StyledSocialLinks = styled.nav`
  height: 100%;
  position: absolute;
  right: 5%;
  ul {
    height: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    li {
      padding: 0.4rem;
      margin: auto auto;
      border-radius: 50%;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 25px;
          height: 25px;
        }
      }

      &:hover {
        color: #e55305;
        background-color: #eee4e4aa;
      }
    }
  }
`;
