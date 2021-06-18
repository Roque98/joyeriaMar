import { Category } from "./category.interface";

export interface Article {
  image: string;
  name: string;
  categories: Category[] | string[];
}