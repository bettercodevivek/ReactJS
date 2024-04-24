import { useState } from 'react'
import './App.css'

function App() {
  
  let [Count,SetCount]=useState(0);

  const increase = () => {
    Count=Count+1;
    SetCount(Count);
  }

  const decrease=()=>{
    Count=Count-1;
    SetCount(Count);
  }

  return (
    <>
    <h1> Count : {Count} </h1>
    <button onClick={increase} onKeyUp={increase}>+1</button>
    <button onClick={decrease} onKeyDown={decrease}>-1</button>
    </>
  );
};

export default App;


// Hooks are used because UI updation is controlled by react, so to resolve that react provides us with hooks to manipulate updation within UI.
// Same when done through vanilla javascript is a tedious task