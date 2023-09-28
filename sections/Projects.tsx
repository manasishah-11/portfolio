"use client";

import { useState } from "react";
import { Variants, motion } from "framer-motion";

import styles from "../styles";
import { projects } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ProjectCard, TypingText } from "../components";

const Projects = () => {
  const [active, setActive] = useState("spotify-clone");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer as unknown as Variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Projects" textStyles="text-center text-[20px]" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((proj, index) => (
            <ProjectCard
              key={proj.id}
              {...proj}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
