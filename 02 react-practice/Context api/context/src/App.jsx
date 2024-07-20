import UserContextProvider from "./Context/UserContextProvider"


function App() {

  return (
    <UserContextProvider>
    <h1 className="text-3xl text-center">Context API !!!!</h1>
    </UserContextProvider>
  )
}

export default App
