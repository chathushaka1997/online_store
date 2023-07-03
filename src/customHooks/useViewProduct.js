import useProducts from "./useProducts";

export default function useViewProduct(productId){
    const [products] = useProducts();
    console.log(products);
    console.log(productId);
    const selectedProduct = products.find(product=>product.id === parseInt(productId))
    console.log(selectedProduct);
    return[selectedProduct]
}