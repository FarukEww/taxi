import axios, {
  AxiosHeaders,
  AxiosResponse,
  Method,
  RawAxiosRequestHeaders,
  ResponseType,
} from "axios";
import { useAuthStore } from "../store/auth";

let authToken = useAuthStore.getState().token;

useAuthStore.subscribe((state: any) => {
  //subscribe to token change and updating it
  authToken = state.token;
});

axios.interceptors.request.use(
  function (config: any) {
    if (!config.headers) {
      config.headers = {};
    }
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
    // config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    if (response.headers["content-type"]?.includes("application/json")) {
      response = response.data;
      if (response.status) {
        return response;
      } else {
        return Promise.reject(response);
      }
    } else if (response.status === 200) {
      return response;
    }

    return Promise.reject(response);
  },

  function (error) {
    console.log(error, "error");

    if (error?.response?.status === 401 || error?.response?.status === 403) {
      console.log("Unauthorized access. Redirecting to login page.");
      // removeUser();
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const message =
      error.response?.status === 404
        ? error?.response?.data?.message
        : "Something went wrong";
    return Promise.reject(message);
  }
);

type MethodsHeaders = Partial<
  {
    [Key in Method as Lowercase<Key>]: AxiosHeaders;
  } & { common: AxiosHeaders }
>;

export const request = async ({
  url,
  method = "GET",
  params,
  body,
  headers,
  responseType,
}: {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: any;
  body?: any;
  headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders;
  responseType?: ResponseType;
}) => {
  const BASE_URL = "http://192.168.1.85:5001/api/v1/";

  const mergedHeaders = {
    ...headers,
    key: "ConnectPopo@23",
  };

  const res: AxiosResponse = await axios.request({
    url: BASE_URL + url,
    method,
    params,
    data: body,
    headers: mergedHeaders,
    responseType,
  });

  return res;
};
