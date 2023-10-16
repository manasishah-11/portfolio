"use client";

import { Variants, motion } from "framer-motion";

import styles from "../styles";
import { technologies } from "../constants";
import { TechnologyItem, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const Technologies = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer as unknown as Variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Skills" textStyles="text-center text-[20px]" />
        <div className="mt-[31px] grid grid-cols-2 gap-[24px]">
          {technologies.map((feature, index) => (
            <TechnologyItem
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Technologies;
