import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">~Products~</h5>
            <p>Your one-stop destination for all your shopping needs. Quality products, affordable prices.</p>
          </div>

          {/* Help Section */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">Help</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shipping</a></li>
              <li><a href="#" className="text-white text-decoration-none">Returns</a></li>
            </ul>
          </div>

          {/* Shop Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Men's Clothing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Women's Clothing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Electronics</a></li>
              <li><a href="#" className="text-white text-decoration-none">Jewelry</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">Follow Us</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
              <a href="#" className="text-white fs-5"><FaLinkedin /></a>
            </div>

            <div className="mt-4">
              <p className="mb-2">We Accept:</p>
              <div className="d-flex gap-2">
                <FaCcVisa size={30} />
                <FaCcMastercard size={30} />
                <FaCcPaypal size={30} />
              </div>
            </div>
          </div>
        </div>

        <hr className="bg-white" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
