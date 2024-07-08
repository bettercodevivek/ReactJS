import { useState , useEffect} from 'react'
import './App.css'

function App() {


    // const[Count,SetCount]=useState(0);

    // useEffect(()=>{
    //   document.title=`you clicked ${Count} times`
    // },[Count]);
     
    const[Count,SetCount]=useState(0);
    const[Message,SetMessage]=useState('');

    useEffect(()=>{
      if(Count===0){
        SetMessage('Start Counting!!!');
      }
      else if(Count%5===0){
        SetMessage('Damn that is fast!!!');
      }
      else{
        SetMessage('Keep Going !!!')
      }

    const interval = setInterval(()=>{
      SetCount(prevCount => prevCount+1);
    },1000);

    return ()=> clearInterval(interval);

    },[Count]);

  
  return(
    <>
    <p>Count is : {Count}</p>
    <p>Message is: {Message}</p>
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