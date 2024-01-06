import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const increase = () => {
    if(count < 20 ){
      count = count + 1;
      setCount(count);
    }
  }

  const decrease = () => {
    if(count > 0 ){
      count = count - 1;
      setCount(count);
    }
  }


  return (
    <>
     <h1>Counter: {count}</h1>
     <h2>(From 1 to 20)</h2>
     <button onClick={increase}>Increase</button>
     <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
