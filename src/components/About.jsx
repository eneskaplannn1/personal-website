import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl">
            About Me
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Experience */}
            <div>
              <h3 className="mb-8 text-2xl font-semibold">Experience</h3>

              <div className="space-y-6">
                <div className="experience-item">
                  <h4 className="text-lg font-semibold">
                    Full Stack Developer
                  </h4>
                  <p className="text-gray-600">
                    <a
                      href="https://ekofin.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Ekofin
                    </a>
                    • 2024 March - Present
                  </p>
                  <p className="mt-2 text-gray-700">
                    Developing web applications and mobile apps using React,
                    Next.js, React Native, and .NET technologies for the
                    financial analysis platform.
                  </p>
                </div>

                <div className="experience-item">
                  <h4 className="text-lg font-semibold">
                    Mobile App Developer
                  </h4>
                  <a
                    href="/EkofinMobil.pdf"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Ekofin Mobile App
                  </a>
                  <p className="text-gray-600">Ekofin • 2024 March - Present</p>
                  <p className="mt-2 text-gray-700">
                    Built React Native mobile applications for financial
                    services with TypeScript and Expo.
                  </p>
                </div>

                <div className="experience-item">
                  <h4 className="text-lg font-semibold">Web Developer</h4>
                  <p className="text-gray-600">
                    Various Projects • 2022 - 2025
                  </p>
                  <p className="mt-2 text-gray-700">
                    Created e-commerce platforms, quiz applications, and
                    personal websites using modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Interests */}
            <div>
              <div className="mb-12">
                <h3 className="mb-6 text-2xl font-semibold">Education</h3>
                <div className="experience-item">
                  <h4 className="text-lg font-semibold">
                    Computer Engineering
                  </h4>
                  <p className="text-gray-600">University • 2021 - Present</p>
                  <p className="mt-2 text-gray-700">
                    Currently pursuing Computer Engineering degree with focus on
                    software development and system architecture.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-semibold">Interests</h3>
                <div className="space-y-3">
                  <div className="flex gap-2 items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Web Development & UI/UX Design</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Mobile App Development</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Backend Design & Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="mt-16 text-center">
            <h3 className="mb-8 text-2xl font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="https://github.com/eneskaplannn1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <IoLogoGithub size={24} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/enes-kaplan-9b6a10242/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BsLinkedin size={24} />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/eneskaplannn1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram size={24} />
                Instagram
              </a>
              <a
                href="https://twitter.com/eneskaplannn1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaXTwitter size={24} />
                Twitter
              </a>
            </div>

            <div className="mt-8">
              <a
                href="/CV.pdf"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
