import axios from "axios";

export class ProductService {
  static async getAllProducts() {
    const url = "https://dummyjson.com/products";
    const res = await axios.get(url);
    return res;
  }
}
