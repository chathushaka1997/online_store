import useFilterProducts from "../customHooks/useFilterProducts";
import SliderComp from "../components/slider/SliderComp";
import ProductsCardContainer from "./products/ProductsCardContainer";

const Dasboard = () => {
  const [products] = useFilterProducts();

  return (
    <>
      <SliderComp />
      <div className="container mt-5 mb-5" style={{ color: "#3498db" }}>
        <h2>New Arrivals</h2>
        <hr />
        <ProductsCardContainer products={products.slice(0, 4)} />
        <h2 className="mt-5">Most Popular</h2>
        <hr />
        <ProductsCardContainer products={products.slice(4, 8)} />
        <h2  className="mt-5">Recommended for You</h2>
        <hr />
        <ProductsCardContainer products={products.slice(2, 6)} />
      </div>
    </>
  );
};

export default Dasboard;
