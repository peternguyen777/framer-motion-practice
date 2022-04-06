import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  //when we call cycleAnimation, it toggles between the different animations.

  return (
    <React.Fragment>
      <motion.div
        variants={loaderVariants}
        animate={animation} //set animate to the current state of animation
        className='loader'
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </React.Fragment>
  );
};

export default Loader;
