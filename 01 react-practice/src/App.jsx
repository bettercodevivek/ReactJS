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

function Projects(){
  return (
   <div id='Projects' className='projects-mainpage'>
      <h1 className='Project-page-title'>PROJECTS</h1>
      <div id="line3"></div>
      <div className='project-container-1'>
          <div className='project-description-container'>
              <h1 className='project-title'>Project-1</h1>
              <p id='description-1' className='project-description'>
              Introducing WeatherWise, a cutting-edge weather app revolutionizing forecasts with React Native and OpenWeatherMap API. 
              Enjoy hyper-local precision, interactive maps, and real-time alerts for seamless preparedness.
               React Native's versatility ensures an intuitive interface, while OpenWeatherMap API delivers accurate,
                up-to-the-minute data. Plan your day effortlessly with Sunrise and Sunset Planner, extended forecasts,
                 and global weather insights. WeatherWise prioritizes user experience,
                  offering personalized themes for a visually appealing touch. Don't just check the weather;
                   experience it with the power of React Native and OpenWeatherMap API. Download WeatherWise now for a smarter,
                    more informed approach to weather tracking. 🌦️📱 #WeatherWise #ReactNative #OpenWeatherMapAPI
              </p>
              <a href='#'><button className='project-github-button'><img className='project-button-github-logo' src='src/assets/github-142-svgrepo-com.svg'></img>
              </button></a>
            <a href='#'><button className='project-website-button'><img className='project-button-website-logo' src='src/assets/website-webpage-url-domain-svgrepo-com.svg'></img>
              </button></a> 
          </div>
          <div className='project-preview'>
              <img className='project-screenshot' src='src\assets\project-1-demo-image.jpg'>
              </img>
          </div>
      </div>

      <div className='project-container-2'>
          <div className='project-description-container'>
              <h1 className='project-title'>Project-2</h1>
              <p id='description-2' className='project-description'>
              Introducing WeatherWise, a cutting-edge weather app revolutionizing forecasts with React Native and OpenWeatherMap API. 
              Enjoy hyper-local precision, interactive maps, and real-time alerts for seamless preparedness.
               React Native's versatility ensures an intuitive interface, while OpenWeatherMap API delivers accurate,
                up-to-the-minute data. Plan your day effortlessly with Sunrise and Sunset Planner, extended forecasts,
                 and global weather insights. WeatherWise prioritizes user experience,
                  offering personalized themes for a visually appealing touch. Don't just check the weather;
                   experience it with the power of React Native and OpenWeatherMap API. Download WeatherWise now for a smarter,
                    more informed approach to weather tracking. 🌦️📱 #WeatherWise #ReactNative #OpenWeatherMapAPI
              </p>
              <a href='#'><button className='project-github-button'><img className='project-button-github-logo' src='src/assets/github-142-svgrepo-com.svg'></img>
              </button></a>
            <a href='#'><button className='project-website-button'><img className='project-button-website-logo' src='src/assets/website-webpage-url-domain-svgrepo-com.svg'></img>
              </button></a> 
          </div>
          <div className='project-preview'>
              <img className='project-screenshot' src='src\assets\project-2-demo-image.jpg'></img>
          </div>
      </div>

      <div className='project-container-3'>
          <div className='project-description-container'>
              <h1 className='project-title'>Project-3</h1>
              <p id='description-3' className='project-description'>
              Introducing WeatherWise, a cutting-edge weather app revolutionizing forecasts with React Native and OpenWeatherMap API. 
              Enjoy hyper-local precision, interactive maps, and real-time alerts for seamless preparedness.
               React Native's versatility ensures an intuitive interface, while OpenWeatherMap API delivers accurate,
                up-to-the-minute data. Plan your day effortlessly with Sunrise and Sunset Planner, extended forecasts,
                 and global weather insights. WeatherWise prioritizes user experience,
                  offering personalized themes for a visually appealing touch. Don't just check the weather;
                   experience it with the power of React Native and OpenWeatherMap API. Download WeatherWise now for a smarter,
                    more informed approach to weather tracking. 🌦️📱 #WeatherWise #ReactNative #OpenWeatherMapAPI
              </p>
              <a href='#'><button className='project-github-button'><img className='project-button-github-logo' src='src/assets/github-142-svgrepo-com.svg'></img>
              </button></a>
            <a href='#'><button className='project-website-button'><img className='project-button-website-logo' src='src/assets/website-webpage-url-domain-svgrepo-com.svg'></img>
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
    <Projects />
    <Footer />
    </div>
  );
}

export default App;
