
"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components/ui';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

const CartPage: React.FC = () => {
  const router = useRouter();
  const { cartItems, updateQuantity, removeFromCart, getSummary } = useCartStore();

  const { subtotal, shipping, total } = getSummary();

  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-6 bg-white px-4">
        <div className="bg-[#FCF2E7] p-8 rounded-full">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-trivira-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
           </svg>
        </div>
        <h2 className="text-2xl font-bold text-trivira-dark font-heading">Your Cart is Empty</h2>
        <p className="text-gray-500 text-center max-w-md">
          Looks like you haven't added any products yet. Explore our natural wellness collection.
        </p>
        <Link href="/products">
          <Button size="lg" className="mt-2">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#FFF9F5] font-sans py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-trivira-primary mb-8 font-heading">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="flex-1 flex flex-col gap-6">
            {cartItems.map((item) => (
              <div key={item._id} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-center">
                
                <div className="w-24 h-24 bg-[#FCF2E7] rounded-xl flex items-center justify-center shrink-0">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                </div>

                <div className="flex-1 flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-trivira-primary uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-lg font-bold text-trivira-dark">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Unit Price: ₹{item.price}</p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6">
                    <div className="flex items-center border border-gray-200 rounded-lg h-10">
                      <button 
                        onClick={() => updateQuantity(item._id!, Math.max(1, (item.qty || 1) - 1))}
                        className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-trivira-primary hover:bg-gray-50 rounded-l-lg transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center font-bold text-trivira-dark">{item.qty}</span>
                      <button 
                        onClick={() => updateQuantity(item._id!, (item.qty || 1) + 1)}
                        className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-trivira-primary hover:bg-gray-50 rounded-r-lg transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <div className="text-right min-w-[80px]">
                       <p className="font-bold text-lg text-trivira-dark">₹{Number(item.price) * (item.qty || 1)}</p>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item._id!)}
                      className="text-gray-400 hover:text-red-500 transition p-2"
                      title="Remove Item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="w-full lg:w-[380px] shrink-0">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-28 flex flex-col gap-6">
              <h2 className="text-xl font-bold text-trivira-dark font-heading border-b border-gray-100 pb-4">Order Summary</h2>
              
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-trivira-dark">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-trivira-dark">
                    {shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (Estimated)</span>
                  <span className="font-medium text-trivira-dark">₹0.00</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-trivira-dark">Total</span>
                <span className="text-2xl font-bold text-trivira-primary">₹{total}</span>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  size="lg" 
                  className="w-full text-base py-6 shadow-md"
                  onClick={() => router.push('/checkout')}
                >
                  Proceed to Checkout
                </Button>
                <Link href="/products" className="text-center">
                  <span className="text-sm font-medium text-gray-500 hover:text-trivira-primary transition">Continue Shopping</span>
                </Link>
              </div>

              <div className="mt-4 pt-6 border-t border-gray-100">
                 <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Discount Code</label>
                 <div className="flex gap-2">
                   <Input placeholder="Enter coupon" className="bg-gray-50" />
                   <Button variant="outline" className="px-4">Apply</Button>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;
