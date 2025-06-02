import { motion } from "motion/react";
import { useState, type MouseEvent } from "react";

type Props = {
  min: number
  max: number
  step: number
}

export default function Slider({ min = 1, max = 100, step = 1 }: Props) {
  const [value, setValue] = useState<number>((max - min) / 2);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  function getPercentage() {
    console.log("Percentage", value)
    return Math.max(Math.min(((value - min) / (max - min)) * 100, max), min);
  }
  function handleDragStart() {
    setIsDragging(true);
  }
  function handleDragEnd() {
    setIsDragging(false);
  }
  function handleDrag(event: MouseEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const percentage = (event.clientX - left) / width;
    const newValue = Math.round(min + percentage * (max - min));
    setValue(newValue);
  }
  return (
    <div className="bg-black w-48 h-8 rounded-full flex items-center">
      <motion.div
        transition={{ type: "spring", duration: 0.15 }}
        className={`relative bg-red-500 rounded-full h-full aspect-square
          ${isDragging ? 'cursor-grabbing' : 'cursor-pointer'}`}
        style={{ width: `${getPercentage()}%` }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDrag}
      >
      </motion.div>
    </div>
  )
}

