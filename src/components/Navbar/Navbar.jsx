import React, { useState } from "react";
import "./navbar.scss";
import logoSvg from "../../assets/images/logo.svg";
import menuSvg from "../../assets/images/menu-icon.svg";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <header className="navbar">
        <img src={logoSvg} alt="logo" />
        <MenuIcon
          className="hamburger"
          onClick={() => setIsMenuActive(!isMenuActive)}
        />
        <nav data-status={isMenuActive ? "open" : "close"}>
          <ul className="navbar-links" role="list">
            <li className="navbar-links-item">
              <a href="#">Features</a>
            </li>
            <li className="navbar-links-item">
              <a href="#">Pricing</a>
            </li>
            <li className="navbar-links-item">
              <a href="#">Resources</a>
            </li>
          </ul>
          <div className="border"></div>
          <div className="navbar-buttons">
            <button className="button secondary">Login</button>
            <button className="button primary">Sign Up</button>
          </div>
        </nav>
        {/* <span className="hamburger" ><img src={menuSvg} alt="toggle-menu" /></span> */}
      </header>
    </>
  );
};

export default Navbar;
