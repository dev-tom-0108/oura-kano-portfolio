/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_gg6a24d",
        "template_lbw6jyz",
        {
          from_name: form.name,
          to_name: "Oura",
          from_email: form.email,
          to_email: "eros1030109@gmail.com",
          message: form.message,
        },
        "53sRScqH9-I5iMdtW"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="block">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="flex">
            <a href="https://www.linkedin.com/in/oura-kano/" className="mr-7">
              <img
                align="left"
                src="https://raw.githubusercontent.com/black-wyvern-dev/black-wyvern-dev/main/images/linkedin.svg"
                alt="Oura | LinkedIn"
                width="36px"
              />
            </a>
            <a href="https://discordapp.com/users/946819354182418492" className="mr-7">
              <img
                align="left"
                src="https://raw.githubusercontent.com/dev-tom-0108/dev-tom-0108/main/images/discord.svg"
                alt="Oura | Discord"
                width="36px"
              />
            </a>
            <a href="mailto:eros1030109@gmail.com" className="mr-7">
              <img
                align="left"
                src="https://raw.githubusercontent.com/dev-tom-0108/dev-tom-0108/main/images/email.svg"
                alt="Oura | Email"
                width="36px"
              />
            </a>
            <a href="https://t.me/Ed1030109/" className="mr-7">
              <img
                align="left"
                src="https://raw.githubusercontent.com/black-wyvern-dev/black-wyvern-dev/main/images/telegram.svg"
                alt="Alex | Telegram"
                width="36px"
              />
            </a>
            <a href="https://join.skype.com/invite/OB8CWgBxi2qJ" className="mr-7">
              <img
                align="left"
                src="https://raw.githubusercontent.com/dev-tom-0108/dev-tom-0108/main/images/skype.svg"
                alt="Oura | Skype"
                width="36px"
              />
            </a>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your Email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
