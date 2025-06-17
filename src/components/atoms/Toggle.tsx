import { useState } from "react";
import { motion } from "motion/react";

export default function Toggle({
  defaultState = false,
  offText = "Off",
  onText = "On",
}: {
  defaultState: boolean;
  offText?: string;
  onText?: string;
}) {
  const [isToggled, setIsToggled] = useState<boolean>(defaultState);
  const toggle = () => setIsToggled(!isToggled);

  return (
    <div className="flex flex-row items-center gap-2">
      <span
        className={`${isToggled ? "" : "text-shadow-neutral-500 text-shadow-sm"}`}
      >
        {offText}
      </span>
      <motion.button
        className={`inset-0 flex flex-row w-48 h-12 bg-neutral-300 rounded-full
cursor-pointer relative`}
        style={{ justifyContent: isToggled ? "flex-end" : "flex-start" }}
        onClick={toggle}
        aria-label="Togglable button"
      >
        <motion.div
          layout
          className={` bg-white rounded-full h-full
aspect-square shadow-black shadow-md`}
          transition={{
            type: "spring",
            duration: 0.15,
            damping: 20,
            stiffness: 200,
          }}
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.05 }}
        ></motion.div>
      </motion.button>
      <span
        className={`${isToggled ? "text-shadow-neutral-500 text-shadow-sm" : ""}`}
      >
        {onText}
      </span>
    </div>
  );
}
