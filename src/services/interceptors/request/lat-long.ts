import type { InternalAxiosRequestConfig } from "axios";

export default function latLong(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  return {
    ...config,
    url: `${config.url}&lat=35.68894750630155&long=51.4830973168`,
  };
}
