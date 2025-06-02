import { apiUrl, webApiUrl } from "../environements/environement";
import { User } from "../models/user";
import { setItem } from "../services/localstrorage.service";

import { get, post } from "./fecthHelppers";

export const getDatas = async (entityName: string) => {
  const url = webApiUrl + entityName;

  const datas = await get(url);

  return datas;
};
// ==============
export const getDatasByPage = async (
  entityName: string,
  page = 1,
  limit = 5
) => {
  const url =
    webApiUrl +
    entityName +
    "/by/page" +
    "?pageNumber=" +
    page +
    "&pageLimit=" +
    limit;
  const datas = await get(url);
  return datas;
};

// ===============
export const searchDatas = async (
  entityName: string,
  query: string,
  page = 1,
  limit = 8
) => {
  const url =
    webApiUrl +
    entityName +
    "/search?" +
    query +
    "&pageNumber=" +
    page +
    "&pageLimit=" +
    limit;
  const datas = await get(url);
  return datas;
};
// ===============
export const getDatasBySlug = async (entityName: string, slug: string) => {
  const url = webApiUrl + entityName + "/by/slug/" + slug;
  const datas = await get(url);
  return datas;
};

// ===============

export const addData = async (entityName: string, data:any) => {
  const url = webApiUrl + entityName;
  const datas = await post(url, data);
  return datas;
};
// ===============

export const signup = async (user: User) => {
  const url = webApiUrl + "user/signup";
  const datas = await post(url, user);
  return datas;
};
// ===============
export const signin = async (user: User) => {
  const url = webApiUrl + "user/signin";
  const datas = await post(url, user);
  if (datas.isSuccess) {
    // auth success
    setItem("auth", { token: datas.token, userId: datas.userId });
    // console.log(datas);
  }
  return datas;
};

