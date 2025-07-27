import { IoHomeOutline } from "react-icons/io5";
import { PiCirclesFourBold } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navigation() {
  const navItems = [
    { icon: IoHomeOutline, to: "home", label: "Home" },
    { icon: RxPerson, to: "about", label: "About" },
    { icon: FaRegStar, to: "skills", label: "Skills" },
    { icon: PiCirclesFourBold, to: "works", label: "Projects" },
    { icon: FiMail, to: "contactMe", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-bold gradient-text cursor-pointer"
          >
            Enes Kaplan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                activeClass="text-blue-600"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;
