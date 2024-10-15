import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields before submitting.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_y0o5xfi',
        'template_tn53hil',
        {
          from_name: form.name,
          to_name: "Sunny Patel",
          from_email: form.email,
          to_email: "sunnypatel124555@gmail.com",
          message: form.message,
        },
        "qKXGy2B0mb2m5HSJH"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden no-select`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                  <FontAwesomeIcon icon={faUser} className="text-purple-500 mr-2" /> Name
                </span>
                <input
                  type="text"
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500'
                />
              </label>
            </div>
            <div className="flex-1">
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                  <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 mr-2" /> Email
                </span>
                <input
                  type="email"
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500'
                />
              </label>
            </div>
          </div>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <FontAwesomeIcon icon={faComment} className="text-purple-500 mr-2" /> Message
            </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Hey Sunny, love the website! I'd like to chat about some opportunities you might like! 🎉"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500'
            />
          </label>

          <button
            type='submit'
            className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center'
            disabled={loading}
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : success ? (
              <span className="flex items-center">
                Sent Successfully
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </span>
            ) : (
              <span className="flex items-center">
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </span>
            )}
          </button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-secondary"
        >
          Copyright &copy; {new Date().getFullYear()} Sunny Patel's Portfolio
          <br />
          Designed and Developed by
          <a
            href="https://www.linkedin.com/in/sunny-patel-30b460204/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-purple-500 hover:text-purple-400 transition-colors duration-300 ml-1"
          >
            Sunny Jayendra Patel
          </a>
        </motion.p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");