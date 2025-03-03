import React, { useEffect, useState } from "react";
import dream from "../../assets/dream.png";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".about");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.4;
        if (sectionTop < triggerPoint) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`about ${isVisible ? "visible" : ""}`}>
      <div className="about-title">
        <h2 id="about-anchor">О компании</h2>
      </div>
      <div className="about-wrapper">
        <div className="about-text">
          <p>
            <span className="agri-title">AgriCert</span>– молодая и
            перспективная компания в сфере агрономической сертификации,
            стремящаяся установить высокие стандарты качества
            сельскохозяйственной продукции в Кыргызстане. Основанная недавно,
            компания объединяет команду специалистов, увлеченных развитием
            сельского хозяйства и поддержкой фермеров. Мы помогаем местным
            производителям соответствовать международным требованиям, открывая
            новые возможности для экспорта. Наши стандарты и подходы
            ориентированы на устойчивый рост и доверие клиентов, а в будущем мы
            планируем расширить свою деятельность и выйти на международный
            уровень.
          </p>
        </div>
        <div className="about-image">
          <img src={dream} alt="dream" className="dream" />
        </div>
      </div>
    </section>
  );
};

export default About;
