import './App.css'
import Checkbox from './components/atoms/Checkbox'
import Toggle from './components/atoms/Toggle'

export default function App() {

  return (
    <body>
      <nav>
      </nav>
      <main className='flex flex-col p-4 justify-items-center
        items-center'>
        <h1 className="sans text-4xl font-bold">Gem UI</h1>
        <Checkbox />
        <Toggle/>
      </main>
      <footer>
      </footer>
    </body>
  )
}
