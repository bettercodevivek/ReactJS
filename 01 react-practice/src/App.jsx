import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";



function Navbar({name}){
  return (
      <div className="navbar">
          <button className='name-logo'>{name}</button>
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Skills">Skills</a>
          <a href="#Footer">Contact Me</a>
      </div>
  );
}

function Homepage({name,role}){
  return (
    <div className="content-page-1">
    <div className="introduction-container">
   <h1 className="introduction-heading-1">Hello, I am {name}.</h1>
   <h3 className="introduction-heading-3">I am a {role}.</h3>
   <h5 className="introduction-heading-5">Passionate software artisan skilled and fluent in diverse coding languages.<br></br> A tenacious problem solver, committed to crafting elegant and scalable solutions for a seamless user experience.</h5>
   <button id="hire-button">Hire Me!</button>
   </div>
  </div>
  );
}



function App(){
  return (
   <div id="Mainpage-1" className="Mainpage-1">
    <Navbar name='Walter White' />
    <Homepage name='Walter White' role='FrontEnd Developer' />
    <About />
    <Skills />
    <Projects />
    <Footer />
    </div>
  );
}

export default App;
