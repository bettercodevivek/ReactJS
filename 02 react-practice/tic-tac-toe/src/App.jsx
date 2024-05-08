import { useState } from 'react';
import './App.css';

function App() {

  function Square() {
    const [value, setValue] = useState(null);
   
     // This is a new updation to the code 

    return (
      <button
        className="square"
        onClick={handleClick}
      >
        {value}
      </button>
    );
  }
 
  // Another new addition to the code

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
