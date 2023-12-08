import { easeInOut, motion } from "framer-motion";

function Works() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: easeInOut }}
      className="py-12 section-height"
      id="works"
    >
      <div className="max-w-5xl mx-auto space-y-24">
        <h1 className="header">My Projects</h1>

        <div className="grid grid-cols-2 gap-16 ">
          <div className="flex relative flex-col hover:shadow-2xl  w-[480px] h-80 group hover:bg-gradient-to-r  from-gray-200 to-[#001b5e]  rounded-2xl">
            <img
              className="w-full h-full rounded-2xl group-hover:opacity-10"
              src="tradehub3.png"
            />
            <div className="card">
              <h3 className="text-3xl tracking-wider ">
                School Management System
              </h3>
              <p className="py-4 text-xl ">ReactJS , NodeJS</p>
              <button className="bg-indigo-600 btn">More info</button>
            </div>
          </div>
          <div className="flex relative flex-col hover:shadow-2xl  w-[480px] h-80 group hover:bg-gradient-to-r  from-gray-200 to-[#001b5e]  rounded-2xl">
            <img
              className="w-full h-full rounded-2xl group-hover:opacity-10"
              src="tradehub3.png"
            />
            <div className="card">
              <h3 className="text-3xl tracking-wider ">
                School Management System
              </h3>
              <p className="py-4 text-xl ">ReactJS , NodeJS</p>
              <button className="bg-indigo-600 btn">More info</button>
            </div>
          </div>
          <div className="flex relative flex-col hover:shadow-2xl  w-[480px] h-80 group hover:bg-gradient-to-r  from-gray-200 to-[#001b5e]  rounded-2xl">
            <img
              className="w-full h-full rounded-2xl group-hover:opacity-10"
              src="eduprotrack1.png"
            />
            <div className="card">
              <h3 className="text-3xl tracking-wider ">
                School Management System
              </h3>
              <p className="py-4 text-xl ">ReactJS , NodeJS</p>
              <button className="bg-indigo-600 btn">More info</button>
            </div>
          </div>
          <div className="flex relative flex-col hover:shadow-2xl  w-[480px] h-80 group hover:bg-gradient-to-r  from-gray-200 to-[#001b5e]  rounded-2xl">
            <img
              className="w-full h-full rounded-2xl group-hover:opacity-10"
              src="eduprotrack1.png"
            />
            <div className="card">
              <h3 className="text-3xl tracking-wider ">
                School Management System
              </h3>
              <p className="py-4 text-xl ">ReactJS , NodeJS</p>
              <button className="bg-indigo-600 btn">More info</button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Works;
