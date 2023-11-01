import React, { useState } from "react";
import Logo from "../components/Logo";
import useScreenSize from "../hooks/useScreenSize";
import ApplyForm from "../components/ApplyForm";

const Header = () => {
  const viewport = useScreenSize();
  const [navShow, setNavShow] = useState(false);
  const [isForm, openForm] = useState(false);

  function toggleNav() {
    setNavShow(!navShow);
  }
  return (
    <header>
      <div className="container">
        <Logo />

        <nav className={navShow ? "active" : ""}>
          <ul>
            <li>
              <a href="#" aria-label="Go to Home page">Home</a>
            </li>
            <li>
              <a href="#" aria-label="Go to HoAbout usme page">About us</a>
            </li>
            <li>
              <a href="#" aria-label="Go to Course page">Course</a>
            </li>
            <li>
              <a href="#" aria-label="Go to Blogs & Articles page">Blogs & Articles</a>
            </li>
            <li>
              {viewport == "mobile" && (
                <button className="cta" onClick={openForm} aria-label="Open apply now form">Enrol Now</button>
              )}
            </li>
          </ul>
        </nav>

        {viewport == "desktop" && (
          <button className="cta" onClick={openForm} aria-label="Open apply now form">
            Apply Now
          </button>
        )}

        <div className="hamburger-menu" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {isForm && <ApplyForm position={""} closeSelf={() => openForm(false)} />}
    </header>
  );
};

export default Header;
