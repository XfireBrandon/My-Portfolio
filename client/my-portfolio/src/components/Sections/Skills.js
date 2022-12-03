import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";


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
        'Git Workflow'
      ];



    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        1500 // every 3 seconds
      );
      return () => clearTimeout(intervalId)
    }, [])

    return (
        <div id="skills">
            <h1 className="section">Skills</h1>
            <div className="skillChange">
             <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
             </TextTransition>
            </div>
        </div>

    )
        
}

export default Skills