import { Product } from "./products";

export interface Article {
  product: Product;
  quantity: number;
  sub_total: number;
}
