import { useRef ,useState} from "react";
import React from "react";

const Stopwatch=()=>{
  
  const[Seconds,SetSeconds]=useState(0);

  const Magic=useRef(null);

  const Start=()=>{
    Magic.current=setInterval(()=>{
      SetSeconds(prevSeconds=>prevSeconds+1);
    },1000);
  }
    

  const Stop=()=>{
    if(Magic.current){
      clearInterval(Magic.current);
      Magic.current=null;
    }
  }

  return(
    <>
    <div>
      <h1>{Seconds}</h1>
      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
    </div>
    </>
  );
}

export default Stopwatch;