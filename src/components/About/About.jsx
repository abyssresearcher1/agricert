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
            <span className="agri-title">AgriCert</span> – ведущая компания в
            сфере агрономической сертификации, предоставляющая независимую
            оценку и подтверждение качества сельскохозяйственной продукции по
            международным стандартам. Основанная в 2010 году, компания начала
            свою деятельность с небольшой команды агрономов и экспертов по
            качеству, стремящихся повысить уровень сельскохозяйственного
            производства. С тех пор AgriCert выросла в авторитетного игрока
            рынка, сотрудничая с фермерскими хозяйствами, агропромышленными
            предприятиями и экспортерами по всему миру. Сертификаты AgriCert
            признаются в Европе, Азии и Америке, что делает компанию надежным
            партнёром для тех, кто хочет выйти на международный рынок.
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
