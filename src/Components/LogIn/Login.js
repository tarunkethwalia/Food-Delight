import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';

class Login extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton className="d-flex justify-content-center">
                    <Modal.Title id="contained-modal-title-vcenter" className="d-flex justify-content-center">
                        <div>
                            <h1>SignIn</h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Lorem Ipsum
                    </p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button varient="warning" className="btn btn-warning" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Login;