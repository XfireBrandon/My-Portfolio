import Header from "./components/HeaderComponets/Header";
import About from "./components/Sections/About";
import NavBar from "./components/NavBarComponents/NavBar"
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import ParticlesBg from 'particles-bg'

import { useRef } from "react";
import './CSS/styles.css'

function App() {


  return (
    <>
    <div className="HeaderDiv">
      <Header />
      <NavBar />
      <About />
      <Projects />
      <Contact />
    <ParticlesBg color='#FFBF00' type="cobweb" bg={true} num={250}/>
    </div>
    </>
  );
}

export default App;
