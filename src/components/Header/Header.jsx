import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className={`header-navigation ${scrolling ? "scrolled" : ""}`}>
        <div className="header-wrapper">
          <div className="header-logo">
            <h2>
              <a href="#">AgriCert</a>
            </h2>
          </div>
          <div className="header-container">
            <div className="header-menu">
              <nav className="nav">
                <ul className="menu">
                  <li className="menu-item">
                    <a href="#about-anchor" className="menu-item">
                      О компании
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#services" className="menu-item">
                      Услуги
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#documents" className="menu-item">
                      Документы
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#contacts" className="menu-item">
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
