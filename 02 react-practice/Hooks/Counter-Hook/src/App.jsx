import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(15);

  //let counter=15;

  const Addvalue = () =>{
    counter=counter+1;
     setcounter(counter);
  }

  return (
    <>
      <h1>Learning Hooks</h1>
      <h2>Counter Value : {counter} </h2>
      <button
      onClick={Addvalue}>+ {counter}</button>
      <br></br>
      <button>-</button>
    </>
  )
}

export default App


// Hooks are used because UI updation is controlled by react, so to resolve that react provides us with hooks to manipulate updation within UI.
// Same when done through vanilla javascript is a tedious task