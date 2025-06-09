import { useState } from "react"

export default function Carousel({ defaultItems }: { defaultItems: string[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [items, setItems] = useState<string[]>(defaultItems);

  return (
    <div>
      <div className="flex flex-col items-center max-w-64 relative">
        <div className="flex flex-row items-center justify-between h-full w-full absolute opacity-0 hover:opacity-100 duration-100">
          <button className="cursor-pointer px-2 h-full bg-gradient-to-r from-black/50 to-black/0"
            onClick={() => setCurrentIndex(currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="cursor-pointer px-2 h-full bg-gradient-to-l from-black/50 to-black/0"
            onClick={() => setCurrentIndex(currentIndex + 1 < items.length ? currentIndex + 1 : 0)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        {items
          .filter((_, index) => index === currentIndex)
          .map((item, index) => {
            return (
              <img src={item} key={index} className="aspect-auto" />
            )
          })}
      </div>
      <div className="flex flex-row justify-center gap-1 mt-2">
        {items.map((_, index) => {
          return (
            <button className={`${index === currentIndex ? 'bg-white' : ''} hover:bg-neutral-500 duration-100 border-white border-2 rounded-full min-w-8 md:min-w-3 aspect-square cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
              key={index}
            >
            </button>
          )
        })}
      </div>
    </div>
  )
}

