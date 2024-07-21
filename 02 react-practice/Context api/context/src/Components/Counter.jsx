import React,{useContext} from "react";
import { Mycontext } from "../Context/Countcontext";

const Counter = () =>{

const Countercontext=useContext(Mycontext);


  return(
      <div className="flex flex-row gap-4">
    <button onClick={()=>Countercontext.SetCount(Countercontext.Count+1)}  className="bg-gray-200 border-solid border-black border-2 px-4 py-4">+1</button>
    <button onClick={()=>Countercontext.SetCount(Countercontext.Count-1)} className="bg-gray-200 border-solid  border-black border-2 px-4 py-4">-1</button>
    </div>

  )
}

export default Counter