import axios from "axios";
import { Util } from "../Util";

export class CategoryServices {
  static TOKEN_KEY = "token";
  static async createCategory(categoryData) {
    const ep = Util.apiAuthUrl("category/create");
    const res = await axios.post(ep, categoryData);
    if (res.success) {
      console.log(res);
    } else {
      console.log(res);
    }
    return res;
  }

  static async getCategories() {
    const ep = Util.apiAuthUrl("category/get");

    const res = await axios.get(ep);

    console.log(res);

    return res;
  }
  
}
