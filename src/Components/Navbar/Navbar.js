import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import $ from 'jquery';

class Navbar extends Component {

    hamburger = () => {
        $('.hamburger').toggleClass('active');
        $('.header').toggleClass('active');
    }
    render(){
    return(
        <div className="header">
            <div className="hamburger" onClick={this.hamburger}>
                <div className="hamlines"></div>
            </div>
            <ul>
                <li>
                    <NavLink className="navlinks" to="/">Home</NavLink>
                    <NavLink className="navlinks" to="/menu">Menu</NavLink>
                    <NavLink className="navlinks" to="/signup">Sign Up</NavLink>
                    <NavLink className="navlinks" to="/login">Log In</NavLink>
                </li>
            </ul>
        </div>
    )
    }
}

export default Navbar;