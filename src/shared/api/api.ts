import axios, { AxiosRequestConfig } from "axios";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

// @ts-ignore
export const $api = axios.create({
    baseURL: __API__,
});

// @ts-ignore
$api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
        config.headers.Authorization =
            localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
    }
    return config;
});
