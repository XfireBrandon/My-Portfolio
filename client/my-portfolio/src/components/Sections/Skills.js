import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import About from "./About";


const Skills = () => {

    const TEXTS = [
        'React.js',
        'Node.js',
        'Express.js',
        'PostgresSQL',
        'RESTful API',
        'GitHub',
        'MySQL',
        'HTML5',
        'CSS',
        'JavaScript',
        'Agile Methodologies',
        'Postman',
        'SQL',
        'Document Object Model',
        'jQuery',
        'Front-end Development',
        'Backend Development',
        'Problem Solving',
        'Critical Thinking',
        'Teamwork',
        'Collaboration',
        'Git Workflow',
        'npm'
      ];



    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        1500 
      );
      return () => clearTimeout(intervalId)
    }, [])

    return (
        <div id="skills">
            {/* <h1 className="section">Skills</h1> */}
            <div className="skillChange">
             <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
             </TextTransition>
            </div>
            <About />
        </div>

    )
        
}

export default Skills