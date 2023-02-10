import NewsCards from "../../functionsComponents/NewsCards/NewsCards";
import news from "./News.module.scss";

function News() {
  return (
    <div className={news.lastNews}>
      <p>Новости</p>
      <div className={news.filter}>
        <p>
          Сортировать:
          <br />
          <select>
            <option>Сначала новые</option>
            <option>Сначала стары</option>
            <option>По популярности</option>
          </select>
        </p>
        <p>
          Тема:
          <br />
          <select>
            <option>Все</option>
            <option>Масло</option>
            <option>Кто на самом деле такой этот КИРИЛЛ?</option>
          </select>
        </p>
      </div>
      <div className={news.lastNewsInfo}>
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
      <button>Загрузить еще</button>
    </div>
  );
}
export default News;
