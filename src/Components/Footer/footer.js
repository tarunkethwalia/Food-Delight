import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
  render(){
  return(
  <div>
    <footer>
      <div className="col-md-12 text-center">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <h1 className="FD-title">Food Delight</h1>
          </div>
          <div className="col-md-4">
            <h3 className="foot-head">Food We Offer</h3>
            <hr className="footer-hr" />
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <p>Indian</p>
                    <p>Italian</p>
                    <p>Chinese</p>
                  </div>
                  <div className="col-md-6">
                    <p>Dessert</p>
                    <p>Baverages</p>
                  </div>
                </div>
              </div>
          </div>
            <div className="col-md-4">
              <h3 className="foot-head">Follow Us</h3>
              <hr className="footer-hr" />
                <div className="col-md-12">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <i className="fab fa-facebook follow-icon"></i>
                      <i className="fab fa-twitter-square follow-icon"></i>
                      <i className="fab fa-instagram follow-icon"></i>
                    </div>
                  </div>
                </div>
    </div>
            </div>
          </div>
          <hr className="footer-hr" />
            <div className="col-md-12 text-center">
              <h5>Copyright &copy; 2019 All rights reserved | <span className="FD2-title">Food Delight</span></h5>
            </div>
</footer>
</div>
  )
  }
}

export default Footer;