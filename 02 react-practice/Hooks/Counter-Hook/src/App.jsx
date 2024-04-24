import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter=15;

  const Addvalue = () =>{
    
  }

  return (
    <>
      <h1>Learning Hooks</h1>
      <h2>Counter Value : {counter} </h2>
      <button
      onClick={Addvalue}>+</button>
      <br></br>
      <button>-</button>
    </>
  )
}

export default App
