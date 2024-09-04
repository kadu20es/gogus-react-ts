import { useState } from 'react'
import './styles/global.css'
import Cadastros from './pages/Cadastros'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <Cadastros />
    </>
  )
}

export default App
