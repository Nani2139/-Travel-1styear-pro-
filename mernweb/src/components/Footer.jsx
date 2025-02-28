import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-3">
                <h3>TRAVELS AGENDA</h3>
              </div>

              <div className="col-2">
                <h4>Section</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link p-0 text-white">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/about" className="nav-link p-0 text-white">
                      About
                    </NavLink>
                  </li>
                  </ul>
                  </div>
                  <div className="col-2">
                 <ul className="nav flex-column"> 
                  <li className="nav-item mb-2">
                    <NavLink to="/service" className="nav-link p-0 text-white">
                    Services
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/contact" className="nav-link p-0 text-white">
                    Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/recommend" className="nav-link p-0 text-white">
                    Recommend
                    </NavLink>
                  </li>
                </ul>
              </div>


              <div className="col-4 offset-1">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button
                      className="btn btn-primary rounded-pill px-4"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p>© 2021 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a link className="link-light" href="https://www.facebook.com/" target="_blank">
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a link className="link-light" href="https://www.instagram.com/" target="_blank">
                    <i className="fa fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a link className="link-light" href="https://twitter.com/" target="_blank">
                    <i className="fa fa-twitter fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;