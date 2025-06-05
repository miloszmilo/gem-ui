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
    <div>
      <motion.button
        className={`bg-black dark:bg-white dark:text-black rounded-full
        px-4 flex flex-row gap-2 cursor-pointer`}
        onClick={() => setIsOpened((cur) => !cur)}
        whileTap={{ scale: 0.95 }}
      >
        <li className="list-none">
          {selectedItemIndex < 0 ? defaultItem : items[selectedItemIndex].text}
        </li>
        <span className="cursor-pointer">
          {isOpened ? "<" : "V"}
        </span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpened && <motion.ul
          key="dropdown"
          className={`bg-black dark:bg-white dark:text-black rounded-xl
p-2 gap-2 flex flex-col`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {selectedItemIndex !== -1 && <li className="cursor-pointer hover:text-neutral-500"
            onClick={handleSelect}>{defaultItem}</li>}
          {isOpened && items.filter((_, index) => index !== selectedItemIndex).map((item) => {
            return <li
              className="cursor-pointer hover:text-neutral-500"
              onClick={handleSelect}
            >
              {item.text}
            </li>
          })}
        </motion.ul>
        }
      </AnimatePresence>
    </div >
  )
}

