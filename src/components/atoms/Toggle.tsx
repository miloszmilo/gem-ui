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
        className={`flex flex-row w-48 h-12 bg-black rounded-full px-2 py-1 cursor-pointer`}
        style={{ justifyContent: isToggled ? 'flex-end' : 'flex-start' }}
        onClick={toggle}
      >
        <motion.div
          layout
          className={`${isToggled ? 'bg-green-500' : 'bg-red-500'} rounded-full h-full
aspect-square`}
          transition={{ duration: 0.15, stiffness: 1000 }}
          whileTap={{ scale: 0.95 }}
        >
        </motion.div>
      </motion.div>
      <span className={`${isToggled ? 'opacity-100' : 'opacity-50'}`}>
        ON
      </span>
    </button>
  )
}

