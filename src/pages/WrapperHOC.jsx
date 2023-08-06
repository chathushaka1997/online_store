import React, { useEffect, useState } from "react";
import { ProductService } from "../services/ProductServices";

const wrapperHOC = (Element) => {
  const WrapperHOC =  (props) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
              const productsSet = (await ProductService.getAllProducts()).data.products;
              setProducts(productsSet)
              setIsLoading(false)
            } catch (error) {
              console.log(error);
            }
          };
     
          fetchProducts();
 
      }, []);
      if(isLoading){
        return <p>Loading...</p>
      }

    return <Element {...props} productsSet={products}/>;
  };
  return WrapperHOC
};

export default wrapperHOC;
