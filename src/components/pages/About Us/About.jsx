import NewsCards from "../../functionsComponents/NewsCards/NewsCards";
import PeopleAboutAs from "../../functionsComponents/PeoplesAboutUs/PeopleAboutAs";
import about from "./About.module.scss";

function About() {
  return (
    <div className={about.about}>
      <p>О компании</p>
      <div className={about.aboutData}>
        <div className={about.aboutDataText}>
          <h2>
            «Quality Oil» –<br /> ваш надёжный партнёр в<br /> поставках
            <br /> смазочных материалов с 1994 г.
          </h2>
          <p>
            ООО «Ойл-Форби» начала свою деятельность
            <br /> в 1994 году с поставок автозапчастей
            <br /> и аксессуаров для автомобилей.
          </p>
        </div>
        <div className={about.aboutDataNumber}>
          <div className={about.aboutDataNumberTop}>
            <p>
              <span className={about.aboutDataNumberInfo}>19</span>{" "}
              <span className={about.aboutDataNumberMoreInfo}>тыс</span>
              <br /> Поставок
            </p>
            <p>
              <span className={about.aboutDataNumberInfo}>29</span>
              <br /> Лет На рынке
            </p>
          </div>
          <div className={about.aboutDataNumberBottom}>
            <p>
              <span className={about.aboutDataNumberInfo}>1,2</span>{" "}
              <span className={about.aboutDataNumberMoreInfo}>млн</span>
              <br /> Довольных клиентов
            </p>
            <p>
              <span className={about.aboutDataNumberInfo}>7</span>
              <br /> Стран присутствия
            </p>
          </div>
        </div>
      </div>
      <div className={about.aboutMission}>
        <img src="/Gaz.png" alt="Oil" />
        <div className={about.aboutMissionText}>
          <p>
            Наша миссия — делать жизнь людей проще
            <br /> и лучше
          </p>
          <div className={about.aboutMissionMoreText}>
            <p>
              Вы получаете масла ведущих
              <br /> производителей в сжатые
              <br /> сроки и по доступной
              <br /> стоимости.
            </p>
            <p>
              Мы предпочитаем делать
              <br /> простые, удобные схемы
              <br /> сотрудничества, которые
              <br /> прозрачны и понятны.
            </p>
            <p>
              Наши продукты только
              <br /> высокого уровня, что
              <br /> отмечается международными
              <br /> экспертами.
            </p>
          </div>
        </div>
      </div>
      <div className={about.theyTalkAboutUs}>
        <p>О нас говорят</p>
        <div className={about.theyTalkAboutUsText}>
          <div className={about.arrow}>
            <i className="fa-solid fa-chevron-left" />
          </div>
          <PeopleAboutAs
            name="Евгений Кузьмин"
            image="/person.png"
            title="директор ANK group"
            body="У предварительного исследования в UX проектах может быть много разных причин, но все они
            направлены на поиск решения проблемы и достижение необходимых результатов."
          />
          <div className={about.arrow}>
            <i className="fa-solid fa-chevron-right" />
          </div>
        </div>
      </div>
      <div className={about.lastNews}>
        <p>Последние новости</p>
        <div className={about.lastNewsInfo}>
          <div>
            <NewsCards
              img="NewsFirst.png"
              title="Когда нужно менять масло в машине?"
              body="Сегодня мы подробно расскажем, 
              когда лучше всего 
              менять масло в машине..."
              date="27/01/23"
            />
            <NewsCards
              img="NewsTwo.png"
              title="Правильный уход за машиной зимой"
              body="Сегодня мы подробно расскажем, 
              когда лучше всего 
              менять масло в машине..."
              date="27/01/23"
            />
          </div>
          <div>
            <NewsCards
              img="NewsThree.png"
              title="Какое масло подобрать зимой"
              body="Сегодня мы подробно расскажем, 
              когда лучше всего 
              менять масло в машине..."
              date="27/01/23"
            />
            <NewsCards
              img="NewsFour.png"
              title="Что делать если встал на трассе"
              body="Сегодня мы подробно расскажем, 
              когда лучше всего 
              менять масло в машине..."
              date="27/01/23"
            />
          </div>
          <div>
            <NewsCards
              img="NewsFive.png"
              title="Что делать если протекает масло"
              body="Сегодня мы подробно расскажем, 
              когда лучше всего 
              менять масло в машине..."
              date="27/01/23"
            />
            <NewsCards
              img="NewsSix.png"
              title="ТОП 10 худших популярных масел"
              body="Сегодня мы подробно расскажем, 
              когда лучше всего 
              менять масло в машине..."
              date="27/01/23"
            />
          </div>
        </div>
        <button>Больше новостей</button>
      </div>
    </div>
  );
}

export default About;
