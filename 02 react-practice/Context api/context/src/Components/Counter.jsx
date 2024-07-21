import React ,{useContext} from "react";

import { Mycontext } from "../Context/Countcontext";


const Counter = () =>{

  const [Count] = useContext(Mycontext);

  return(
    <Mycontext>
    <div className="flex flex-row gap-4">
      <p>Count is: {Count}</p>
    <button className="bg-gray-200 border-solid border-black border-2 px-4 py-4">+1</button>
    <button className="bg-gray-200 border-solid  border-black border-2 px-4 py-4">-1</button>
    </div>
    </Mycontext>
  )
}

export default Counter