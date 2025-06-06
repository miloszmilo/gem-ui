import { useEffect, useState } from "react"

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [items, setItems] = useState<string[]>(["../../../public/images/alexander-mass-0xugG5t9dsc-unsplash.jpg", "../../../public/images/richard-stachmann-wUKrO7kLWeU-unsplash.jpg", "../../../public/images/toa-heftiba-JTWOWjraDUE-unsplash.jpg"]);
  const autoNextItemTime = 5000; // ms
  const [progressBar, setProgressBar] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex + 1 === items.length ? 0 : currentIndex + 1)
    }, autoNextItemTime)
    return () => clearInterval(interval)
  })

  return (
    <div className="flex flex-col items-center max-w-64">
      <div>
        {items
          .filter((_, index) => index === currentIndex)
          .map((item) => {
            return (
              <div>
                <img src={item} />
              </div>
            )
          })}
        <div className="bg-neutral-800 w-full h-2">
          <div className="bg-blue-500 h-full"
            style={{ width: `${progressBar}%` }}>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <button className="cursor-pointer"
          onClick={() => setCurrentIndex(0)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg>
        </button>
        <button className="cursor-pointer"
          onClick={() => setCurrentIndex(currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button className="cursor-pointer"
          onClick={() => setCurrentIndex(currentIndex + 1 < items.length ? currentIndex + 1 : 0)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        <button className="cursor-pointer"
          onClick={() => setCurrentIndex(items.length - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

