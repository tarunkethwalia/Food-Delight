import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './Login.css';
import Swal from 'sweetalert2';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: null,
            Password: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.Email === null && this.state.Password === null){
            Swal.fire({ title: 'Validation Error', text: 'Please type Email and Password', type: 'error' });
        }
        else if (this.state.Email === null || this.state.Password === null) {
            Swal.fire({ title: 'Validation Error', text: 'Incorrect Email or Password', type: 'error' });
        }
        else{
            Swal.fire({ title: 'Signed In', text: 'Dummy Website', type: 'success' });
        }
    };

    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter modal-m" centered >
                <Modal.Header className="modal-head d-flex justify-content-center">
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className="heading">
                            <h2>Food Delight</h2>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handleSubmit}>
                    <Modal.Body className="modal-body">
                        <table className="TableSection">
                            <tbody className="modal-tbody">
                                <tr>
                                    <td className="thead">Username</td>
                                    <td><input className="input-field" onChange={this.handleChange} id="Email" type="text" name="Email" /></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="thead">Password</td>
                                    <td><input className="input-field" onChange={this.handleChange} id="Password" type="password" name="Password" /></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                    </Modal.Body>
                    <Modal.Footer className="modal-footer d-flex justify-content-center">
                        <input type="submit" className="modal-btn" value="Sign In" />
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}

export default Login;
