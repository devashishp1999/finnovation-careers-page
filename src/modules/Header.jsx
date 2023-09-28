import React, { useState } from "react";
import Logo from "../components/Logo";
import useScreenSize from "../hooks/useScreenSize";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const viewport = useScreenSize();

  function toggleNav() {
    setNavShow(!navShow);
  }
  return (
    <header>
      <div class="container">
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
                <button className="cta">Enrol Now</button>
              )}
            </li>
          </ul>
        </nav>

        {viewport == "desktop" && <button className="cta">Enrol Now</button>}

        <div class="hamburger-menu" onClick={toggleNav}>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
