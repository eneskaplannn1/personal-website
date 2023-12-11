import { IoHomeOutline } from "react-icons/io5";
import { PiCirclesFourBold } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { TbSettings } from "react-icons/tb";

import { FaRegStar } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <div className="hidden lg:bg-transparent lg:fixed lg:z-10 lg:h-screen lg:top-0 lg:left-2 lg:flex lg:items-center ">
      <ul className="flex flex-row gap-4 p-4 text-xl text-black lg:p-0 lg:flex-col navigation navbar-opacity">
        <li>
          <Link smooth={true} duration={500} activeClass="active" to="home">
            <IoHomeOutline />
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="about">
            <RxPerson />
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="skills">
            <FaRegStar />
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="works">
            <PiCirclesFourBold />
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="services">
            <TbSettings />
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="contactMe">
            <FiMail />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
