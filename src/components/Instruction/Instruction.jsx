import React from "react";
import "./Instruction.css";

const Instruction = () => {
  return (
    <section className="instructions">
      <div className="instructions-wrapper">
        <div className="seed-culture-wrapper">
          <div className="seed-culture">
            <div className="seed-culture-title">
              <h2>
                Подробная инструкция по сертификации агрономических товаров
              </h2>
            </div>
            <div className="seed-culture-cards">
              {/* <div className="seed-title">
                <h3>Зерновые культуры (например, пшеница, кукуруза, ячмень)</h3>
              </div> */}
              {/* <div className="seed-top-section"> */}
              <div className="seed-culture-card">
                <div className="seed-list">
                  <ul>
                    <h3>1. Подготовка документов</h3>
                    <li> Регистрационные документы компании:</li>
                    <li> Свидетельство о регистрации предприятия (копия).</li>
                    <li>Устав компании (копия)</li>
                    <li>Технические условия и спецификации на продукцию</li>
                    <li>
                      Документ, описывающий характеристики зерновых культур
                      (состав, требования к качеству, упаковка и т.д.).
                    </li>
                    <li>Протоколы лабораторных исследований и испытаний:</li>
                    <li>
                      {" "}
                      Протоколы, подтверждающие качество продукции (например,
                      результаты анализа на содержание вредных веществ,
                      влажность, белок и т.д.).
                    </li>
                  </ul>
                </div>
              </div>
              <div className="organs-card">
                <div className="organs-card-wrapper">
                  <div className="organs-card-title">
                    <h3>Выбор органа по сертификаци</h3>
                  </div>
                  <div className="organs-card-list">
                    <ul>
                      <li>
                        Центр стандартизации и метрологии при Министерстве
                        экономики и коммерции Кыргызской Республики
                      </li>
                      <li>Адрес: г. ишкек, ул. *рунзе, 429.</li>
                      <li>Телефон: +996 312 660 460.</li>
                      <li>еб-сайт: www.gosstandart.kg.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bid">
                <div className="bid-wrapper">
                  <div className="bid-title">
                    <h3>Подача заявки</h3>
                  </div>
                  <div className="bid-list">
                    <ul>
                      <li> Обратитесь в Центр стандартизации и метрологии.</li>
                      <li>Получите форму заявки и инструкцию по заполнению.</li>
                      <li>
                        Подготовьте пакет документов (регистрационные документы,
                        технические условия, протоколы исследований).
                      </li>
                      <li>
                        Aаполните заявку и подайте её вместе с пакетом
                        документов в Центр стандартизации и метрологии.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="seed-bottom-section"> */}
              <div className="tests">
                <div className="tests-wrapper">
                  <div className="tests-title">
                    <h3>Проведение испытаний</h3>
                  </div>
                  <div className="tests-list">
                    <ul>
                      <li>
                        Передайте образцы продукции в аккредитованную
                        лабораторию для проведения испытаний.
                      </li>
                      <li>
                        лаборатория агрохимических и радиологических
                        исследований при Кыргызском аграрном университете:
                        <ul>
                          <li>Адрес: г. ишкек, ул. М. Рыскулова, 4а</li>
                          <li>Телефон: +996 312 544 611.</li>
                          <li>еб-сайт: www.kau.edu.kg.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="taking-cert">
                <div className="taking-cert-wrapper">
                  <div className="taking-cert-title">
                    <h3>Получение сертификата</h3>
                  </div>
                  <div className="cert-list">
                    <ul>
                      <li>
                        После успешного проведения испытаний и получения
                        положительных результатов, Центр стандартизации и
                        метрологии выдаст сертификат соответствия
                      </li>
                      <li>
                        Сертификат будет подтверждать, что продукция
                        соответствует установленным стандартам качества и
                        безопасности.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <hr className="slicer" />
        <div className="material">
          <div className="material-wrapper">
            <div className="material-cards">
              <div className="material-card">
                <div className="material-card-wrapper">
                  <div className="material-title">
                    <h3>Семена и посадочный материал</h3>
                  </div>
                  <div className="material-list">
                    <h3>Подготовка документов</h3>
                    <ul>
                      <li>Регистрационные документы компании:</li>
                      <li>Свидетельство о регистрации предприятия (копия).</li>
                      <li>состав компании (копия).</li>
                      <li>Технические условия и спецификации на продукцию:</li>
                      <li>
                        Документ, описывающий характеристики овощей и фруктов
                        (состав, требования к качеству, упаковка и т.д.).
                      </li>
                      <li>Протоколы лабораторных исследований и испытаний:</li>
                      <li>
                        Протоколы, подтверждающие качество продукции (например,
                        результаты анализа на содержание пестицидов, нитратов и
                        т.д.)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="organs-card">
                <div className="organs-card-wrapper">
                  <div className="organs-card-title">
                    <h3>Выбор органа по сертификаци</h3>
                  </div>
                  <div className="organs-card-list">
                    <ul>
                      <li>
                        Центр стандартизации и метрологии при Министерстве
                        экономики и коммерции Кыргызской Республики
                      </li>
                      <li>Адрес: г. ишкек, ул. *рунзе, 429.</li>
                      <li>Телефон: +996 312 660 460.</li>
                      <li>еб-сайт: www.gosstandart.kg.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bid">
                <div className="bid-wrapper">
                  <div className="bid-title">
                    <h3>Подача заявки</h3>
                  </div>
                  <div className="bid-list">
                    <ul>
                      <li> Обратитесь в Центр стандартизации и метрологии.</li>
                      <li>Получите форму заявки и инструкцию по заполнению.</li>
                      <li>
                        Подготовьте пакет документов (регистрационные документы,
                        технические условия, протоколы исследований).
                      </li>
                      <li>
                        Aаполните заявку и подайте её вместе с пакетом
                        документов в Центр стандартизации и метрологии.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tests">
                <div className="tests-wrapper">
                  <div className="tests-title">
                    <h3>Проведение испытаниk</h3>
                  </div>
                  <div className="tests-list">
                    <ul>
                      <li>
                        Передайте образцы продукции в аккредитованную
                        лабораторию для проведения испытаний.
                      </li>
                      <li>
                        лаборатория агрохимических и радиологических
                        исследований при Кыргызском аграрном университете:
                        <ul>
                          <li>Адрес: г. Бишкек, ул. Киевская, 96.</li>
                          <li>Телефон: +996 312 544 011</li>
                          <li>Веб-сайт: www.ksaa.kg.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="taking-cert">
                <div className="taking-cert-wrapper">
                  <div className="taking-cert-title">
                    <h3>Получение сертификат7</h3>
                  </div>
                  <div className="cert-list">
                    <ul>
                      <li>
                        После успешного проведения испытаний и получения
                        положительных результатов, Центр стандартизации и
                        метрологии выдаст сертификат соответствия
                      </li>
                      <li>
                        Сертификат будет подтверждать, что продукция
                        соответствует установленным стандартам качества и
                        безопасности.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="slicer" />
        <div className="fruits-section">
          <div className="fruits-section-wrapper">
            <div className="fruits-section-cards">
              <div className="fruits-section-card">
                <div className="fruits-seciton-card-wrapper">
                  <div className="fruits-seciton-title">
                    <h3>
                      Овощи и фрукты (например, морковь, яблоки, картофель,
                      виноград)
                    </h3>
                  </div>
                  <div className="fruits-section-list">
                    <h3>Подготовка документов</h3>
                    <ul>
                      <li>Регистрационные документы компании:</li>
                      <li>Свидетельство о регистрации предприятия (копия).</li>
                      <li>состав компании (копия).</li>
                      <li>Технические условия и спецификации на продукцию:</li>
                      <li>
                        Документ, описывающий характеристики овощей и фруктов
                        (состав, требования к качеству, упаковка и т.д.).
                      </li>
                      <li>Протоколы лабораторных исследований и испытаний:</li>
                      <li>
                        Протоколы, подтверждающие качество продукции (например,
                        результаты анализа на содержание пестицидов, нитратов и
                        т.д.)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="organs-card">
                <div className="organs-card-wrapper">
                  <div className="organs-card-title">
                    <h3>Выбор органа по сертификаци</h3>
                  </div>
                  <div className="organs-card-list">
                    <ul>
                      <li>
                        Центр стандартизации и метрологии при Министерстве
                        экономики и коммерции Кыргызской Республики
                      </li>
                      <li>Адрес: г. ишкек, ул. *рунзе, 429.</li>
                      <li>Телефон: +996 312 660 460.</li>
                      <li>еб-сайт: www.gosstandart.kg.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bid">
                <div className="bid-wrapper">
                  <div className="bid-title">
                    <h3>Подача заявки</h3>
                  </div>
                  <div className="bid-list">
                    <ul>
                      <li> Обратитесь в Центр стандартизации и метрологии.</li>
                      <li>Получите форму заявки и инструкцию по заполнению.</li>
                      <li>
                        Подготовьте пакет документов (регистрационные документы,
                        технические условия, протоколы исследований).
                      </li>
                      <li>
                        Aаполните заявку и подайте её вместе с пакетом
                        документов в Центр стандартизации и метрологии.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tests">
                <div className="tests-wrapper">
                  <div className="tests-title">
                    <h3>Проведение испытаниk</h3>
                  </div>
                  <div className="tests-list">
                    <ul>
                      <li>
                        Передайте образцы продукции в аккредитованную
                        лабораторию для проведения испытаний.
                      </li>
                      <li>
                        лаборатория агрохимических и радиологических
                        исследований при Кыргызском аграрном университете:
                        <ul>
                          <li>Адрес: г. Бишкек, ул. Киевская, 96.</li>
                          <li>Телефон: +996 312 544 011</li>
                          <li>Веб-сайт: www.ksaa.kg.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="taking-cert">
                <div className="taking-cert-wrapper">
                  <div className="taking-cert-title">
                    <h3>Получение сертификат7</h3>
                  </div>
                  <div className="cert-list">
                    <ul>
                      <li>
                        После успешного проведения испытаний и получения
                        положительных результатов, Центр стандартизации и
                        метрологии выдаст сертификат соответствия
                      </li>
                      <li>
                        Сертификат будет подтверждать, что продукция
                        соответствует установленным стандартам качества и
                        безопасности.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="succes">
          <h2>
            Для успешной сертификации агрономических товаров в Кыргызской
            Республике необходимо следовать всем указанным шагам, от подготовки
            документов
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Instruction;
