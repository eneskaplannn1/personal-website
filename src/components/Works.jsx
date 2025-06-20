import { easeInOut, motion } from "framer-motion";

function Works() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5, ease: easeInOut }}
      className="py-12 section-height"
      id="works"
    >
      <div className="max-w-xs mx-auto space-y-24 sm:max-w-2xl lg:max-w-4xl xxl:max-w-6xl">
        <h1 className="header">My Projects</h1>

        <div className="grid gap-16 lg:grid-cols-2 sm:place-items-center place-content-center">
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className="flex w-[330px] h-[220px]  relative flex-col hover:shadow-2xl xxl:w-[480px] xxl:h-[320px]  sm:w-[480px] sm:h-[320px] lg:w-[400px] lg:h-[266px]  group hover:bg-gradient-to-r  from-gray-200 to-[#001b5e] rounded-2xl"
              >
                <img
                  className="w-full h-full rounded-2xl group-hover:opacity-20 "
                  src={project.imageSrc}
                />
                <div className="px-7 card">
                  <h3 className="text-xl tracking-wider sm:text-2xl lg:text-3xl ">
                    {project.title}
                  </h3>
                  <p className="py-4 text-md sm:text-xl ">
                    {project.description}
                  </p>
                  <a
                    className="block mx-auto bg-indigo-600 btn w-fit"
                    target="blank"
                    href={project.link}
                  >
                    More info
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

const projects = [
  {
    imageSrc: "ekofin.png",
    title: "Ekofin - Stock Analysis",
    description: "NextJS, Tailwind, TypeScript, .NET",
    link: "https://ekofin.net/anasayfa",
  },
  {
    imageSrc: "logo.png",
    title: "Ekofin Mobile App",
    description: "React Native, Expo, TypeScript",
    link: "https://apps.apple.com/tr/app/ekofin-borsa-hisse-fon/id6502468053?l=tr",
  },
  {
    imageSrc: "smartinfo.png",
    title: "SmartInfo",
    description: "NextJS, TypeScript, .NET",
    link: "https://smartinfo.com.tr/",
  },
  {
    imageSrc: "tradehub3.png",
    title: "E-commerce Application",
    description:
      "ReactJS, NodeJS, Styled-Components, ReactRedux, ReactQuery, MongoDB, ExpressJS",

    link: "https://tradehub-e-commerce.netlify.app/",
  },
  {
    imageSrc: "reactquiz.png",
    title: "React Quiz Application",
    description: "React, React Hooks",
    link: "https://eneskaplan-react-quiz-app.netlify.app/",
  },
  {
    imageSrc: "foodhub.png",
    title: "FoodHub",
    description: "React, React Hooks",
    link: "https://eneskaplan-foodhub.netlify.app/",
  },
  {
    imageSrc: "personalwebsite.png",
    title: "Personal Website",
    description: "React, Tailwind, Framer Motion, Swiper, React Scrool",

    link: "https://github.com/eneskaplannn1/personal-website",
  },
];

console.log(projects);

export default Works;
