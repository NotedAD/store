import about from "../../pages/About Us/About.module.scss";
import news from "../../pages/News/News.module.scss";
import pageArticle from "../../pages/Page Article/PageArticle.module.scss";

const NewsCards = ({ img, title, body, date }) => {
  return (
    <>
      <div
        className={
          about.lastNewsInfoElement + " " + news.lastNewsInfoElement + " " + pageArticle.lastNewsInfoElement
        }
      >
        <img src={img} alt="1" />
        <p>{title}</p>
        <p>{body}</p>
        <a href="#">Подробнее...</a>
        <span>{date}</span>
      </div>
    </>
  );
};

export default NewsCards;
