import axios from "axios";
import { Util } from "../Util";

export class ProductService {
  static async getAllProducts() {
    const url = Util.apiPublicUrl("product/get");
    const res = await axios.get(url);
    return res;
  }

  static async createProduct(productData) {
    const ep = Util.apiAuthUrl("product/create?searchTag=''");
    const res = await axios.post(ep, productData);
    return res;
  }

  static async editProduct(productData) {
    const ep = Util.apiAuthUrl("product/edit");
    const res = await axios.post(ep, productData);
    return res;
  }
}
