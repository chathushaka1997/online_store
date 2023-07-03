import "./Products.css";
import useProducts from "../customHooks/useProducts";
import { Link } from "react-router-dom";

const Products = () => {
  const [products] = useProducts()

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-3 product-container">
            <Link to={`/product/${product.id}`}>
            <div className="sub-container">
              <h5 className="text-truncate p-2">{product.title}</h5>
              <img className="" src={product.thumbnail} alt={product.title} />
              <div className="details-container p-2">
                <p className="">{product.description}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Products;
