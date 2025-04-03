import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/Profile.jpg"
import { motion } from "framer-motion"

const animationFn=(delay)=>({
  hidden :{x:-100 ,opacity:0},
  visible:{
    x:0 ,
    opacity:0.8,
    transition :{duration:0.5 ,delay :delay}
  }

})

const Hero = () => {
  return (
    <div id="home" className="border-b  border-neutral-900 pt-10 pb-2 mt-10 sm:mt-10 lg:mb-15">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={animationFn(0)}
            initial="hidden"
            animate="visible"
             className="pb-5 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Hiron Kanishka
            </motion.h1>
            <motion.span
            variants={animationFn(0.5)}
            initial="hidden"
            animate="visible"
              className="bg-gradient-to-r from-pink-600 via-slate-500 to-purple-600 bg-clip-text text-3xl 
            tracking-tight text-transparent"
            >
              Full Stack Software Engineer
            </motion.span>
            < motion.p
            variants={animationFn(1)}
            initial="hidden"
            animate="visible"
             className="my-2 max-w-xl py-6 font-light tracking-tighter ">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        {/* profile pic */}
        <div className="w-full lg:w-1/2 lg:p-8  ">
            <div className="flex justify-center">
                     <motion.img 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:0.8}}
            transition={{duration:1,delay:0.5}}
            className="opacity-100 mt-10  h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] " src={profilePic} alt="Hiron Kanishka" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
