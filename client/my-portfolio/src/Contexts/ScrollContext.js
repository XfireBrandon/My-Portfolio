import { useRef, createContext } from "react";


const ScrollContext = createContext

export const ScrollProvider = ({childen}) => {
    const About = useRef(null)
    const Projects = useRef(null)
    const Contact = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: 'smooth'
        })
      }

      return <ScrollContext.Provider value={{
          About,
          Projects,
          Contact,
          scrollToSection
      }}>
          {childen}
      </ScrollContext.Provider>

}

export default ScrollContext;