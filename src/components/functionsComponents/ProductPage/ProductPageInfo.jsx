import productPage from "../../pages/Product Page/ProductPage.module.scss";
import MoreProduct from "../MoreProduct/MoreProduct";

const ProductPageInfo = ({
  img,
  head,
  inValid,
  price,
  body,
  prefix,
  amount,
}) => {
  return (
    <>
      <div className={productPage.productPageInfo}>
        <div className={productPage.imgProductInfo}>
          <img src={img} alt="Product Image" />
          <hr />
        </div>
        <div className={productPage.productInfo}>
          <p>{head}</p>
          <p>
            <i className="fa-solid fa-check" /> {inValid}
          </p>
          <p className={productPage.price}>{price}</p>
          <div>
            <button className={productPage.inCart}>В корзину</button>
            <button className={productPage.add}>+</button>
            <span className={productPage.amount}>{amount} шт.</span>
            <button>-</button>
          </div>
          <div className={productPage.volumeButtons}>
            <button
              className={productPage.buttonVolume + " " + productPage.active}
            >
              4 л
            </button>
            <button className={productPage.buttonVolume}>57 л</button>
            <button className={productPage.buttonVolume}>209 л</button>
          </div>
          <button className={productPage.goCart}>Перейти к корзине</button>
        </div>
      </div>
      <div className={productPage.productInfoMore}>
        <a href="#">Описание</a>
        <a href="#">Характеристика</a>
        <p>{body}</p>
        <p>{prefix}</p>
        <hr />
      </div>
      <div className={productPage.moreProducts}>
        <p>С этими товарами также берут</p>
        <div className={productPage.moreProductsBuy}>
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
          <MoreProduct
            img="Small product.png"
            title="Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое"
            inValid="В наличии"
            price="6780р"
          />
        </div>
      </div>
    </>
  );
};

export default ProductPageInfo;
