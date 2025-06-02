import { motion } from "motion/react";
import { useState } from "react";

export default function MinMaxSlider() {
  const [value, setValue] = useState<number>();
  return (
    <div className="bg-black w-48 h-8 rounded-full flex flex-row">
      <motion.div
        transition={{ type: "spring", duration: 0.15 }}
        className={`bg-red-500 rounded-full h-full aspect-square
relative left-0`}
      >
      </motion.div>
      <motion.div
        transition={{ type: "spring", duration: 0.15 }}
        className={`bg-blue-500 rounded-full h-full aspect-square
relative right-0`}
      >
      </motion.div>
    </div>
  )
}

