import React, { Component } from 'react';
import './SignUp.css';
import axios from 'axios';

class SignUp extends Component {
    render() {
        axios.post('').then().catch();
        return (
            <div className="wrapper">
                <div className="holder">
                    <div className="SignUpBack">
                        <div className="SignUp">
                            <div className="forminput">
                                <input type="text" class="form-control" id="inputError" placeholder="Full Name" required/>
                            </div>
                            <div className="forminput">
                                <input type="email" class="form-control" id="inputError" placeholder="Email" required/>
                            </div>
                            <div className="forminput">
                                <input type="password" class="form-control" id="inputError" placeholder="Password" required/>
                            </div>
                            <div className="forminput">
                                <input type="number" class="form-control" id="inputError" placeholder="Phone Number" required/>
                            </div>
                            <div className="forminput form-btn">
                                <button className="btn btn-warning">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;