import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LongPolling from './LongPolling'
import WebSock from './WebSocket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WebSock/>
    </>
  )
}

export default App
