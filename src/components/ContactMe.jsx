import { FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";

function ContactMe() {
  return (
    <section id="contactMe" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl">
            Get In Touch
          </h2>

          <div className="mx-auto max-w-2xl">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center items-center mb-8 text-2xl font-semibold">
                <FiMessageCircle className="mr-3" />
                Let&apos;s Talk
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Email</h3>
                  <a
                    href="mailto:eneskaplannn1@gmail.com"
                    className="text-lg text-blue-600 underline hover:text-blue-800"
                  >
                    eneskaplannn1@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                  <p className="text-lg text-gray-600">+39 (351) 941 7368</p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">Location</h3>
                  <p className="text-lg text-gray-600">Italy, Turin</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactMe;
