import ProductPageInfo from "../../functionsComponents/ProductPage/ProductPageInfo";
import productPage from "./ProductPage.module.scss";

const ProductPage = () => {
  return (
    <div className={productPage.productPage}>
      <a href="#">{"<"}Вернуться</a>
      <ProductPageInfo
        img="product.png"
        head="Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое"
        amount="1"
        inValid="В наличии"
        price="6780р"
        body="Моторное масло Shell Helix Ultra ECT C3 создано на основе самых современных технологий для совместимости с 
            системами снижения токсичности выхлопных газов, которые позволяют сохранять чистоту сажевых фильтров для поддержания 
            высоких эксплуатационных характеристик двигателя. Кроме того, данное масло помогает уменьшить трение между деталями
             двигателя для обеспечения повышенной экономии топлива."
        prefix="Моторное масло Shell Helix Ultra 0W-40 API SP синтетическое"
      />
    </div>
  );
};

export default ProductPage;
