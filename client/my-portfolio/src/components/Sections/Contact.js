import { MdEmail } from "react-icons/md"

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="sectionContact">Contact</h1>
            <div className="contactDiv">
                <p>COntact me on some JOBS HOE</p>
                <div>
                <a className='emailLink'href='mailto:bamabam95@gmail.com'><MdEmail /></a>
                </div>
            </div>

        </div>
    )
}

export default Contact