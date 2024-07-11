import React, { useCallback, useEffect, useRef, useState } from "react";

function App(){


const [length,setlength]=useState(8);
const [Password,setPassword]=useState("");
const[numallowed,setnumallowed]=useState(false);
const[charallowed,setcharallowed]=useState(false);

const Passref=useRef(null);

const copybutton = useCallback(()=>{
    Passref.current?.select();
    window.navigator.clipboard.writeText(Password);
})

const PasswordGenerator = useCallback(()=>{
   
console.log("Function working properly");

  let Pass='';
  let string='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if(numallowed){
    string+='1234567890';
  }

  if(charallowed){
    string+='!@#$%^&*';
  }

  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*string.length + 1);
    Pass+=string.charAt(char);
  }

   setPassword(Pass);

},[length,numallowed,charallowed,setPassword]);

useEffect(()=>{
  PasswordGenerator();
},[length,numallowed,charallowed,setPassword]);

  return(
    <>
    <h1 className="text-center text-5xl">Password Generator</h1>
    <div className="bg-gray-500 flex flex-row items-center justify-center relative top-48 max-w-sm min-h-lg">
      <div>
        <input ref={Passref} type="text" readOnly value={Password}/>
        <button onClick={copybutton}>Copy</button>
      </div>
      <div>
        <input value={length} type='range' min={8} max={30} onChange={(e)=>{setlength(e.target.value)}}/>
        <label>length:{length}</label>
        <input id="numid" type="checkbox" onChange={()=>{setnumallowed((prev)=>!prev)}}/>
        <label htmlFor="numid">Number</label>
        <input id="charid" type="checkbox" onChange={()=>{setcharallowed((prev)=>!prev)}}/>
        <label htmlFor="charid">Character</label>
      </div>
    </div>
    </>
  );
}


export default App;