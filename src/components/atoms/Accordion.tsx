import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "motion/react";

type Props = {
  defaultState?: boolean;
  children: React.ReactNode;
};

export default function Accordion({ defaultState = false, children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultState);
  return (
    <div className="flex flex-col w-[40ch] rounded-md bg-neutral-800">
      <div className="flex flex-row gap-2 p-2 border-b-neutral-900 border-b-1">
        <span className="w-full text-xl">Heading</span>
        <button
          className={`cursor-pointer ${isOpen ? "rotate-90" : ""} duration-100`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence initial={defaultState}>
        {isOpen && (
          <motion.p
            key="accordion"
            className="p-2"
            initial={{ height: 0, overflow: "hidden" }}
            animate={{ height: "auto", overflow: "scroll" }}
            exit={{ height: 0, overflow: "hidden" }}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
