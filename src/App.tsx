import { useState } from 'react'
import './styles/global.css'
import Cadastros from './pages/Cadastros'
import Navigation from './components/Navigation'


function App() {
  const [count, setCount] = useState(0)



  return (
    <div className='flex flex-row'>
      <Navigation />
      <Cadastros />


    </div>
  )
}

export default App
