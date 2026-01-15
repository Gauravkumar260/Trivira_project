// Service to handle product data using mock data
import { Product } from '@/types';
import { mockProducts } from '@/data/products';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  await delay(600); // Simulate network latency
  return [...mockProducts];
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  await delay(300);
  return mockProducts.find((p) => p._id === id);
};
