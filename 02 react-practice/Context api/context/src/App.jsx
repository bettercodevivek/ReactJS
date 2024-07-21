import Counter from "./Components/Counter";
import { Mycontext } from "./Context/Countcontext";
import { useContext } from "react";
function App() {

  const Counterstate=useContext(Mycontext);

  console.log("context has:",Counterstate);

  return (
    <div>
    <h1 className="text-center text-4xl">
      CONTEXT API
   </h1>
   <h2>
    Count is : {Counterstate.Count}
   </h2>
   <Counter/>
   <Counter/>
   <Counter/>
   <Counter/>
   </div>
  )
}

export default App
