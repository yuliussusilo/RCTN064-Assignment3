import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <h3>Assignment 3 RCTN064ONL027</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to="/home">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/experience">
                    <li>Experience</li>
                </Link>
                <Link style={navStyle} to="/skills">
                    <li>Skills</li>
                </Link>
                <Link style={navStyle} to="/interest">
                    <li>Interest</li>
                </Link>
                <Link style={navStyle} to="/awards">
                    <li>Awards</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav