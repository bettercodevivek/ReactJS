import { useCallback, useState } from 'react'


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
      pass=string.charAt(char);
     }

     Setpassword(pass);

  },[length,numallowed,charallowed,Setpassword])

  return (
    <>
      <h1 className='text-center text-3xl'>Password Generator</h1>
    </>
  )
}

export default App
