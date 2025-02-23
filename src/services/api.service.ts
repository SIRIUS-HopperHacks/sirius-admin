import axios, { Axios } from "axios";

export class APIService {
  baseURL: string;
  axios: Axios;
  constructor() {
    this.baseURL = "http://localhost:10000";
    this.axios = axios.create({
      baseURL: this.baseURL,
    });
  }

  async signUp( email:string, password: string) {
    return await this.axios.post("/admin/register", { email, password });
  }

  async login(email: string, password: string) {
    return await this.axios.post("/admin/login", { email, password });
  }

  async getAllAlerts() {
    return await this.axios.get("/alert/list");
  }

  async getAlertById(id: string) {
    return await this.axios.get(`/alert?alertId=${id}`);
  }
}
