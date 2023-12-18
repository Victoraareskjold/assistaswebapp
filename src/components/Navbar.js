import React from "react";
import "../../src/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navContent">
        <a href="#hero" className="logoBtn">
          Assistas
        </a>
        <a href="#platform" className="navBtn">
          Om platformen
        </a>
        <a href="#helpUs" className="navBtn">
          Vi trenger deg
        </a>
        <a href="#news" className="navBtn">
          Nyhetsbrev
        </a>
      </div>

      <div className="navContent">
        <a className="navContactBtn">Ta kontakt</a>
      </div>
    </nav>
  );
}

export default Navbar;
