import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import missionfarmer from "../../assets/farmer-in-field-stockcake.jpg";
import certification from "../../assets/certification.jpg";
import "./Mission.css";

const Mission = () => {
  const [refMission, inViewMission] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refBenefits, inViewBenefits] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="mission" ref={refMission}>
      <div className="mission-wrapper">
        <div className="mission-title">
          <h2>Наша миссия</h2>
        </div>
        <div className="mission-container">
          <motion.div
            className="mission-text-block"
            initial={{ opacity: 0, x: -50 }}
            animate={inViewMission ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p>
              Мы рады приветствовать вас на нашем сайте, посвященном
              агрономической сертификации. Наша миссия - помочь фермерам и
              сельскохозяйственным предприятиям улучшить качество своей
              продукции и получить необходимые сертификаты для соответствия
              международным стандартам. Здесь вы найдете всю необходимую
              информацию о процессе сертификации, наших услугах, а также
              полезные материалы и советы по современным агротехнологиям.
            </p>
          </motion.div>
          <motion.div
            className="mission-image-block"
            initial={{ opacity: 0, x: 50 }}
            animate={inViewMission ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img src={missionfarmer} alt="missionfarmer" />
          </motion.div>
        </div>
      </div>
      <div className="benefits" ref={refBenefits}>
        <div className="benefits-wrapper">
          <div className="benefits-title">
            <h2>Преимущества сертификации</h2>
          </div>
          <div className="benefits-container">
            <motion.div
              className="benefits-image-block"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewBenefits ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img src={certification} alt="certification" />
            </motion.div>
            <motion.div
              className="benefits-text-block"
              initial={{ opacity: 0, x: 50 }}
              animate={inViewBenefits ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p>
                Сертификация агрономических товаров в Кыргызской Республике
                приносит множество преимуществ, начиная от экономической выгоды
                и повышения прибыли до экологических и социальных выгод. Это
                улучшает не только состояние отдельных предприятий, но и в целом
                способствует развитию аграрного сектора страны, улучшению
                качества жизни населения и защите окружающей среды.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
