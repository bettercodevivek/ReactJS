import './App.css'
import { useState } from 'react'
function App() {

let [color,setColor]=useState('white');

  return (
    <div className='mainpage' style={{backgroundColor:color}} class='h-screen w-screen'>
     
     <div id='footer' class='flex flex-row justify-evenly items-center bg-zinc-500 p-4 rounded-3xl shadow-md'>
      <button id='red' class='bg-red-700 p-4 rounded-xl' onClick={()=>setColor('red')}>red</button>
      <button id='blue' class='bg-blue-600 p-4 rounded-xl'  onClick={()=>setColor('blue')}>blue</button>
      <button id='green' class='bg-green-600 p-4 rounded-xl'  onClick={()=>setColor('green')}>green</button>
      <button id='violet' class='bg-violet-700 p-4 rounded-xl'  onClick={()=>setColor('violet')}>violet</button>
      <button id='pink' class='bg-pink-700 p-4 rounded-xl'  onClick={()=>setColor('pink')}>pink</button>
      <button id='black' class='bg-black text-zinc-50 p-4 rounded-xl'  onClick={()=>setColor('black')}>black</button>
      <button id='yellow' class='bg-yellow-400 p-4 rounded-xl'  onClick={()=>setColor('yellow')}>yellow</button>
      <button id='teal' class='bg-teal-600 p-4 rounded-xl'  onClick={()=>setColor('teal')}>teal</button>
     </div>

    </div>
    
  )
}

export default App
