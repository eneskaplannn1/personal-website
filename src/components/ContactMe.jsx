import { FiMessageCircle } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

function ContactMe() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleSubmitForm() {
    setIsSubmitted(true);
    console.log(15);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 1000);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="max-w-xs min-h-screen py-24 mx-auto space-y-16 md:max-w-xl lg:max-w-2xl xl:max-w-3xl xxl:max-w-7xl "
      id="contactMe"
    >
      <h1 className="header">Contact Me</h1>
      <div className="container grid gap-y-12 xxl:grid-cols-2">
        <div>
          <div className="flex items-center mb-10 text-xl sm:text-3xl xxl:justify-center gap-x-4 ">
            <FiMessageCircle /> Talk to me
          </div>
          <div className="grid text-md gap-y-8">
            <div className="grid text-lg sm:text-2xl gap-y-3">
              <div className="contact-data-title">Email</div>
              <div className="opacity-75 ">eneskaplannn1@gmail.com</div>
            </div>
            <div className="grid text-md sm:text-2xl gap-y-3">
              <div className="contact-data-title">Phone Number</div>
              <div className="opacity-75 ">+90 (551) 947 8837</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-10 text-xl sm:text-2xl lg:text-3xl xxl:justify-center gap-x-4">
            <RiSendPlaneLine /> Send me your project
          </div>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="relative grid space-y-8 h-fit "
          >
            <div className="relative space-y-2 h-fit">
              <label
                className="absolute z-10 p-2 font-bold bg-white top-[-15px] left-[20px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="z-1 text-xl rounded-[32px] bg-none outline-none p-6 border-2 w-full border-black border-solid"
                type="text"
                id="name"
                {...register("name", { required: "Enter your name" })}
                placeholder="Write your name"
              />
              {errors?.name && (
                <div className="pl-2 text-xl text-red-600">
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className="relative space-y-2 h-fit">
              <label
                className="absolute z-10 p-2 font-bold bg-white top-[-15px] left-[20px] "
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" text-xl w-full  z-1 rounded-[32px] bg-none outline-none p-6 border-2 border-black border-solid"
                {...register("email", { required: "Enter your email" })}
                type="text"
                id="email"
                placeholder="Write your email"
              />{" "}
              {errors?.email && (
                <div className="pl-2 text-xl text-red-600">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="relative space-y-2 h-fit">
              <label
                className="absolute z-10 p-2 font-bold bg-white top-[-15px] left-[20px]"
                htmlFor="email"
              >
                Project
              </label>
              <textarea
                className=" text-xl  z-1 w-full resize-none h-40 rounded-[32px] bg-none outline-none p-6 border-2 border-black border-solid "
                placeholder="Write your project"
                {...register("project", { required: "Enter your project" })}
              />
              {errors?.project && (
                <div className="pl-2 text-xl text-red-600">
                  {errors.project.message}
                </div>
              )}
            </div>
            <button
              disabled={isSubmitted}
              className="px-12 py-4 text-3xl font-medium text-white duration-300 border border-transparent texc rounded-2xl w-fit hover:border-primary bg-primary hover:text-primary disabled:cursor-not-allowed hover:bg-white"
            >
              {isSubmitted ? "Sending ...." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactMe;
