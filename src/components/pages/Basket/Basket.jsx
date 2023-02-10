import MoreProduct from "../../functionsComponents/MoreProduct/MoreProduct";
import basket from "./Basket.module.scss";

const Basket = () => {
  return (
    <div className={basket.basket}>
      <a href="#">{"<"}Вернуться</a>
      <p>Корзина</p>

      <div className={basket.moreProducts}>
        <p>С этими товарами также берут</p>
        <div className={basket.moreProductsBuy}>
          <MoreProduct
            img="Small product.png"
            title="Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое"
            inValid="В наличии"
            price="6780р"
          />
          <MoreProduct
            img="Small product.png"
            title="Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое"
            inValid="В наличии"
            price="6780р"
          />
          <MoreProduct
            img="Small product.png"
            title="Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое"
            inValid="В наличии"
            price="6780р"
          />
        </div>
      </div>
    </div>
  );
};

export default Basket;
