import { useState } from 'react';
import './App.css';

function App() {

  function Square() {
    const [value, setValue] = useState(null);
   

    function handleClick() {

      setValue('x');
    }
  
    return (
      <button
        className="square"
        onClick={handleClick}
      >
        {value}
      </button>
    );
  }

  return (
    <>
    <div id='container'>
      <div id='row-1'>
        <Square  />
        <Square  />
        <Square />
      </div>
      <div id='row-2'>
       <Square  />
        <Square  />
        <Square />
      </div>
      <div id='row-3'>
      <Square  />
        <Square  />
        <Square />
      </div>
    </div>
  
    </>
  )
}

export default App
