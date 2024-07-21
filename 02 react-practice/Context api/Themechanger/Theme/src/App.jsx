import React from "react";
import { useTheme } from "./Context/Themecontext";
import Toggler from "./Components/Themetoggle";

const App = () =>{

  const {Theme}=useTheme();

  return(
    
    <div className={Theme === 'light' ? 'bg-white text-black' : 'bg-zinc-600 text-white'} style={{height:'100vh'}}>
     <h1 className="text-center">Learning context api</h1>
     <Toggler/>
    </div>
  );

}

export default App;