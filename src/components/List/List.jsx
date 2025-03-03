import React from "react";
import "./List.css";

const List = () => {
  return (
    <section className="certification-list">
      <div className="list-wrapper">
        <div className="culture-list">
          <div className="list-title">
            <h2>
              Ассортимент агрономических товаров которые могут быть
              сертифицированы
            </h2>
          </div>
          <div className="culture-card">
            <div className="culture-card-block">
              <div className="culture-title">
                <h3>Зерновые культуры</h3>
              </div>
              <div className="clulture-list">
                <ul>
                  <li>Пшеница</li>
                  <li>Ячмень</li>
                  <li>Кукуруза</li>
                  <li>Рис</li>
                </ul>
              </div>
            </div>
            <div className="bean">
              <div className="bane-title">
                <h3>Бобовые культуры</h3>
              </div>
              <div className="bean-list">
                <ul>
                  <li>Фасоль</li>
                  <li>Горох</li>
                  <li>Чечевица</li>
                </ul>
              </div>
            </div>
            <div className="tech-culture">
              <div className="tech-title">
                <h3>Технические культуры</h3>
              </div>
              <div className="tech-list">
                <ul>
                  <li>Табак</li>
                  <li>Рапс</li>
                  <li>Соя</li>
                  <li>Подсолнечник</li>
                </ul>
              </div>
            </div>
            <div className="feed-culture">
              <div className="feed-title">
                <h3>кормовые культуры</h3>
              </div>
              <div className="feed-list">
                <ul>
                  <li>Люцерны</li>
                  <li>Клевер</li>
                  <li>Силосные культуры</li>
                </ul>
              </div>
            </div>
            <div className="potato">
              <div className="potato-title">
                <h3>Картофель и овощи:</h3>
              </div>
              <ul>
                <li>Картофель</li>
                <li>Морковь</li>
                <li>Лук</li>
                <li>Томат</li>
                <li>Капуста</li>
                <li>Огурцы</li>
                <li>Перец и т.д</li>
              </ul>
            </div>
            <div className="fruits">
              <div className="fruits-title">
                <h3>Фрукты и ягоды</h3>
              </div>
              <ul>
                <li>Яблоки</li>
                <li>Вишня</li>
                <li>Персики</li>
                <li>Абрикосы</li>
                <li>Малина</li>
                <li>Виноград и т.д</li>
              </ul>
            </div>
            <div className="Seed">
              <div className="seed-title">
                <h3>Семена и посадочный материал</h3>
                <p>
                  Семена сельскохозяйственных культур(зерновые, овощные,
                  технические, фрукты) Посадочный материао для садовых и
                  декоративных культур (например, саженцы фруктовых деревьев,
                  декоративые растения и т.д)
                </p>
              </div>
            </div>
            <div className="chem">
              <div className="chem-title">
                <h3>Химические средства защиты растений(пестициды)</h3>
              </div>
              <div className="chem-list">
                <ul>
                  <li>Инсектициды</li>
                  <li>Фунгициды</li>
                  <li>Гербициды</li>
                  <li>Регенераторы роста растений</li>
                  <li>Препараты для защиты от болезней и вредителей</li>
                </ul>
              </div>
            </div>
            <div className="minerals">
              <div className="minerals-title">
                <h3>Минеральные удобрения</h3>
              </div>
              <div className="minerals-list">
                <ul>
                  <li>Азотные удобрения</li>
                  <li>Фосфорные удобрения</li>
                  <li>Калийные удобрения</li>
                  <li>Комплексные удобрения</li>
                  <li>Микроэлементы (например, бор, медь, марганец и др.)</li>
                </ul>
              </div>
            </div>
            <div className="organic">
              <div className="organic-title">
                <h3>Органические удобрения</h3>
                <div className="organic-list">
                  <ul>
                    <li>Компост</li>
                    <li>Навоз</li>
                    <li>Торф</li>
                    <li>Перегной</li>
                    <li>Природные минералы и добавки для улучшения почвы</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="AgroChem">
              <div className="agrochem-title">
                <h3>Агрохимия</h3>
              </div>
              <div className="agrochem-list">
                <ul>
                  <li>
                    Продкуты для коррекции почвы (известь, гипс, кальциевые
                    добавки)
                  </li>
                  <li>
                    Продкуты для улучшения структуры почвы (например, гипс и
                    известных)
                  </li>
                </ul>
              </div>
            </div>
            <div className="tech">
              <div className="tech-title">
                <h3>Техника и оборудование для сельского хозяйства</h3>
              </div>
              <div className="tech-list">
                <ul>
                  <li>
                    Сельскохозяйственная техника (трактора, кобайны, сеялки,
                    культиваторы и т.д)
                  </li>
                  <li>
                    оборудование для орошения (трубопроводы, насосы, капельное
                    орошение)
                  </li>
                  <li>
                    Специализированное оборудование для обработки почвы и
                    посевов
                  </li>
                </ul>
              </div>
            </div>
            <div className="animals">
              <div className="animals-title">
                <h3>Животноводство и ветеринария</h3>
              </div>
              <div className="animals-list">
                <ul>
                  <li>
                    Ветеринарные препараты и средства для профилактики
                    заболеваний
                  </li>
                  <li>Корма для животных</li>
                  <li>
                    Продукты для улучшения здоровья и продуктивности
                    Сельскохозяйственных животных
                  </li>
                </ul>
              </div>
            </div>
            <div className="plastic">
              <div className="plastic-title">
                <h3>Пластиковые и металлические конструкции</h3>
              </div>
              <ul>
                <li>
                  Тары для хранения и перевозки Сельскохозяйственной продкуции
                </li>
                <li>Бочки, контейнеры, упаковка для хранения продуктов</li>
              </ul>
            </div>
          </div>
          <div className="warning">
            <div className="warning-wrapper">
              <h2>
                Сертификация этих товаров может включать проверку качества,
                безопасности, соответствия стандартам (напр., ГОСТ или
                международным стандартам) и экологическим требованиям. напирмер,
                сертификация на соответствие стадартам органического сельского
                хозяйства или на наличие разрешения для использования химикатов.
              </h2>
              <h2>
                Процесс сертификации обычно проходит через аккредетированные
                органы, как государственние, так и чатсные, и может зависеть от
                типа продукции и требований рынка.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
