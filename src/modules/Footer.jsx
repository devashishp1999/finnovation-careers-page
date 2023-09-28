import React from "react";
import Logo from "../components/Logo";
import { IMAGES } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Logo />

        <p>Are you ready?</p>
        <h2>Let’s get started</h2>
        <button className="action">Get Started</button>

        <ul className="sitemap">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Instructor</a>
          </li>
          <li>
            <a href="#">Our Pricing</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        <ul className="links">
          <li>
            <a href="www.facebook.com">fb</a>
          </li>
          <li>
            <a href="www.twitter.com">twitter</a>
          </li>
          <li>
            <a href="www.instagram.com">Insta</a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <img src={IMAGES.footerWave} alt="waves" className="bg-image" />
        <p>Copyright © 2023. Ikashi Fintech Pvt. Ltd. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
