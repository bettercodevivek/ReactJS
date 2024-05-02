import React from "react";
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

function Projects({projectName1,projectName2,projectName3,ProjectDescription1,
  ProjectDescription2,ProjectDescription3,Projectimageurl1,Projectimageurl2,Projectimageurl3,
  Projectgithuburl1, Projectgithuburl2, Projectgithuburl3,ProjectLiveUrl1,ProjectLiveUrl2,ProjectLiveUrl3}){
  return (
   <div id='Projects' className='projects-mainpage'>
      <h1 className='Project-page-title'>PROJECTS</h1>
      <div id="line3"></div>
      <div className='project-container-1'>
          <div className='project-description-container'>
              <h1 className='project-title'>{projectName1}</h1>
              <p id='description-1' className='project-description'>
                       {ProjectDescription1}
              </p>
              <a href='#'><button className='project-github-button'><img className='project-button-github-logo' src={Projectgithuburl1}></img>
              </button></a>
            <a href='#'><button className='project-website-button'><img className='project-button-website-logo' src={ProjectLiveUrl1}></img>
              </button></a> 
          </div>
          <div className='project-preview'>
              <img className='project-screenshot' src={Projectimageurl1}>
              </img>
          </div>
      </div>

      <div className='project-container-2'>
          <div className='project-description-container'>
              <h1 className='project-title'>{projectName2}</h1>
              <p id='description-2' className='project-description'>
              {ProjectDescription2}
              </p>
              <a href='#'><button className='project-github-button'><img className='project-button-github-logo' src={Projectgithuburl2}></img>
              </button></a>
            <a href='#'><button className='project-website-button'><img className='project-button-website-logo' src={ProjectLiveUrl2}></img>
              </button></a> 
          </div>
          <div className='project-preview'>
              <img className='project-screenshot' src='src\assets\project-2-demo-image.jpg'></img>
          </div>
      </div>

      <div className='project-container-3'>
          <div className='project-description-container'>
              <h1 className='project-title'>{projectName3}</h1>
              <p id='description-3' className='project-description'>
             {ProjectDescription3}
              </p>
              <a href='#'><button className='project-github-button'><img className='project-button-github-logo' src={Projectgithuburl3}></img>
              </button></a>
            <a href='#'><button className='project-website-button'><img className='project-button-website-logo' src={ProjectLiveUrl3}></img>
              </button></a>  
          </div>
          <div className='project-preview'>
              <img className='project-screenshot' src='src\assets\project-3-demo-image.jpg'></img>
          </div>
      </div>
     <script>
            
     </script>
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
    <Projects projectName1='project-1' projectName2='project-2' projectName3='project-3'
    ProjectDescription1='React Recipe Finder" is a user-friendly web app powered by React,
     offering a vast recipe database for culinary enthusiasts. It enables easy search, 
     filtering, and sorting, with detailed recipe pages including nutritional information.
      Users can save favorites, enjoy interactive cooking features, and access it seamlessly across devices.'
      ProjectDescription2='
      "React Recipe Finder" is a user-friendly web app powered by React, offering a vast recipe database for culinary enthusiasts. It enables easy search, filtering, and sorting, with detailed recipe pages including nutritional information. Users can save favorites, enjoy interactive cooking features, and access it seamlessly across devices.

'
ProjectDescription3='"React Recipe Finder" is a user-friendly web app powered by React, offering a vast recipe database for culinary enthusiasts. It enables easy search, filtering, and sorting, with detailed recipe pages including nutritional information. Users can save favorites, enjoy interactive cooking features, and access it seamlessly across devices.
'
Projectimageurl1='https://i.postimg.cc/rwNtMd2F/lautaro-andreani-xk-Baqlcqeb4-unsplash.jpg'

Projectgithuburl2=''
  






    />
    <Footer />
    </div>
  );
}

export default App;
