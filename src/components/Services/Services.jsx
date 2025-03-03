import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <section className="services" id="services">
      <div className="services-wrapper">
        <div className="services-title">
          <h2>Сертификаты</h2>
        </div>
        <div className="services-cards">
          <div className="top-cards">
            <motion.div
              className="services-item gap"
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>
                GlobalG.A.P. – стандарт для безопасного и устойчивого сельского
                хозяйства.
              </p>
            </motion.div>
            <motion.div
              className="services-item orgi"
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>
                Organic Certification – подтверждение соответствия органическим
                стандартам (EU Organic, USDA Organic).
              </p>
            </motion.div>
            <motion.div
              className="services-item ssr"
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>
                HACCP – система анализа рисков и критических контрольных точек в
                пищевом производстве.
              </p>
            </motion.div>
          </div>
          <div className="bottom-cards">
            <motion.div
              className="services-item numbers"
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>
                ISO 22000 – международный стандарт управления безопасностью
                пищевых продуктов.
              </p>
            </motion.div>
            <motion.div
              className="services-item gmp"
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>GMP+ – сертификация безопасности кормов.</p>
            </motion.div>
          </div>
        </div>

        <div className="eco-cert">
          <div className="eco-cert-title">
            <h2>Экологическая сертификация</h2>
          </div>
          <div className="eco-certs-cards">
            <motion.div
              className="eco-cert-item feet-mmm"
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>
                Carbon Footprint Assessment – анализ углеродного следа
                предприятия.
              </p>
            </motion.div>
            <motion.div
              className="eco-cert-item froggo"
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>
                Rainforest Alliance Certification – подтверждение устойчивого
                производства.
              </p>
            </motion.div>
            <motion.div
              className="eco-cert-item greenday"
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>
                EU Green Deal Compliance – подготовка бизнеса к требованиям
                «Зеленого курса» ЕС.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="education">
          <div className="education-wrapper">
            <div className="education-title">
              <h2>Обучение и сертификация персонала</h2>
            </div>
            <div className="education-cards">
              <motion.div
                className="education-item course"
                variants={fadeInAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p>Курсы по стандартам GlobalG.A.P., HACCP, ISO 22000.</p>
              </motion.div>
              <motion.div
                className="education-item farmer"
                variants={fadeInAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p>
                  Обучение фермеров и агрономов принципам устойчивого сельского
                  хозяйства.
                </p>
              </motion.div>
              <motion.div
                className="education-item quality-control"
                variants={fadeInAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p>
                  Сертификация сотрудников в области контроля качества и
                  безопасности пищевой продукции.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
