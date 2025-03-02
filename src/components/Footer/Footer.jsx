import React from "react";
import facebook from "../../assets/facebook.svg";
import bird from "../../assets/bird.svg";
import youtube from "../../assets/youtube.svg";
import inst from "../../assets/inst.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-info">
          {" "}
          <div className="footer-logo">
            <h1>AgriCert</h1>
          </div>
          <div className="footer-slogan">
            <p> Гарантия качества – сертификация для процветающего урожая!</p>
          </div>
          <div className="line"></div>
          <div className="soc-icons">
            <img src={facebook} alt="soc-icon" />
            <img src={bird} alt="soc-icon" />
            <img src={youtube} alt="soc-icon" />
            <img src={inst} alt="soc-icon" />
          </div>
        </div>
        <div className="footer-things">
          <div className="footer-nav">
            <ul className="footer-links-list">
              <li className="footer-link">
                <a href="">О компании</a>
              </li>
              <li className="footer-link">
                <a href="">Услуги</a>
              </li>
              <li className="footer-link">
                <a href="">Сертификация</a>
              </li>
              <li className="footer-link">
                <a href="">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-line"></div>
      <div className="footer-copy">
        <div className="copy-wrapper">
          <div className="copy">
            <p>© All Copyright 2024 by roflogroup</p>
          </div>
          <div className="terms">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
