import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Userdetails from './component/Userdetails'
import Remove from './component/Remove'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Nav/>
      <Userdetails/>
      <Remove/>
    </>
  )
}

export default App



