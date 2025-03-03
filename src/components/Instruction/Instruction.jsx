import React from 'react'
import "./Instruction.css"

const Instruction = () => {
  return (
      <section className='top-section'>
        <div className='section-container'>
            <div className='section-container-wrapper'>
                <div className='instruction-title-wrapper'>
                    <h2 className='instruction-title'>Подробная инструкция по сертификации агрономических товаров</h2>
                </div>
                <div className='cards-wrapper'>
                    <div className='instruction-card cultures'>
                        <span className='instruction-card-title'>Зерновые культуры (например, пшеница, кукуруза, ячмень)</span>
                        <ol start={1}>
                            <li className='category-title'>Подготовка документов</li>
                        </ol>
                            <ul className='category-content'>
                                <li>Регистрационные документы компании.</li>
                                <li>Свидетельство о регистрации предприятия (копия).</li>
                                <li>Устав компании (копия).</li>
                                <li>Технические условия и спецификации на продукцию.</li>
                                <li>Документ, описывающий характеристики зерновых культур (состав,<br />требования к качеству, упаковка и т.д.).</li>
                                <li>Протоколы лабораторных исследований и испытаний.</li>
                                <li>Протоколы, подтверждающие качество продукции (например, результаты <br />анализа на содержание вредных веществ, влажность, белок и т.д.).</li>
                            </ul>
                        <ol start={2}>
                            <li className='category-title'>Выбор органа по сертификации</li>
                        </ol>
                            <ul className='category-content'>
                                <li>Центр стандартизации и метрологии при Министерстве экономики и <br />коммерции Кыргызской Республики.</li>
                                <li>Адрес:<a href="https://2gis.kg/bishkek/geo/15763234351077599"> г. Бишкек, ул. Фрунзе, 429</a>.</li>
                                <li>Телефон:<a href="tel:+996312660460"> +996 312 660 460</a>.</li>
                                <li>Веб сайт:<a href="http://www.gosstandart.kg"> www.gosstandart.kg</a>.</li>
                            </ul>
                        <ol start={3}>
                            <li className='category-title'>Подача заявки</li>
                        </ol>
                            <ul className='category-content'>
                                <li>Обратитесь в Центр стандартизации и метрологии.</li>
                                <li>Получите форму заявки и инструкцию по заполнению.</li>
                                <li>Подготовьте пакет документов (регистрационные документы, <br />технические условия, протоколы исследований).</li>
                                <li>Заполните заявку и подайте её вместе с пакетом документов в Центр <br />стандартизации и метрологии.</li>
                            </ul>
                        <ol start={4}>
                            <li className='category-title'>Проведение испытаний</li>
                        </ol>
                            <ul className='category-content'>
                                <li>Передайте образцы продукции в аккредитованную лабораторию для <br />проведения испытаний.</li>
                                <li>Лаборатория агрохимических и радиологических исследований при <br />Кыргызском аграрном университете.</li>
                                <li>Адрес:<a href="https://2gis.kg/bishkek/geo/15763234351077599"> г. Бишкек, ул. Фрунзе, 429</a>.</li>
                                <li>Телефон:<a href="tel:+996312660460"> +996 312 660 460</a>.</li>
                                <li>Веб сайт:<a href="http://www.gosstandart.kg"> www.gosstandart.kg</a>.</li>
                            </ul>
                        <ol start={5}>
                            <li className='category-title'>Получение сертификата</li>
                        </ol>
                            <ul className='category-content'>
                                <li>После успешного проведения испытаний и получения положительных <br />результатов, Центр стандартизации и метрологии выдаст сертификат <br />соответствия.</li>
                                <li>Сертификат будет подтверждать, что продукция соответствует <br />установленным стандартам качества и безопасности.</li>
                            </ul>
                    </div>
                    <div className='instruction-card vegetables-and-fruits'>
                        <span className='instruction-card-title'>Овощи и фрукты (например, морковь, яблоки, картофель, виноград)</span>
                        <ol start={1}>
                            <li className='category-title'>Подготовка документов</li>
                        </ol>
                            <ul className='category-content'>
                                <li>Регистрационные документы компании.</li>
                                <li>Свидетельство о регистрации предприятия (копия).</li>
                                <li>Устав компании (копия).</li>
                                <li>Технические условия и спецификации на продукцию.</li>
                                <li>Документ, описывающий характеристики овощей и фруктов (состав, <br />требования к качеству, упаковка и т.д.).</li>
                                <li>Протоколы лабораторных исследований и испытаний.</li>
                                <li>Протоколы, подтверждающие качество продукции (например, результаты <br />анализа на содержание пестицидов, нитратов и т.д.).</li>
                            </ul>
                        <ol start={2}>
                            <li className='category-title'>Выбор органа по сертификации</li>
                        </ol>
                            <ul className='category-content'>
                                <li>Центр стандартизации и метрологии при Министерстве экономики и <br />коммерции Кыргызской Республики</li>
                                <li>Адрес:<a href="https://2gis.kg/bishkek/geo/15763234351077599"> г. Бишкек, ул. Фрунзе, 429</a>.</li>
                                <li>Телефон:<a href="tel:+996312660460"> +996 312 660 460</a>.</li>
                                <li>Веб сайт:<a href="http://www.gosstandart.kg"> www.gosstandart.kg</a>.</li>
                            </ul>
                        <ol start={3}>
                            <li className='category-title'>Подача заявки</li>
                        </ol>
                            <ul className='category-content'>
                                <li>Обратитесь в Центр стандартизации и метрологии.</li>
                                <li>Получите форму заявки и инструкцию по заполнению.</li>
                                <li>Подготовьте пакет документов (регистрационные документы, <br />технические условия, протоколы исследований).</li>
                                <li>Заполните заявку и подайте её вместе с пакетом документов в Центр <br />стандартизации и метрологии.</li>
                            </ul>
                        <ol start={4}>
                            <li className='category-title'>Проведение испытаний</li>
                        </ol>
                            <ul className='category-content'>
                                <li>Передайте образцы продукции в аккредитованную лабораторию для <br />проведения испытаний.</li>
                                <li>Лаборатория контроля качества пищевых продуктов при Кыргызской <br />государственной академии аграрных наук</li>
                                <li>Адрес:<a href="https://2gis.kg/bishkek/geo/15763234351077599"> г. Бишкек, ул. Фрунзе, 429</a>.</li>
                                <li>Телефон:<a href="tel:+996312660460"> +996 312 660 460</a>.</li>
                                <li>Веб сайт:<a href="http://www.gosstandart.kg"> www.gosstandart.kg</a>.</li>
                            </ul>
                        <ol start={5}>
                            <li className='category-title'>Получение сертификата</li>
                        </ol>
                            <ul className='category-content'>
                                <li>После успешного проведения испытаний и получения положительных <br />результатов, Центр стандартизации и метрологии выдаст сертификат <br />соответствия.</li>
                                <li>Сертификат будет подтверждать, что продукция соответствует <br />установленным стандартам качества и безопасности.</li>
                            </ul>
                    </div>
                    <div className='instruction-card seeds'>
                        <span className='instruction-card-title'>Семена и посадочный материал</span>
                    </div>
                    <div className='instruction-card plant-food'>
                        <span className='instruction-card-title'>Удобрения и средства защиты растений</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Instruction
