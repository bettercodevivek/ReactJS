import UserContextProvider from "./Context/UserContextProvider"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
function App() {

  return (
    <UserContextProvider>
    <h1 className="text-3xl text-center">Context API !!!!</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
