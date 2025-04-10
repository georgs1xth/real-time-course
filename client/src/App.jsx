import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LongPolling from './LongPolling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LongPolling/>
    </>
  )
}

export default App
