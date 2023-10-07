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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Course</a>
            </li>
            <li>
              <a href="#">Blogs & Articles</a>
            </li>
            <li>
              {viewport == "mobile" && (
                <button className="cta" onClick={openForm}>Enrol Now</button>
              )}
            </li>
          </ul>
        </nav>

        {viewport == "desktop" && (
          <button className="cta" onClick={openForm}>
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
