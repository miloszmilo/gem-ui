import { AnimatePresence, motion } from "motion/react"
import { useState, type MouseEvent } from "react"

type Props = {
  defaultItem: string
  items: Item[]
  onSelect: (index: number, item: Item) => void
}

type Item = {
  text: string
  value: any
}

export default function Select({ defaultItem = "default", items = [{ text: "one", value: 1 }, { text: "two", value: 2 }], onSelect }: Props) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);

  function handleSelect(event: MouseEvent<HTMLLIElement>) {
    const index = items.findIndex((item) => item.text === event.currentTarget.textContent);
    setSelectedItemIndex(index);
    setIsOpened(false);
    onSelect(index, items[index]);
  }
  return (
    <div className="relative inline-block">
      <motion.button
        className={`relative z-10 bg-black dark:bg-white dark:text-black rounded-xl
        px-4 flex flex-row cursor-pointer gap-2`}
        onClick={() => setIsOpened((cur) => !cur)}
      >
        <li className="list-none">
          {selectedItemIndex < 0 ? defaultItem : items[selectedItemIndex].text}
        </li>
        <span
          className={`cursor-pointer ${isOpened ? "rotate-90" : ""}
motion-safe:duration-100`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpened && <motion.ul
          key="dropdown"
          className={`relative bg-black dark:bg-white dark:text-black rounded-b-xl
z-0 mt-[-.5lh] max-h-[7lh]`}
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: "auto", overflow: "scroll" }}
          exit={{ height: 0, overflow: "hidden" }}
          transition={{ duration: 0.1 }}
        >
          <div className="p-2 py-4 gap-2 flex flex-col">
            {selectedItemIndex !== -1 && <li className="cursor-pointer hover:text-neutral-500"
              onClick={handleSelect}>{defaultItem}</li>}
            {isOpened && items.filter((_, index) => index !== selectedItemIndex).map((item) => {
              return (
                <li
                  className="cursor-pointer hover:text-neutral-500"
                  onClick={handleSelect}
                >
                  {item.text}
                </li>
              )
            })}
          </div>
        </motion.ul>
        }
      </AnimatePresence>
    </div >
  )
}

