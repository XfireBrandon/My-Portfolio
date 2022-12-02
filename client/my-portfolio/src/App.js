// import Header from "./components/HeaderComponets/Header";
import About from "./components/Sections/About";
import NavBar from "./components/NavBarComponents/NavBar"
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
// import ParticlesBg from 'particles-bg'

import { useRef } from "react";
import './CSS/styles.css'

function App() {

  const contact = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);


  const contactClick = () => {
    contact.current?.scrollIntoView({behavior: 'smooth'});
  };

  const projectClick = () => {
    projects.current?.scrollIntoView({behavior: 'smooth'});
  };

  const aboutClick = () => {
    about.current?.scrollIntoView({behavior: 'smooth'});
  };

  
  
  return (
    <>
    <div className="HeaderDiv">
      <h2 onClick={contactClick}>Contact</h2>
      <h2 onClick={projectClick}>Projects</h2>
      <h2 onClick={aboutClick}>About</h2>
      <div ref={about}>
      <About />
       </div>
      <div ref={projects}>
      <Projects />
      </div>
      <div ref={contact}>
      <Contact />
      </div>
    {/* <ParticlesBg color='#FFBF00' type="cobweb" bg={true} num={250}/> */}
    </div>
    </>
  );
}

export default App;
