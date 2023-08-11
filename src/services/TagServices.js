import axios from "axios";
import { Util } from "../Util";

export class TagServices {
  static async createTag(tagData) {
    const ep = Util.apiAuthUrl("tag/create");
    const res = await axios.post(ep, tagData);
    return res;
  }

  static async editTag(tagData) {
    const ep = Util.apiAuthUrl("tag/update");
    const res = await axios.post(ep, tagData);
    return res;
  }
  static async getTags() {
    const ep = Util.apiPublicUrl("tag/get");
    const res = await axios.get(ep);
    return res;
  }
}
