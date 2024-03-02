import React from "react";
import Navbar from "./navbar";
import About from "./About";
import Skills from "./Skills";
import "./App.css";
function App(){
  return (
   <div className="main">
    <Navbar />
    <div className="content-page-1">
     <h1>Hello, I am 'Your-Name'.</h1>
     <h3>I am a FrontEnd Developer.</h3>
     <button id="hire-button">Hire Me!</button>
    </div>
    <About />
    <Skills />
   </div>
  );
}

export default App;

// In react, the function name should start with capital letter otherwise when exported and imported its values is never read.