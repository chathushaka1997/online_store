import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductService } from "../services/ProductServices";
import { addProduct, toggleInitalLoading } from "../features/product/productSlice";

export default function useProducts() {
  const products = useSelector((state) => state.product.products);
  const isInitalLoaded = useSelector((state) => state.product.isInitialLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const productsSet = (await ProductService.getAllProducts()).data.products;
          dispatch(addProduct(productsSet));
          dispatch(toggleInitalLoading(true));
        } catch (error) {
          console.log(error);
        }
      };
    if (!isInitalLoaded) {
      fetchProducts();
    }
  }, []);
  return [products];
}
