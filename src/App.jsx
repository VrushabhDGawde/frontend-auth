import { useState } from 'react'
import Navbar from './components/Navbar'
import AppRouter from './routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRouter />
  )
}

export default App
