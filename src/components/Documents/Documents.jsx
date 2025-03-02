import React from "react";
import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgShapeRhombus } from "react-icons/cg";
import "./Documents.css";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Documents = () => {
  return (
    <section className="documents" id="documents">
      <motion.div
        className="documents-title"
        initial="hidden"
        animate="visible"
        variants={fadeInLeft}
      >
        <h2>Документы для сертификации</h2>
      </motion.div>
      <div className="documents-wrapper">
        <div className="documents-cards">
          <div className="top-docs">
            <motion.div
              className="doc-card gap-docs"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>
                <CgShapeRhombus /> GlobalG.A.P.
              </h3>
              <ol className="doc-list">
                <li className="doc-item">
                  <IoDocumentTextOutline /> Регистрационные документы
                  предприятия
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Карта полей, план расположения ферм
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Журналы учета использования
                  пестицидов и удобрений
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Документы о происхождении семенного
                  материала
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Анализы почвы и воды
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Договоры с поставщиками и
                  покупателями
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Протоколы по охране труда и технике
                  безопасности
                </li>
              </ol>
            </motion.div>
            <motion.div
              className="doc-card org-docs"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>
                <CgShapeRhombus /> Organic Certification
              </h3>
              <ol className="doc-list">
                <li className="doc-item">
                  <IoDocumentTextOutline /> Доказательства отсутствия ГМО и
                  синтетических удобрений
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Карта севооборота и план почвенного
                  удобрения
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Журналы ведения хозяйственной
                  деятельности
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Протоколы проверки сырья и кормов
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Договоры с сертифицированными
                  поставщиками
                </li>
              </ol>
            </motion.div>
            <motion.div
              className="doc-card HACCP-docs"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>
                <CgShapeRhombus /> HACCP
              </h3>
              <ol className="doc-list">
                <li className="doc-item">
                  <IoDocumentTextOutline /> HACCP-аналитическая таблица
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Карта ККТ (критические контрольные
                  точки)
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Протоколы контроля температуры,
                  влажности
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Санитарные журналы
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Договоры с лабораториями на анализы
                  сырья и продукции
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Программы дезинфекции и борьбы с
                  вредителями
                </li>
              </ol>
            </motion.div>
          </div>
          <div className="bottom-docs">
            <motion.div
              className="doc-card iso-2200"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>
                <CgShapeRhombus /> ISO 22000
              </h3>
              <ol className="doc-list">
                <li className="doc-item">
                  <IoDocumentTextOutline /> Политика по безопасности пищевой
                  продукции
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> HACCP-план и анализ рисков
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Протоколы мониторинга критических
                  контрольных точек (ККТ)
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Журналы санитарной обработки
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Сертификаты поставщиков сырья
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Инструкции по управлению
                  несоответствующей продукцией
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Программы внутреннего аудита
                </li>
              </ol>
            </motion.div>
            <motion.div
              className="doc-card gmp"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>
                <CgShapeRhombus /> GMP+ (Good Manufacturing Practice)
              </h3>
              <ol className="doc-list">
                <li className="doc-item">
                  <IoDocumentTextOutline /> Политика качества предприятия
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Программы производственного контроля
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Журналы входящего сырья и контроля
                  качества
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Данные об отслеживаемости продукции
                </li>
                <li className="doc-item">
                  <IoDocumentTextOutline /> Сертификаты лабораторных анализов
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
