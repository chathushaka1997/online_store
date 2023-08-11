import "./Products.css";
import FilterComp from "../../components/FilterComp";
import useFilterProducts from "../../customHooks/useFilterProducts";
import ProductsCardContainer from "./ProductsCardContainer";
import SearchKeyWordDisplay from "./SearchKeyWordDisplay";
import ProductSkeletonLoading from "./ProductSkeletonLoading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, keyword] = useFilterProducts();

  useEffect(() => {
    console.log(products);
    console.log(products === undefined);
  }, [products]);

  const renderProducts = (products) => {
    if (products && products?.length > 0) {
      return <ProductsCardContainer products={products} />;
    }
    return null;
  };

  return (
    <div className="container mt-4  mb-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
      {products === undefined ? <ProductSkeletonLoading cardsNumber={8} /> : null}

      {/*   <div>
        <FilterComp />
      </div> */}
      <SearchKeyWordDisplay keyword={keyword} count={products?.length || 0} />
      {renderProducts(products)}
    </div>
  );
};

export default Products;
