import { Meta } from "../models/meta";

export const getMetas = (metas: Meta[], name: string) => {
  let value = "";
  const datas = metas.filter((meta) => meta.name === name);
  if (datas.length) {
    value = datas[0].value;
  }
  return value;
};
