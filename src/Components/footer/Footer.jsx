import React from "react";
import { Facebook, Instagram, Logo, Twitter } from "../../assets/icon";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* // You need to write the footer part of the website */}
        <div className="footer-content">
          <div className="mr-30">
            <div className="footer-content-log">
              <Logo />
            </div>
            <p className="">
              With travala you can experience new travel and the best tourist{" "}
              destinations that we have to offer.
            </p>
          </div>
          <div className="footer-nav">
            <h3 className="footer-content-head-text">Services</h3>
            <div>
              <ul className="footer-content-list">
                <li>Home</li>
                <li>Shaharlar</li>
                <li>Diqqatga sazovor joylar</li>
                <li>Galereya</li>
              </ul>
            </div>
          </div>{" "}
          <div className="footer-nav">
            <h3 className="footer-content-head-text">About</h3>
            <div>
              <ul className="footer-content-list">
                <li>About</li>
                <li>Biz haqimizda</li>
                <li>Kontaktlariimiz</li>
                <li>F.A.Q</li>
              </ul>
            </div>
          </div>{" "}
          <div className="footer-nav">
            <h3 className="footer-content-head-text">Follow Us</h3>
            <div>
              <ul className="footer-content-list flex">
                <div>
                  <div className="flex">
                    <span className="mr-5">
                      <Facebook />
                    </span>
                    Facebook
                  </div>
                  <div className="flex">
                    <span className="mr-2">
                      <Twitter />
                    </span>
                    Twitter
                  </div>
                  <div className="flex">
                    <span className="mr-2">
                      <Instagram />
                    </span>
                    Instagram
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
