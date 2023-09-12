"use client"

import UseMousePos from './Components/UseMousePos';
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { x, y } = UseMousePos();
  const [isHovered, setIsHovered] = useState(false);

  const size = isHovered ? 400 : 70;

  return (
        <>
      <section className="main">
        <motion.div
          className="mask"
          animate={{
            WebkitMaskPosition: `${x - size/2}px ${y - size/1.5}px`,  //x-15 y-70
            WebkitMaskSize: `${size}px`
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="text-paragraph"
          >
            A frontend student, with skills that may soon be replaced by A.I. 
            Creating websites that look better in my head than in reality.
          </p>
        </motion.div>
        <div className="other-section">
          <p className="text-paragraph">
            I'm a <span className="span-paragraph">junior frontend dev</span>{" "}
            who's trying to create high quality &
            impactful websites and digital experiences.
          </p>
        </div>
      </section>
    </>
  )
}
