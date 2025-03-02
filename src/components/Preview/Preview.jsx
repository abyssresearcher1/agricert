import React from "react";
import "./Preview.css";

const Preview = () => {
  return (
    <section className="preview">
      <div className="preview-wrapper">
        <div className="preview-container">
          <div className="preview-text">
            <h1>Агрономическая сертификация</h1>
            <span>
              Гарантия качества – сертификация для процветающего урожая!
            </span>
          </div>
          <div className="preview-btn_block">
            <a href="#documents">
              <button className="preview-btn">Стандарты</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
