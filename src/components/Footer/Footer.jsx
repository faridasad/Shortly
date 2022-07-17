import React from "react";
import "./footer.scss";
import logoSvg from "../../assets/images/logo.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";
import iconPinterest from "../../assets/images/icon-pinterest.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <section className="footer">
      <img src={logoSvg} alt="logo" />
      <div className="footer-nav">
        <ul className="f-features" aria-label="features">
          <p>Features</p>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analyrics</li>
        </ul>
        <ul className="f-resources" aria-label="resources">
          <p>Resources</p>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul className="f-company" aria-label="company">
          <p>Company</p>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className="f-socials" aria-label="socials">
          <li>
            <img src={iconFacebook} alt="facebook" />
          </li>
          <li>
            <img src={iconTwitter} alt="twitter" />
          </li>
          <li>
            <img src={iconPinterest} alt="pinterest" />
          </li>
          <li>
            <img src={iconInstagram} alt="instagram" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
