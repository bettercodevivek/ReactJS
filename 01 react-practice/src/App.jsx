import React from "react";
import Navbar from "./navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";
function App(){
  return (
   <div className="Mainpage-1">
    <Navbar />
    <div className="content-page-1">
     <h1 className="introduction-heading-1">Hello, I am 'Your-Name'.</h1>
     <h3 className="introdcution-heading-3">I am a FrontEnd Developer.</h3>
     <button id="hire-button">Hire Me!</button>
    </div>
    <About />
    <Skills />
    <Projects />
    <Footer />
   </div>
  );
}

export default App;

// In react, the function name should start with capital letter otherwise when exported and imported its values is never read.