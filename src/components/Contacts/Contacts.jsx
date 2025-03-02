import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-bg">
        <div className="contacts-title">
          <h2>Контакты</h2>
        </div>
        <div className="contacts-wrapper">
          <div className="contacts-info">
            <div className="phone">
              <h3>Номер</h3>
              <p>+880123456789</p>
              <p>+880987654321</p>
            </div>
            <div className="email">
              <h3>Email</h3>
              <p>needhelp@company.com</p>
            </div>
            <div className="address">
              <h3>Address</h3>
              <p>Road No. 8, Niketan, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="contact-form">
            <input
              type="text"
              placeholder="Ваше имя"
              className="name-input contact-input"
            />
            <input
              type="tel"
              placeholder="Телефонный номер"
              className="number-input contact-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="email-input contact-input"
            />
            <input
              type="text"
              placeholder="Сообщение"
              className="message-input"
            />
            <button className="contact-form-btn">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
