import './App.css'

function App() {
  const colorchanger=(id)=>{
        if(id=='red'){
           document.getElementById('mainpage').style.backgroundColor='red';
        }
  }

  return (
    <div className='mainpage'>
     
     <div id='footer' class='flex flex-row justify-evenly items-center bg-zinc-500 p-4 rounded-3xl shadow-md'>
      <button id='red' class='bg-red-700 p-4 rounded-xl' onClick={colorchanger('red')}>red</button>
      <button id='blue' class='bg-blue-600 p-4 rounded-xl'>blue</button>
      <button id='green' class='bg-green-600 p-4 rounded-xl'>green</button>
      <button id='violet' class='bg-violet-700 p-4 rounded-xl'>violet</button>
      <button id='pink' class='bg-pink-700 p-4 rounded-xl'>pink</button>
      <button id='black' class='bg-black text-zinc-50 p-4 rounded-xl'>black</button>
      <button id='yellow' class='bg-yellow-400 p-4 rounded-xl'>yellow</button>
      <button id='teal' class='bg-teal-600 p-4 rounded-xl'>teal</button>
     </div>

    </div>
    
  )
}

export default App
