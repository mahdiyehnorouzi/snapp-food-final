import axios from "axios";
import cleanUp from "./interceptors/response/axios-clean-up";
import latLong from "./interceptors/request/lat-long";

const httpClient = axios.create({
  baseURL: "https://snappfood.ir/",
});

httpClient.interceptors.response.use(cleanUp);
httpClient.interceptors.request.use(latLong);

export default httpClient;
