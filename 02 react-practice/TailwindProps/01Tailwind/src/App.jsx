import Card from './components/Card'
import './App.css'

function App() {
  return (
    <>
    <div class='flex flex-row justify-evenly items-center bg-teal-500 font-medium fixed top-0 left-0 w-screen h-12' >
      <a href='#'>Home</a>
      <a href='#'>Home</a>
      <a href='#'>Home</a>
      <a href='#'>Home</a>
      <a href='#'>Home</a>
    </div>

    <input type='checkbox' class='accent-orange-600 relative top-10' ></input>

     <Card username='vivek' btntext='hello everyone' />
     <Card username='sam' btntext='hello everyone again' />
    </>
  )
}

export default App
