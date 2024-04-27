import { useState } from 'react';
import './App.css';

function App() {

  const [state,setState]=useState('');

  function Clicker(){
    setState(state + 'X');
  }

  function Square({value}){
    return(
     <button className='square' onClick={Clicker}>{value}</button>
    );
  }

  return (
    <>
    <div id='container'>
      <div id='row-1'>
        <Square value={state} />
        <Square value={state} />
        <Square value={state} />
      </div>
      <div id='row-2'>
      <Square value={state} />
        <Square value={state} />
        <Square value={state} />
      </div>
      <div id='row-3'>
      <Square value={state} />
        <Square value={state} />
        <Square value={state} />
      </div>
    </div>
  
    </>
  )
}

export default App
