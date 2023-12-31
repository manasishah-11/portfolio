"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  imgUrl: string;
  redirect: string;
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
  index: number;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { id, imgUrl, title, subtitle, redirect, index, active, handleClick } =
    props;

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id
          ? "lg:flex-[3.5] flex-[10]"
          : "lg:flex-[0.5] flex-[2] cursor-pointer"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div
          className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] cursor-pointer"
          onClick={() => window.open(redirect, "_blank")}
        >
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <h2 className="font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
          <p className="font-normal text-[14px] leading-[20.16px] text-white">
            {subtitle}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
