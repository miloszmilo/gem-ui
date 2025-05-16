import { useState } from "react"
import { motion } from "motion/react";

export default function Toggle() {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const toggle = () => setIsToggled(!isToggled)

  return (
    <button className="flex flex-row items-center gap-2">
      <span className={`${isToggled ? 'opacity-50' : 'opacity-100'}`}>
        OFF
      </span>
      <motion.div
        className={`inset-0 flex flex-row w-48 h-12 bg-neutral-300 rounded-full
cursor-pointer relative`}
        style={{ justifyContent: isToggled ? 'flex-end' : 'flex-start' }}
        onClick={toggle}
      >
        <motion.div
          layout
          className={` bg-white rounded-full h-full
aspect-square shadow-black shadow-md`}
          transition={{ type: "spring", duration: 0.15, damping: 20, stiffness: 200 }}
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.05 }}
        >
        </motion.div>
      </motion.div>
      <span className={`${isToggled ? 'opacity-100' : 'opacity-50'}`}>
        ON
      </span>
    </button>
  )
}

