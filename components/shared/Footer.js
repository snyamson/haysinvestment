import React from 'react';

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-5 text-center">
            <div className="ftco-footer-widget mb-3">
              <ul className="ftco-footer-social list-unstyled">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ftco-footer-widget">
              <h2 className="mb-3">Contact Us</h2>
              <div className="email">
                <p>
                  Thank you for your interest in Hays-Investment. Please contact
                  us using the information provided below.
                </p>

                <a href="#">info@haysinvestment.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Copyright &copy; 2022 | All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
