import React from 'react';
import './Nav.css';
import logooo from './assets/logooo.png';
import { Link } from 'react-router';


const Nav = () => {
    return (
        <div>
            <nav className="navbar">
                <div className='logo'>
                    <img src={logooo} alt="Logo" />
                </div>
                <ul className="navbar-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#booking"> <Link to="/booking">booking</Link></a></li>
                    <li><a href="#specialization">Specialization</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="btn">
                   
                        <Link to="/booking" className='booking'>ONLINE BOOK</Link>
                   
                </div>
            </nav>
           
        </div>
    );
};

export default Nav;