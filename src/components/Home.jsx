import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Hey! I&apos;m <span className="gradient-text">Enes</span>.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 md:text-2xl">
            I&apos;m a full-stack developer & computer engineering student,
            passionate about creating impactful web experiences and mobile
            applications.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">React Native</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">.NET</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">SQL Server</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">+99 more...</span>
          </div>

          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <a href="#about" className="btn-primary">
              Learn More
            </a>
            <a href="#works" className="btn-secondary">
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
