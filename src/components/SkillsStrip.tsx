import { motion } from "motion/react";

import React from "react";

const SkillsStrip = () => {
  const skillsList = [
    "React",
    "Typescript",
    "Javascript",
    "SQL",
    "Tailwind",
    "Html",
    "Git",
    "Zustand",
    "motion",
    "Mongo DB",
  ];

  return (
    <div className="overflow-x-clip mb-20">
      <div className="flex overflow-hidden">
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex flex-none gap-24 pr-24 bg-black text-white py-5 md:text-4xl lg:text-6xl"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              {skillsList.map((list) => (
                <p>{list}</p>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsStrip;
