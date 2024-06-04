import { API_DOMAIN_NAME, BASE_URL } from "@config-global";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOjEsImxvZ2dlZF9pbl91c2VyIjoxLCJkb21haW5fbmFtZSI6Imthc2h0aSIsInVzZXIiOnsiaWQiOjEsImlzX2FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZF9ieSI6MCwidXBkYXRlZF9ieSI6MCwiZGVsZXRpb25EYXRlIjpudWxsLCJmaXJzdE5hbWUiOiJBeXVzaCIsImxhc3ROYW1lIjoic29tYW5pIiwiZnVsbE5hbWUiOiJBeXVzaCBzb21hbmkiLCJlbWFpbCI6ImF5dXNoQGthc2h0aS5jb20iLCJlbWFpbF92ZXJpZmljYXRpb24iOiIxIiwicGFzc3dvcmQiOiIkMmIkMTIkMXNYcVovbHVDN2RtUDNSZFd1Y0pzTy5wZy5ERS91V0hqWlZBQXo2MG56SE5GLlFobTdFQjIiLCJwaG9uZSI6Ijk1OTE3Mzg2MzAiLCJwaG9uZV92ZXJpZmljYXRpb24iOnRydWUsInJvbGVfaWQiOjEsInNpZ25hdHVyZSI6bnVsbCwiaW1hZ2UiOm51bGwsImNvbG9yQ29kZSI6IiNGRjAwMDAiLCJmaXJlYmFzZV90b2tlbiI6bnVsbCwicHdkX3Rva2VuIjpudWxsLCJpZFRva2VuIjpudWxsLCJ1aWQiOm51bGwsInB3ZF9nZW5lcmF0b3IiOnRydWUsIndyb25nX2NyZWRlbnRpYWxfY291bnQiOjAsIndyb25nX2NyZWRlbnRhaWxfdGltZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyNC0wMS0xNlQwODo1Mjo1NC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNC0wNC0yMlQwOTowNjoxMi4wMDBaIn0sImNvbXBhbnkiOnsiaWQiOjQ0NiwiaXNfYWN0aXZlIjpmYWxzZSwiaXNfZGVsZXRlZCI6ZmFsc2UsImlzX3JlYWRlZCI6ZmFsc2UsInBlcm1pc3Npb25faWQiOjAsImNyZWF0ZWRfYnkiOjAsInVwZGF0ZWRfYnkiOjAsImRlbGV0aW9uRGF0ZSI6bnVsbCwiZGJjb25maWdfaWQiOm51bGwsInVzZXJfaWQiOjExODMsImNvbXBhbnlfbmFtZSI6Imthc2h0aSIsImRvbWFpbl9uYW1lIjoia2FzaHRpIiwiY3JlYXRlZEF0IjoiMjAyNC0wMS0xNlQwODo1MjozMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNC0wMS0xNlQwODo1MjozMC4wMDBaIn0sImlhdCI6MTcxNDQ2NTEyMywiZXhwIjoxNzE0NTUxNTIzfQ.eH_VEgddejiIdvKjsFx6BrASjt6I4LWFtGvaHSMyOjo";

export const loanAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const YO_INDI_API = axios.create({
  baseURL: "https://api.yoindi.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

loanAPI.interceptors.request.use(
  async function (options) {
    let apiKey = localStorage.getItem("apiKey");
    let secretKey = localStorage.getItem("secretKey");
    if (typeof apiKey == "string" && typeof secretKey == "string") {
      options.headers["apiKey"] = `${apiKey}`;
      options.headers["apiSecret"] = `${secretKey}`;
      options.headers["domain_name"] = API_DOMAIN_NAME;
    }
    return options;
  },
  function (error) {
    return Promise.reject(error);
  }
);

YO_INDI_API.interceptors.request.use(
  async function (options) {
    let apiKey = localStorage.getItem("apiKey");
    let secretKey = localStorage.getItem("secretKey");
    if (typeof apiKey == "string" && typeof secretKey == "string") {
      options.headers["apiKey"] = `${apiKey}`;
      options.headers["apiSecret"] = `${secretKey}`;
      options.headers["domain_name"] = API_DOMAIN_NAME;
    }
    return options;
  },
  function (error) {
    return Promise.reject(error);
  }
);
