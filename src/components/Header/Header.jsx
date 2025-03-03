import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div
        className={`header-navigation ${scrolling ? "scrolled" : ""}`}
        style={{ background: menuOpen ? "#eec044" : "" }}
      >
        <div className="header-wrapper">
          <div className="header-logo">
            <h2>
              <a href="#">AgriCert</a>
            </h2>
          </div>
          <button
            className="burger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <div className={`header-container ${menuOpen ? "open" : ""}`}>
            <div className="header-menu">
              <nav className="nav">
                <ul className="menu">
                  <li className="menu-item">
                    <a href="#about-anchor" onClick={() => setMenuOpen(false)}>
                      О компании
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#services" onClick={() => setMenuOpen(false)}>
                      Сертификаты
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#documents" onClick={() => setMenuOpen(false)}>
                      Документы
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#contacts" onClick={() => setMenuOpen(false)}>
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
