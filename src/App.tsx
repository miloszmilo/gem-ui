import './App.css'
import Carousel from './components/atoms/Carousel'
import MinMaxSlider from './components/atoms/MinMaxSlider'
import Select from './components/atoms/Select'
import Slider from './components/atoms/Slider'
import Toggle from './components/atoms/Toggle'
import Checkbox from './components/molecules/Checkbox'

export default function App() {

  return (
    <body className='bg-white text-black dark:bg-black dark:text-white'>
      <nav>
      </nav>
      <main className='flex flex-col p-4 justify-items-center
        items-center gap-4'>
        <h1 className="sans text-4xl font-bold">Gem UI</h1>
        <Checkbox />
        <Toggle />
        <MinMaxSlider />
        <Slider min={1} max={100} step={1} />
        <Select />
        <Carousel defaultItems={["/images/alexander-mass-0xugG5t9dsc-unsplash.jpg", "/images/richard-stachmann-wUKrO7kLWeU-unsplash.jpg", "../../../public/images/toa-heftiba-JTWOWjraDUE-unsplash.jpg"]} />
      </main>
      <footer>
      </footer>
    </body>
  )
}
