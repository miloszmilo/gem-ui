import './App.css'
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
      </main>
      <footer>
      </footer>
    </body>
  )
}
