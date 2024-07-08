import { useState , useEffect} from 'react'
import './App.css'

function App() {


    const[Count,SetCount]=useState(0);

    useEffect(()=>{
      document.title=`you clicked ${Count} times`
    },[Count]);
     
  
  return(
    <>
    <p>you clicked {Count} times</p>
       <h1>Hello Everyone! I am Learning React Hooks</h1>
       <button onClick={()=>{SetCount(Count+1)}}>{Count}</button>
    </>
  );
};

export default App;


// Hooks are used because UI updation is controlled by react, so to resolve that react provides us with hooks to manipulate updation within UI.
// Same when done through vanilla javascript is a tedious task
/*What are React Hooks?
React hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 to simplify state management and side effects in functional components.
Why Hooks?
Before hooks, functional components were stateless and couldn't manage state or use lifecycle methods. Hooks allow functional components to manage state, side effects, and more, making them more powerful and easier to maintain.*/