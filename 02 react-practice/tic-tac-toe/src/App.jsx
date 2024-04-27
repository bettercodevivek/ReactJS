import { useState } from 'react';
import './App.css';

function Square({value}){
  function handleClick(){
    console.log('clicked',{value});
  }
  return(
   <button className='square' onClick={handleClick}>{value}</button>
  );
}

function App() {

  return (
    <>
    <div id='container'>
      <div id='row-1'>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div id='row-2'>
      <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div id='row-3'>
      <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </div>
  
    </>
  )
}

export default App
