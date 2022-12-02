import { Link } from "react-scroll"

const NavBar = () => {
    return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul className="nav-items">
                    <h1>My Portfolio</h1>
                    <li className="nav-item">About Me</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Contact Me</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar