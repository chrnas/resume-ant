import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">{title}</Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ProgramminSkills">Programmingskills</Link></li>
                <li><Link to="/Experiences">Experiences</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;