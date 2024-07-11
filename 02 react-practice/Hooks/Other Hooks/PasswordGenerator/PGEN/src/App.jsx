import { useState } from 'react'


function App() {

  const[length,Setlength]=useState(8);
  const[numallowed,Setnumallowed]=useState(false);
  const[charallowed,Setcharallowed]=useState(false);

  return (
    <>
      <h1 className='text-center text-3xl'>Password Generator</h1>
    </>
  )
}

export default App
