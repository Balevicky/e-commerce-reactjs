import { apiUrl, webApiUrl } from "../environements/environement";
import { User } from "../models/user";
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
export const signup = async (user: User) => {
  const url = webApiUrl + "user/signup";
  const datas = await post(url, user);
  return datas;
};
