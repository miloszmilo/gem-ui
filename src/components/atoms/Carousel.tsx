import { useState, type ReactEventHandler } from "react"

export default function Carousel({ defaultItems }: { defaultItems: string[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [items, setItems] = useState<string[]>(defaultItems);
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  function handleLoad(e: ReactEventHandler<HTMLImageElement>) {
    setShowPlaceholder(false);
    return;
  }

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
              <>
                {showPlaceholder && <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                </div>}
                <img src={item} key={index} className="aspect-auto" onLoad={handleLoad} />
              </>
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

