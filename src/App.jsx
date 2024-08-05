import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tableview from './components/Tableview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tableview/>
    </>
  )
}

export default App
