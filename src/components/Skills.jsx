import { motion } from "framer-motion";

function Skills() {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Styled Components",
    "Figma",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    ".NET",
    "MongoDB",
    "MSSQL",
    "REST APIs",
    "Python Services",
    "Web Scraping",
    "Automation",
  ];

  const mobileSkills = ["React Native", "Expo", "Mobile UI/UX"];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl">
            My Tech Stack
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-6 text-2xl font-semibold">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="mb-6 text-2xl font-semibold">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="mb-6 text-2xl font-semibold">Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {mobileSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            {/* 
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="mb-6 text-2xl font-semibold">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {devOpsSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
