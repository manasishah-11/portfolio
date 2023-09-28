"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="font-normal text-[14px] text-white opacity-50">
            {`Copyright © ${new Date().getFullYear()}. All rights reserved.`}
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <img
                key={social.name}
                src={social.imgUrl}
                alt={social.name}
                className={`${
                  index === 0 ? "w-[32px] h-[32px]" : "w-[24px] h-[24px]"
                } object-contain cursor-pointer`}
                onClick={() => window.open(social.url, "_blank")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
