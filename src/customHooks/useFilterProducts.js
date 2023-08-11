import { useLocation } from "react-router-dom";
import useProducts from "./useProducts";
import { useEffect, useState } from "react";

const useFilterProducts = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const inStock = searchParams.get("instock");
  const brand = searchParams.get("brand");
  const rating = searchParams.get("rating");
  const keyword = searchParams.get("keyword");
  const {products} = useProducts();
  const [filteredArray, setFilteredArray] = useState(products);
  useEffect(() => {
    setFilteredArray(products);
    if (keyword) {
      setFilteredArray((prevState) => {
        const searchTerm = keyword.toLowerCase();
        return prevState.filter(product => {
          const title = product.title.toLowerCase();
          const keywords = searchTerm.split(" ");
          return keywords.every(keyword => title.includes(keyword));
        });
      });
    }
    if (category) {
      setFilteredArray((prevState) => {
        return prevState.filter((product) => {
          return product.category === category;
        });
      });
    }
    if (brand) {
      setFilteredArray((prevState) => {
        return prevState.filter((product) => {
          return product.brand === brand;
        });
      });
    }
    if (inStock) {
      setFilteredArray((prevState) => {
        return prevState.filter((product) => {
          return product.stock>0;
        });
      });
    }
    if (rating) {
      setFilteredArray((prevState) => {
        return prevState.filter((product) => {
          return product.rating>4.5;
        });
      });
    }
  }, [keyword, products,brand,category,inStock,rating]);


  return [filteredArray,keyword];
};

export default useFilterProducts;
