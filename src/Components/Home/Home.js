import React, { Component } from 'react';
import './Home.css'
import { NavLink } from 'react-router-dom';
import logo from '../Images/FDLogo.png';
import menu1 from '../Images/menu1.jpg';
import menu2 from '../Images/menu2.jpg';
import menu3 from '../Images/menu3.jpg';
import menu4 from '../Images/menu4.jpg';

class Home extends Component {
    
    render() {
        return (
            <div className="Home">
                    <div className="col-md-12 d-flex justify-content-center align-items-center top-div">
                        <img src={logo} alt="logo" id="faded" />
                    </div>
                    <div className="col-md-12 text-center disc-div">
                            <h1>Discover</h1>
                            <hr className="hr" />
                            <h4>Menu</h4>
                    </div>
                    <div className="col-md-12 menu-card">
                            <div className="row">
                                <div className="d-flex justify-content-center text-center col-md-6">
                                    <div className="row">
                                    <div className="menu-image col-md-6">
                                        <img src={menu1} alt="menu1"/>
                                        <p>Our special curry with appropriate amount of masalas increase the flavours of our dishes.</p>
                                    </div>
                                    <div className="menu-image col-md-6">
                                        <img src={menu2} alt="menu2"/>
                                        <p>All the masalas are built with natural ingredients.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="d-flex justify-content-center text-center col-md-6">
                                        <div className="row">
                                        <div className="menu-image col-md-6">
                                            <img src={menu3} alt="menu3"/>
                                            <p>They are mixed and served with proper amount as per your choice.</p>
                                        </div>
                                        <div className="menu-image col-md-6">
                                            <img src={menu4} alt="menu4"/>
                                            <p>Freshly cooked food is served with love.</p>
                                        </div>
                                        </div>
                                </div> 
                            </div>
                    </div>

                <div className="col-md-12 text-center mid-para">
                    <p>For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates. We love food, lots of different food, just like you.</p>
                    <NavLink className="navlinks" to="/menu"><button className="btn btn-light">View the full Menu</button></NavLink>
                </div>

                <div className="col-md-12 text-center disc-div">
                    <h1>Services We</h1>
                    <hr className="hr" />
                    <h4>Provide</h4>
                </div>

                <div className="service-box">
                    <div className="serv-holder">
                        <div className="box box1">
                            <h1>FREE PACKAGING</h1>
                            <p>Proper packaging is maintained for the soul purpose of no food wastage along the journey.</p>
                        </div>
                        <div className="box box2">
                            <h1>BULK ORDER</h1>
                            <p>Large orders are taken which should be delieved to your doorstep is our main responsibility.</p>
                        </div>
                        <div className="box box3">
                            <h1>FAST DELIVERY FOOD</h1>
                            <p>We know the importance of your food and having it on time is what a customer wish to desire.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;