import React from "react";
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

function About({majorName,languages}){
  return(
 
   <div id='About' className='About-Mainpage'>
    <h1 className='About-heading'>ABOUT ME</h1>
    <div id="line1"></div>
    <div className='about-paragraph-container'>
    <p className="about-para">
    Hey! <span>&#128075;</span> I'm a {majorName} undergrad on a mission to turn caffeine into code.
     From hacking away at late-night coding sessions to unraveling the mysteries of algorithms, 
     I thrive on the thrill of problem-solving. Fluent in the languages of {languages}, 
     I've been on a journey of turning lines of code into functional and innovative solutions. 
     My portfolio is a blend of passion projects, where I've dived into the worlds of web development, 
     software design, and beyond. Whether it's building a sleek website or crafting algorithms that make you go "aha!",
      I love the creative dance between logic and creativity. Ready to bring my tech mojo to the table,
      I'm excited about the next adventure in the ever-evolving world of code. Let's create some digital magic together!
    </p>
    </div>
   </div>


  );
}

function Skills({urlforskilllogo,altname}){
  return(
  <div id='Skills' className='Skills-mainpage'>
      <h1 className='Skills-heading'>MY SKILLS</h1>
      <div id="line2"></div>
      <div className='skills-container'>
          <div className='skill-item'>
              <img className="icon" src={urlforskilllogo} alt={altname}></img>
              </div>
              <div className='skill-item'>
              <img className="icon" src={urlforskilllogo} alt={altname}></img>
              </div>
              <div className='skill-item'>
              <img className="icon" src={urlforskilllogo} alt={altname}></img>
              </div>
              <div className='skill-item'>
              <img className="icon" src={urlforskilllogo} alt={altname}></img>
              </div>
              <div className='skill-item'>
              <img className="icon" src={urlforskilllogo} alt={altname}></img>
              </div>
              <div className='skill-item'>
              <img className="icon" src={urlforskilllogo} alt={altname}></img>
              </div>
              <div className='skill-item'>
              <img className="icon" src={urlforskilllogo} alt={altname}></img>
              </div>
              <div className='skill-item'>
              <img className="icon" src={urlforskilllogo} alt={altname}></img>
              </div>
              <div className='skill-item'>
              <img className="icon" src={urlforskilllogo} alt={altname}></img>
              </div>
             
      </div>
  </div>
  );
}

function App(){
  return (
   <div id="Mainpage-1" className="Mainpage-1">
    <Navbar name='Walter White' />
    <Homepage name='Walter White' role='FrontEnd Developer' />
    <About majorName='computer science' languages='python,java and C++' />
    <Skills />
    <Projects />
    <Footer />
    </div>
  );
}

export default App;
