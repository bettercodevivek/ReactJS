import React from "react";
import Navbar from "./navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";
function App(){
  return (
   <div id="Mainpage-1" className="Mainpage-1">
    <Navbar />
    <div className="content-page-1">
      <button className="night-mode-button" id="night-mode-button"><img className="night-mode" src="src/assets/night-with-stars-svgrepo-com.svg"></img></button>
      <div className="introduction-container">
     <h1 className="introduction-heading-1">Hello, I am 'Your-Name'.</h1>
     <h3 className="introduction-heading-3">I am a FrontEnd Developer.</h3>
     <h5 className="introduction-heading-5">Passionate software artisan skilled in FrontEnd development, fluent in diverse coding languages.<br></br> A tenacious problem solver, committed to crafting elegant and scalable solutions for a seamless user experience.</h5>
     <button id="hire-button">Hire Me!</button>
     </div>
    </div>
    <About />
    <Skills />
    <Projects />
    <Footer />
    <div className="credits-container">
    Powered by <span className="owner-name">BlinkFolio</span> , your go-to platform for hassle-free portfolio website creation.<br></br>
     Unlock your creative potential and showcase your work effortlessly.<br></br> © 2024. All rights reserved.
    </div>
   </div>
  );

  // function nightMode(){
  //   document.body.style.backgroundColor='#152744';
  //   document.body.style.color='#FFF';
  // }

}

export default App;
