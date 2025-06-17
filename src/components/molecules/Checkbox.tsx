import { useState } from "react";
import { motion } from "motion/react";
import Xsvg from "../atoms/Xsvg";

type Props = {
  defaultState?: boolean;
};

export default function Checkbox({ defaultState = false }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(defaultState);
  return (
    <div className="flex flex-row justify-items-center items-center gap-2 [-webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,0.6) 30%, #000 50%, rgba(0,0,0,0.6) 70%);-webkit-mask-size: 200%;] animate-shine">
      <motion.div
        className={`p-4 rounded-md border-2 border-black dark:border-white aspect-square
min-h-fit cursor-pointer relative`}
        onClick={() => setIsChecked((cur) => !cur)}
        whileTap={{ scale: 0.85, rotate: 90 }}
      >
        <Xsvg isChecked={isChecked} />
      </motion.div>
      <span className="text-4xl">Checkbox</span>
    </div>
  );
}
