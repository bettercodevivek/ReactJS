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
      <div className="Color-palette-container">
        <div id="color-1" onClick={colorPalette1}></div>
        <div id="color-2" onClick={colorPalette2}></div>
        <div id="color-3" onClick={colorPalette3}></div>
        <div id="color-4" onClick={colorPalette4}></div>
      </div>
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

  function colorPalette1(){
    document.getElementById('Mainpage-1').style.backgroundColor='#ffe3b0';
    document.getElementById('About').style.backgroundColor='#fcff82';
    document.getElementById('Skills').style.backgroundColor='#ffe3b0';
    document.getElementById('Projects').style.backgroundColor='#fcff82';
    document.getElementById('Footer').style.backgroundColor='#ffe3b0';
  }

  function colorPalette2(){
    document.getElementById('Mainpage-1').style.backgroundColor='#ffb4ac';
    document.getElementById('About').style.backgroundColor='#a3de83';
    document.getElementById('Skills').style.backgroundColor='#93a7d1';
    document.getElementById('Projects').style.backgroundColor='#c7b198';
    document.getElementById('Footer').style.backgroundColor='#132743';
  }

  function colorPalette3(){
    document.getElementById('Mainpage-1').style.backgroundColor='#7dd87d';
    document.getElementById('About').style.backgroundColor='#8ed2c9';
    document.getElementById('Skills').style.backgroundColor='#fffe9a';
    document.getElementById('Projects').style.backgroundColor='#dbd8e3';
    document.getElementById('Footer').style.backgroundColor='#680747';
  }

  function colorPalette4(){
    document.getElementById('Mainpage-1').style.backgroundColor='#79c2d0';
    document.getElementById('About').style.backgroundColor='#fdb44b';
    document.getElementById('Skills').style.backgroundColor='#ff8585';
    document.getElementById('Projects').style.backgroundColor='#a696c8';
    document.getElementById('Footer').style.backgroundColor='#121435';
  }
}


export default App;
