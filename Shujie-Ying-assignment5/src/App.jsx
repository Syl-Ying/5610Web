import { useState } from 'react'
import './App.css'
import Grid from './components/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Grid />
      </div>
    </>
  );
}

export default App