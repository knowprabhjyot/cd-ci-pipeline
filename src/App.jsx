import { useMemo, useState } from 'react';
import './App.css';


function App() {
  const [number, setNumber] = useState(0);
  
  const square = useMemo(() => {
    console.log('hey');
    return number * number;
  }, [number])

  return (
    <>
      <p style={{ backgroundColor: "red"}}>Hello World</p>
     <div>Wohoo!</div>
     <h1>Number: {number}</h1>
     <h2>Square: {square}</h2>
      <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Click</button>
    </>
  );
}

export default App;
