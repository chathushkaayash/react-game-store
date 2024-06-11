import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../../hooks/useData";
import { Genre } from "./genreService";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: "c7b18323a47d40c394ea5b019646b1f5",
    key: "0896be4b90fb4060b4c2f5dc1275fde1",
  },
});

class APIClient<T> {
  endpoint: string;
  requestConfig?: AxiosRequestConfig;
  deps?: any[];

  constructor(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: any[]
  ) {
    this.endpoint = endpoint;
    this.requestConfig = requestConfig;
    this.deps = deps;
  }

  getAll = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { ...this.requestConfig })
      .then((res) => res.data);
  };

  create = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
