import axios from "axios";
import { Util } from "../Util";

export class UserServices {
  static TOKEN_KEY = "token";
  static async register(userLoginData) {
    const ep = Util.apiPublicUrl("register");
    const res = await axios.post(ep, userLoginData);
    if (res.success) {
      console.log(res);
      console.log(res.data.token);
      localStorage.setItem(UserServices.TOKEN_KEY, res.data.token); //TODO read token from cookie and remove this implementation
    } else {
      console.log(res);
    }
    return res;
  }
  static async login(userLoginData) {
    const ep = Util.apiPublicUrl("login");
    const res = await axios.post(ep, userLoginData);
    if (res.success) {
      console.log(res);
      console.log(res.data.token);
      localStorage.setItem(UserServices.TOKEN_KEY, res.data.token); //TODO read token from cookie and remove this implementation
    } else {
      console.log(res);
    }
    return res;
  }
  static async getMe() {
    const ep = Util.apiAuthUrl("get-user-data");

    const res = await axios.get(ep);

    if (res.error) {
      this.userLogout();
    }

    return res;
  }
  static userLogout() {
    localStorage.removeItem(UserServices.TOKEN_KEY); //TODO read token from cookie and remove this implementation
  }
}
