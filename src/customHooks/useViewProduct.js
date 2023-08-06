import useProducts from "./useProducts";

export default function useViewProduct(productId=1){
    const {products} = useProducts();
    console.log(products);
    console.log(productId);
    const selectedProduct = products.find(product=>product._id == (productId))
    console.log(selectedProduct);
    return[selectedProduct]
}