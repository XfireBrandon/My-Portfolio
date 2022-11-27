import Header from "./components/HeaderComponets/Header";
import About from "./components/Sections/About";
import NavBar from "./components/NavBarComponents/NavBar"
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

import { useRef } from "react";
import './CSS/styles.css'

function App() {

  // const About = useRef(null)
  // const Projects = useRef(null)
  // const Contact = useRef(null)

  // const scrollTo = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: 'smooth'
  //   })
  // }

  return (
    <>
    <div className="HeaderDiv">
      <Header />
      <NavBar />
    </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
