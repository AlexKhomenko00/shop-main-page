import { Product } from "../types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const data = await fetch("https://fakestoreapi.com/products/");

    const products: Product[] = await data.json();
    return products.filter((product) => product.category !== "electronics");
  } catch (e) {
    throw e;
  }
};
