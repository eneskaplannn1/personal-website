import { FiMessageCircle } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";

import { motion } from "framer-motion";

function ContactMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 300 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="h-screen max-w-6xl py-24 mx-auto space-y-32"
      id="contactMe"
    >
      <h1 className="header">Contact Me</h1>
      <div className="container grid grid-cols-2 gap-y-12">
        <div>
          <div className="flex items-center justify-center mb-10 text-3xl gap-x-4 ">
            <FiMessageCircle /> Talk to me
          </div>
          <div className="grid text-xl gap-y-8">
            <div className="grid text-2xl gap-y-3">
              <div className="contact-data-title">Email</div>
              <div className="opacity-75 ">eneskaplannn1@gmail.com</div>
            </div>
            <div className="grid text-2xl gap-y-3">
              <div className="contact-data-title">Phone Number</div>
              <div className="opacity-75 ">+90 (551) 947 8837</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center mb-10 text-3xl gap-x-4">
            <RiSendPlaneLine /> Send me your project
          </div>
          <form action="" className="relative grid gap-y-16">
            <div className="relative h-16">
              <label
                className="absolute z-10 p-2 font-bold bg-white top-[-15px] left-[20px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="absolute top-0 left-0 z-1 text-xl rounded-[32px] bg-none outline-none p-6 border-2 w-full border-black border-solid"
                type="text"
                id="name"
                placeholder="Write your name"
              />
            </div>
            <div className="relative h-16 ">
              <label
                className="absolute z-10 p-2 font-bold bg-white top-[-15px] left-[20px] "
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" text-xl absolute w-full top-0 left-0 z-1 rounded-[32px] bg-none outline-none p-6 border-2 border-black border-solid"
                type="text"
                id="email"
                placeholder="Write your email"
              />
            </div>
            <div className="relative h-16 ">
              <label
                className="absolute z-10 p-2 font-bold bg-white top-[-15px] left-[20px]"
                htmlFor="email"
              >
                Project
              </label>
              <textarea
                className=" text-xl absolute top-0 left-0 z-1 w-full resize-none h-40 rounded-[32px] bg-none outline-none p-6 border-2 border-black border-solid "
                placeholder="Write your project"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactMe;
