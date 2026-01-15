
import { create } from 'zustand';
import axios from 'axios';
import { Product } from '@/types';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get('http://localhost:5000/api/products');
      set({ products: data, loading: false });
    } catch (error) {
      set({ loading: false, error: 'Failed to fetch products' });
    }
  },
}));
