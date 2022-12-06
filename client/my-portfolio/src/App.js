import Home from "./components/Sections/Home";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

import { useEffect, useRef, useState } from "react";
import './CSS/styles.css'
import Skills from "./components/Sections/Skills";
import logo from "./Img/IMG_9057.jpeg"
import logo2 from "./Img/logo-transparent-png.png"





function App() {

  const contact = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const home = useRef(null)


  const contactClick = () => {
    contact.current?.scrollIntoView({behavior: 'smooth'});
  };

  const projectClick = () => {
    projects.current?.scrollIntoView({behavior: 'smooth'});
  };

  const aboutClick = () => {
    about.current?.scrollIntoView({behavior: 'smooth'});
  };

  const skillClick = () => {
    skills.current?.scrollIntoView({behavior: 'smooth'});
  };



  
  
  return (
    <>
    <div id="HeaderDiv" ref={home}>
      <img onClick={aboutClick} src={logo} id='logo' />
      <h2 onClick={aboutClick} className="headerClicks">Home</h2>
      <h2 onClick={skillClick} className="headerClicks">Skills</h2>
      <h2 onClick={projectClick} className="headerClicks">Projects</h2>
      <h2 onClick={contactClick} className="headerClicks">Contact</h2>
    </div>
      <div ref={about}>
        <Home />
      </div>
      <div ref={skills}>
        <Skills />

      </div>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </>
  );
}

export default App;
