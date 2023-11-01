import React, { useState } from "react";
import Logo from "../components/Logo";
import { IMAGES } from "../assets/assets";
import Icon from "../components/Icon";
import ApplyForm from "../components/ApplyForm";

const Footer = () => {
  const [isForm, openForm] = useState(false);

  return (
    <footer>
      <div className="container">
        <Logo />

        <p>Are you ready?</p>
        <h2>Let’s get started</h2>
        <button className="action" onClick={openForm} aria-label="Open apply now form">
          Apply Now
        </button>

        <ul className="sitemap">
          <li>
            <a href="#" aria-label="Go to Home page">Home</a>
          </li>
          <li>
            <a href="#" aria-label="Go to Instructor page">Instructor</a>
          </li>
          <li>
            <a href="#" aria-label="Go to Our Pricing page">Our Pricing</a>
          </li>
          <li>
            <a href="#" aria-label="Go to Testimonials page">Testimonials</a>
          </li>
          <li>
            <a href="#" aria-label="Go to FAQ page">FAQ</a>
          </li>
        </ul>

        <ul className="links">
          <li>
            <a href="www.linkedin.com" aria-label="Open company linkedIn page">
              <Icon src={IMAGES.linkedinIcon} w={48} h={48} />
            </a>
          </li>
          <li>
            <a href="www.facebook.com" aria-label="Open company facebook page">
              <Icon src={IMAGES.facebookIcon} w={48} h={48} />
            </a>
          </li>
          <li>
            <a href="www.twitter.com" aria-label="Open company twitter page">
              <Icon src={IMAGES.twitterIcon} w={48} h={48} />
            </a>
          </li>
          <li>
            <a href="www.instagram.com" aria-label="Open company instagram page">
              <Icon src={IMAGES.instagramIcon} w={48} h={48} />
            </a>
          </li>
          <li>
            <a href="www.youtube.com" aria-label="Open company youtube channel">
              <Icon src={IMAGES.youtubeIcon} w={48} h={48} />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <div className="bg-image">
          <img src={IMAGES.footerWave} alt="waves" className="bg-image" />
        </div>
        <p>Copyright © 2023. Ikashi Fintech Pvt. Ltd. All right reserved</p>
      </div>

      {isForm && <ApplyForm position={""} closeSelf={() => openForm(false)} />}
    </footer>
  );
};

export default Footer;
