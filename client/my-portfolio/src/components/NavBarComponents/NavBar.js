import { Link } from "react-scroll"

const NavBar = () => {
    return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul className="nav-items">
                    <li className="nav-item">About Me</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Contact Me</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar