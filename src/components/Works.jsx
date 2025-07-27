import { motion } from "framer-motion";

function Works() {
  return (
    <section id="works" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl">
            My Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="project-card"
              >
                <div className="mb-4">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="object-cover mb-4 w-full h-48 rounded-lg"
                  />
                  <h3 className="mb-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-sm skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center btn-secondary"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const projects = [
  {
    imageSrc: "ekofin.png",
    title: "Ekofin - Stock Analysis",
    description:
      "A comprehensive financial analysis platform for stock market data and insights.",
    technologies: ["NextJS", "TypeScript", ".NET", "Tailwind"],
    link: "https://ekofin.net/anasayfa",
  },
  {
    imageSrc: "logo.png",
    title: "Ekofin Mobile App",
    description:
      "Mobile application for financial services and stock tracking.",
    technologies: ["React Native", "Expo", "TypeScript"],
    link: "https://apps.apple.com/tr/app/ekofin-borsa-hisse-fon/id6502468053?l=tr",
  },
  {
    imageSrc: "uptoraise.png",
    title: "UpToRaise",
    description:
      "UpToRaise is a fullstack project that connects Investors and Entrepreneurs.",
    technologies: ["React", "Vite", "Tailwind", ".NET", "MSSQL"],
    link: "https://uptoraise.netlify.app/",
  },
  {
    imageSrc: "smartinfo.png",
    title: "SmartInfo",
    description: "Information management system with modern web interface.",
    technologies: ["NextJS", "TypeScript", ".NET"],
    link: "https://smartinfo.com.tr/",
  },
  {
    imageSrc: "tradehub3.png",
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with modern UI/UX.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://tradehub-e-commerce.netlify.app/",
  },
  {
    imageSrc: "reactquiz.png",
    title: "React Quiz App",
    description: "Interactive quiz application built with React hooks.",
    technologies: ["React", "React Hooks", "JavaScript"],
    link: "https://eneskaplan-react-quiz-app.netlify.app/",
  },
  {
    imageSrc: "foodhub.png",
    title: "FoodHub",
    description: "Food delivery and restaurant discovery platform.",
    technologies: ["React", "React Hooks", "CSS"],
    link: "https://eneskaplan-foodhub.netlify.app/",
  },
];

export default Works;
