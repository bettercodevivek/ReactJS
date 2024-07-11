import { useCallback, useEffect, useState } from 'react'


function App() {

  const[length,Setlength]=useState(8);
  const[numallowed,Setnumallowed]=useState(false);
  const[charallowed,Setcharallowed]=useState(false);
  const[password,Setpassword]=useState("");

  const passwordgen = useCallback(()=>{

     let pass=' ';
     let string= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

     if(numallowed){
      string+='1234567890';
     }

      if(charallowed){
      string+='@#$%^&*';
     }

     for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*string.length +1);
      pass+=string.charAt(char);
     }

     Setpassword(pass);

  },[length,numallowed,charallowed,Setpassword]);

   useEffect(()=>{
      passwordgen();
   },[length,numallowed,charallowed,Setpassword]);
  return (
    <>
      <h1 className='text-center text-3xl'>Password Generator</h1>
      <div className=' relative max-w-md h-auto bg-green-500 rounded-xl shadow-lg'>
        <div>
          <input className='px-4 py-4 relative left-8 ' placeholder='enter your password' value={password} type='text'></input>
          <button className='bg-black relative left-8 text-white px-4 py-4'>copy</button>
        </div>
        <div className=' '>
          <input onChange={(e)=>{Setlength(e.target.value)}} type='range' min={8} max={50} value={length} className='cursor-pointer'/>
          <label>length:{length}</label>
        </div>
        <div className='flex flex-row items-center gap-x-1'>
          <input onChange={()=>{Setnumallowed((prev)=>!prev)}} id='numinput' defaultChecked={numallowed} type='checkbox'/>
          <label htmlFor='charinput'>Numbers</label>
          <input onChange={()=>{Setcharallowed((prev)=>!prev)}} id='charinput' defaultChecked={charallowed} type='checkbox'/>
          <label htmlFor='charinput'>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
