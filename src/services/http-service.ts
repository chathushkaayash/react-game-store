import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();

    const request = apiClient.get(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  insertEntity<T>(newUser: T) {
    return apiClient.post(this.endpoint, newUser);
  }
}

const create=(endpoint:string)=>new HttpService(endpoint);

export default create;
