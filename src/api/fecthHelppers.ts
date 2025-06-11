import { getToken } from "../helpers/utils";
import { getItem } from "../services/localstrorage.service";

// =========================
export const get = async (url: string, options: any = {}) => {
  try {
    // ================ pour securité
    options.headers = {
      ...options.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    };
    // ========================
    const response = await fetch(url, options);
    if (!response.ok) {
      return {
        isSuccess: false,
      };
    }
    return await response.json();
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
};
// ===================

export const post = async (url: string, data: any, options: any = {}) => {
  try {
    options.method = "POST";
    options.body = JSON.stringify(data);
    options.headers = {
      ...options.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      return {
        ...error,
        isSuccess: false,
      };
    }

    return await response.json();
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
};
// ===================
export const put = async (url: string, data: any, options: any = {}) => {
  try {
    options.method = "PUT";
    options.body = JSON.stringify(data);
    options.headers = {
      ...options.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      return {
        ...error,
        isSuccess: false,
      };
    }

    return await response.json();
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
};
// ===================
export const remove = async (url: string, options: any = {}) => {
  try {
    options.method = "DELETE";
    options.headers = {
      ...options.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      return {
        ...error,
        isSuccess: false,
      };
    }

    return await response.json();
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
};
