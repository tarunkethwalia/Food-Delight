import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import $ from 'jquery';
import Login from '../LogIn/Login';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            addModalShow : false
        }
    }

    hamburger = () => {
        $('.hamburger').toggleClass('active');
        $('.header').toggleClass('active');
    }
    render(){
        let addModalClose = () => this.setState({ addModalShow : false})
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
                    <NavLink className="navlinks" onClick={() => { this.setState({ addModalShow: true}) }}>Log In</NavLink>
                    <Login show={this.state.addModalShow} onHide={addModalClose} />
                </li>
            </ul>
        </div>
    )
    }
}

export default Navbar;