import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1}}
      className="my-20 text-center text-4xl">Education</motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="m-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p 
              whileInView={{opacity:1 ,x:0}}
              initial={{opacity:0 ,x:-100}}
              transition={{duration:0.5}}
              className="mb-2 text-sm text-neutral-400">{education.year}</motion.p>
            </div>
            <motion.div
             whileInView={{opacity:1 ,x:0}}
             initial={{opacity:0 ,x:100}}
             transition={{duration:0.5}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{education.university}</h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
              {/* Make sure the container for technologies is responsive */}
              <div className="flex flex-wrap">
                {education.technologies.map((technology, index) => (
                  <span
                    className="mr-2 mt-4 rounded border border-neutral-700 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                    key={index}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
