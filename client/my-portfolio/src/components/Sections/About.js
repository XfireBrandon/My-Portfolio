// import Scroll from 'react-scroll'
import MyPhoto from '../../Img/MyPhoto.jpeg'
import MovingText from 'react-moving-text'

const About = () => {
    return (
        <div id='about'>
            {/* <h1 className="section">About Me</h1> */}
            <div className="about-section">
                <div className='bio'>
                    <h2 className='hi'>Hi, my name is</h2>
                    <MovingText
                    className='Name'
                        type="bounce"
                        duration="1300ms"
                        delay=".5s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        Brandon Martin
                      </MovingText>
                    {/* <h1 className='myName'>Brandon Martin</h1> */}
                    <p  >I'm a Full Stack Software Engineer, I currently use the PERN stack (PostgreSQL, Express.js, REACT.js, and Node.js).
                     I thoroughly enjoy using REACT and front end development in general. Check out the other sections to learn more about me and how I like to design!</p>
                </div>
                <img src={MyPhoto} alt='MyPhoto' id='pic' />
            </div>
        </div>
    )
}

export default About