import "./Products.css";
import FilterComp from "../../components/FilterComp";
import useFilterProducts from "../../customHooks/useFilterProducts";
import ProductsCardContainer from "./ProductsCardContainer";

const Products = () => {
  const [products] = useFilterProducts();

  const renderProducts = (products) => {
    if (products && products?.length > 0) {
      return <ProductsCardContainer products={products} />;
    }
    return <h6 className="text-center">No Products...</h6>;
  };

  return (
    <div className="container">
      <div>
        <FilterComp />
      </div>
      {renderProducts(products)}
    </div>
  );
};

export default Products;
