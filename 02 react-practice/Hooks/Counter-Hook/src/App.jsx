import { useState } from 'react'
import './App.css'

function App() {

  let [Count,setCount]=useState(0);
  function Adder(){
      setCount(Count+1);
  }
  function Subtracter(){
    if(Count!=0){
      setCount(Count-1);
    }
    else{
       setCount(Count+1);
    }
  }

  const [Color,setColor]=useState('white');

  function btnbgchnger(){
    setColor('green');
  }
  return(
    <>
    <h1>hello everyone!!</h1>
    <h2>I m learning React Hooks</h2>
    <h1>Count:{Count}</h1>
    <button onClick={Adder}>+1</button>
    <button onClick={Subtracter}>-1</button>
  <button style={{backgroundColor:Color}} onClick={btnbgchnger}>color</button>
    </>
  );
};

export default App;


// Hooks are used because UI updation is controlled by react, so to resolve that react provides us with hooks to manipulate updation within UI.
// Same when done through vanilla javascript is a tedious task