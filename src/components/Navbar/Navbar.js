import { Link } from "react-router-dom";

export default function Navbar() {
    return <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contacts'>Contacts</Link>
        <button> Resume </button>
    </div>
}