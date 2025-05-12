import './App.css'
import Checkbox from './components/atoms/Checkbox'

export default function App() {

  return (
    <body>
      <nav>
      </nav>
      <main className='flex flex-col p-4 justify-items-center
        items-center'>
        <h1 className="sans text-4xl font-bold">Gem UI</h1>
        <Checkbox />
      </main>
      <footer>
      </footer>
    </body>
  )
}
