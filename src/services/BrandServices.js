import axios from "axios";
import { Util } from "../Util";

export class BrandServices {
  static async createBrand(brandData) {
    const ep = Util.apiAuthUrl("brand/create");
    const res = await axios.post(ep, brandData);
    return res;
  }

  static async editBrand(brandData) {
    const ep = Util.apiAuthUrl("brand/update");
    const res = await axios.post(ep, brandData);
    return res;
  }

  static async getBrands() {
    const ep = Util.apiAuthUrl("brand/get");
    const res = await axios.get(ep);
    return res;
  }
}
