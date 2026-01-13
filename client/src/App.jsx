import React, { useEffect, useState } from 'react';
import ProductCard from './components/features/ProductCard';

const assets = {
  dummy: {
    mushrooms: "/assets/images/dummy-mushrooms.svg",
    protein: "/assets/images/dummy-protein.svg",
    stevia: "/assets/images/dummy-stevia.svg",
  }
};

// Mock data for MVP verification
const DUMMY_PRODUCTS = [
  {
    _id: '1',
    name: 'Functional Mushroom Blend',
    image: assets.dummy.mushrooms,
    category: 'Nutraceuticals',
    price: 49.99,
  },
  {
    _id: '2',
    name: 'Plant Based Protein',
    image: assets.dummy.protein,
    category: 'Nutraceuticals',
    price: 39.99,
  },
  {
    _id: '3',
    name: 'Organic Stevia Extract',
    image: assets.dummy.stevia,
    category: 'Nutraceuticals',
    price: 19.99,
  },
];

function App() {
  const [products, setProducts] = useState([]);

  // Simulating API fetch
  useEffect(() => {
    setProducts(DUMMY_PRODUCTS);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Trivira</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-semibold mb-6">Featured Products</h2>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
