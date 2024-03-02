import React from "react";
import Navbar from "./navbar";
function App(){
  return (
   <div className="main">
    <Navbar />
    <ol className="list1">
      <li className="item">delhi</li>
      <li className="item">pune</li>
      <li className="item">bangalore</li>
      <li className="item">mumbai</li>
    </ol>
   </div>
  );
}

export default App;

// In react, the function name should start with capital letter otherwise when exported and imported its values is never read.