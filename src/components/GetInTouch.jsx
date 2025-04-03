import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SOCIAL } from "../constants";

const GetInTouch = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
       <motion.h2 id="contact"
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1}} className="my-10 text-center text-4xl">Get In Touch</motion.h2>
      <div className="text-center tracking-tight ">
        <a href={`mailto:${CONTACT.email}`} className="border-b border-purple-400">{CONTACT.email}</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={SOCIAL.instargram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>

    </div>
  );
};

export default GetInTouch;
