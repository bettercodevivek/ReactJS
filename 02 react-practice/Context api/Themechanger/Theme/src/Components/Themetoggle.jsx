import React from "react";
import { useTheme } from "../Context/Themecontext";


const Toggler = ()=>{

  const {Theme,ThemeToggler}=useTheme();

  return(
     <button onClick={ThemeToggler} className="bg-blue-500 text-white px-4 py-4 rounded-lg">
      Change to:{Theme === 'light' ? 'dark' : 'light'}
     </button>
  );
}

export default Toggler;