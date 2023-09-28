"use client";

import { Variants, motion } from "framer-motion";

import styles from "../styles";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={fadeIn("down", "tween", 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center mb-8`}
    >
      <img
        src="/me.jpeg"
        alt="me"
        className="h-[170px] w-[170px] rounded-full"
      />
    </motion.div>
    <motion.div
      variants={staggerContainer as unknown as Variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Hello,
        </motion.h1>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading1}>
          Welcome to my world!
        </motion.h1>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[55px]" />
        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
