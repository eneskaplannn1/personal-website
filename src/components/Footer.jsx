import { IoLogoGithub } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container">
        <div className="py-12 text-center">
          <div className="flex gap-2 justify-center items-center mb-4">
            <span className="text-gray-600">
              © {new Date().getFullYear()} Enes Kaplan. All rights reserved.
            </span>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <span className="text-gray-500">Source code available on</span>
            <a
              href="https://github.com/eneskaplannn1/personal-website"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IoLogoGithub size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
