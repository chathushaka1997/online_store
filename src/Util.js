import axios from "axios";
import { environment } from "./environment/environment";

export class Util {
  static apiPublicUrl(path) {
    return environment.api_url + "/api/public/" + path;
  }

  static apiAuthUrl(path) {
    return environment.api_url + "/api/auth/" + path;
  }

  static initAxios() {
    axios.interceptors.request.use((req) => {
      if (req.url.includes(environment.api_url)) {
        req.headers.authorization = "Bearer " + localStorage.getItem("token");
      }
      return req;
    });

    axios.interceptors.response.use(
      function (response) {
        return response.data;
      },
      function (error) {
        return { success: false, data: undefined, error: error?.response?.data?.error || error?.message };
      }
    );
  }
}

Util.initAxios();
