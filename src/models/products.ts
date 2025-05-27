export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  stock: number;
  imageUrls: Array<string>;
  solde_price: number;
  regular_price: number;
  updated_at: Date;
  created_at: Date;
  //   _id: string;
  //   name: string;
  //   slug: string;
  //   description: string;
  //   stock: string;
  //   imageUrl: Array<string>;
  //   solde_price: number;
  //   regular_price: number;
  //   created_at: Date;
  //   updated_at: Date;
}
