import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductService } from "../services/ProductServices";
import { addProduct, toggleInitalLoading } from "../features/product/productSlice";
import { toast } from "react-toastify";

export default function useProducts() {
  const products = useSelector((state) => state.product.products);
  const isInitalLoaded = useSelector((state) => state.product.isInitialLoaded);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsSet = (await ProductService.getAllProducts())?.data;
        console.log(productsSet);
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

  const createNewProduct = async (formData) => {
    let newProductData = undefined;
    try {
      const response = await ProductService.createProduct(formData);
      if (response.success) {
        newProductData = response.data;
        console.log(newProductData);
        dispatch(addProduct([...products, newProductData]));
        toast.success(`New product "${formData?.title}" created`);
      } else {
        console.log(response?.error);
        setError(response?.error || "Create product failed");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || "Create product failed");
    }
  };

  const handleEditProduct = async (productData) => {
    setIsLoading(true);
    let newProductData = undefined;
    try {
      const response = await ProductService.editProduct(productData);
      console.log(response);
      if (response.success) {
        newProductData = response.data;
        dispatch(
          addProduct(
            products.map((product) => {
              if (product._id == productData._id) {
                return newProductData;
              }
              return product;
            })
          )
        );
        toast.success(`"${newProductData?.title}" updated`);
      } else {
        setError(response?.error || "Update product failed");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || "Update product failed");
    }
    setIsLoading(false);
  };

  const getProductById = (id) => {
    return products?.find((product) => product?._id == id);
  };
  return { products, createNewProduct, getProductById, error, handleEditProduct };
}
