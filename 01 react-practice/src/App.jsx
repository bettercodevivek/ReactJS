import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";

const footer1 = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/repos/bettercodevivek/ReactJS')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);
}

function App(){
  return (
   <div id="Mainpage-1" className="Mainpage-1">
    <Navbar />
    <div className="content-page-1">
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
    <a href="https://github.com/bettercodevivek/ReactJS">
          <div>Designed &amp; Built by Vivek Singh</div>

          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
    </div>
    </div>
  );
}

export default App;
