"use client";

import { Variants, motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer as unknown as Variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center text-[20px]" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Hi! I&apos;m{" "}
        <span className="font-extrabold text-white">Manasi Shah.</span> I&apos;m
        an enthusiast for{" "}
        <span className="font-extrabold text-white">front-end development</span>
        , a geeky passionate coder and a forever learner. I love to explore and
        keep up with the latest technologies. Making things{" "}
        <span className="font-extrabold text-white">easier</span> to deal with
        has been my all-time motivation and the ultimate goal :)
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
