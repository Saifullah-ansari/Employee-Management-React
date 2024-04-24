import React from "react";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
    const location = useLocation();
  
    if (location.pathname !== "/") {
      // Don't render the footer on pages other than the home page
      return null;
    }
  
    return (
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Contact Us</h2>
              <p>Email: navendurai49@gmail.com</p>
              <p>Phone: +91 8340450571</p>
            </div>
  
            <div className="col-md-4">
              <h2>Follow Us</h2>
              <p>
                <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/navendu-singh-a3367a141/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>
  
            <div className="col-md-4">
              <h2>Quick Links</h2>
              <p>
                <Link to="/">Privacy Policy</Link>
              </p>
              <p>
                <Link to="/">Terms of Service</Link>
              </p>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <div className="container text-center">
            <p>&copy; 2023 Employee Management App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  