import React, { useState,useRef } from 'react';

function Stopwatch(){

const [Seconds,SetSeconds]=useState(0);
const intervalRef=useRef(null);

const Start =()=>{
  if(!intervalRef.current){
    intervalRef.current=setInterval(()=>{
      SetSeconds(prevSeconds=>prevSeconds+1);
    },1000);
  }
};

const Stop = () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
};

 return(
<>
<h1>Seconds:{Seconds}</h1>
<button onClick={Start}>Start</button>
<button onClick={Stop}>Stop</button>
</>
 );
}

export default Stopwatch;