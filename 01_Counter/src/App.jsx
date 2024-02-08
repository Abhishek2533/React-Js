import { useState } from 'react';
import './App.css'

function App() {
  // let count = 5;

  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 20) setCount(count+1);
  }

  const removeValue = () => {
    if (count > 0) setCount(count-1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Value: {count}</h2>

      <button onClick={addValue} >Add Value</button>
      <br />
      <button onClick={removeValue} >Remove Value</button>
    </>
  )
}

export default App
