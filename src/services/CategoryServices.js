import axios from "axios";
import { Util } from "../Util";

export class CategoryServices {
  static TOKEN_KEY = "token";
  static async createCategory(categoryData) {
    const ep = Util.apiAuthUrl("category/create");
    const res = await axios.post(ep, categoryData);
    return res;
  }

  static async editCategory(categoryData) {
    const ep = Util.apiAuthUrl("category/update");
    const res = await axios.post(ep, categoryData);
    return res;
  }

  static async getCategories() {
    const ep = Util.apiPublicUrl("category/get");
    const res = await axios.get(ep);
    return res;
  }
  
}
