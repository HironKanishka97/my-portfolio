import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
     <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1}} className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
             whileInView={{opacity:1 ,x:0}}
             initial={{opacity:0 ,x:-100}}
             transition={{duration:0.5}}
            className="w-full lg:w-1/4">
              <img
                src={project.image}
                height={250}
                width={250}
                className="mb-6 rounded"
                alt={project.title}
              />
            </motion.div>
            <motion.div
             whileInView={{opacity:1 ,x:0}}
             initial={{opacity:0 ,x:100}}
             transition={{duration:0.5}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description }</p>
              <div className="flex flex-wrap">
              {project.technologies.map((technology,index)=>(
                <span key={index} className="mr-2 mt-4 rounded border border-neutral-700 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{technology}</span>
              ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
