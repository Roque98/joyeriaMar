import { Product } from "./product.interface";

export interface Category {
  image: string;
  name: string;
  products: Product[] | string [];
}