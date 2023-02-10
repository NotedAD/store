import moreProduct from "./MoreProduct.module.scss";

const MoreProduct = ({ img, title, inValid, price }) => {
  return (
    <div className={moreProduct.moreProduct}>
      <div className={moreProduct.moreProductInfo}>
        <img src={img} alt="Product" />
        <p className={moreProduct.moreProductInfoTitle}>{title}</p>
        <p>
          <i className="fa-solid fa-check" /> {inValid}
        </p>
        <p>{price}</p>
        <div className={moreProduct.inCartButton}>
          <button className={moreProduct.inCart}>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default MoreProduct;
