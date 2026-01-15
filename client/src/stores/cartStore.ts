import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types';

interface CartState {
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  getSummary: () => { subtotal: number; shipping: number; total: number };
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (item) =>
        set((state) => {
          const existItem = state.cartItems.find((x) => x._id === item._id);
          if (existItem) {
            return {
              cartItems: state.cartItems.map((x) =>
                x._id === existItem._id ? { ...x, qty: x.qty ? x.qty + 1 : 1 } : x
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, { ...item, qty: 1 }],
            };
          }
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((x) => x._id !== id),
        })),
      updateQuantity: (id, qty) =>
        set((state) => ({
          cartItems: state.cartItems.map((x) =>
            x._id === id ? { ...x, qty } : x
          ),
        })),
      getSummary: () => {
        const { cartItems } = get();
        const subtotal = cartItems.reduce((acc, item) => acc + (Number(item.price) * (item.qty || 1)), 0);
        const shipping = subtotal > 999 ? 0 : 99;
        return { subtotal, shipping, total: subtotal + shipping };
      },
    }),
    {
      name: 'cart-storage', // unique name
    }
  )
);