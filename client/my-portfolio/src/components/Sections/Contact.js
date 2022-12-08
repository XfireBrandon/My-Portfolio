// import { MdEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"
import { SiGmail } from "react-icons/si"


const Contact = () => {
    return (
        <div id="contact">
            <h1 className="sectionContact">CONTACT ME</h1>
            <div className="contactDiv">
                <div className="pDiv">
                <p>If you liked what you see here, send me an email or contact me on LinkedIn, I'm active on both 
                and would love to talk more! Anyways, thanks for checking out my Portfolio!</p>
                </div>
                <div className="contactLinks">
                <a className="Mail" href='mailto:bamabam95@gmail.com'><SiGmail /></a>
                <a className="Mail" href='https://www.linkedin.com/in/brandon-martin-336320138/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
                </div>
            </div>

        </div>
    )
}

export default Contact