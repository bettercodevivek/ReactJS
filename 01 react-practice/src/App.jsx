import React from "react";
import Navbar from "./navbar";
function App(){
  return (
   <div className="main">
    <Navbar />
   </div>
  );
}

export default App;

// In react, the function name should start with capital letter otherwise when exported and imported its values is never read.