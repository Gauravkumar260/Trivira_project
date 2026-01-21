// Mock data for products
import { Product } from '@/types';

// STEVIA IMPORTS (Existing)
import steviaTablets from '@/assets/images/products/product1.svg'; // formerly product1
import steviaPowder from '@/assets/images/products/product2.svg';   // formerly product2
import steviaLiquid from '@/assets/images/products/product3.svg';   // formerly product3

// PROTEIN IMPORTS (New from Image)
import proteinBerries from '@/assets/images/products/product4.svg';
import proteinUnflavored from '@/assets/images/products/product5.svg';
import proteinChocolate from '@/assets/images/products/product6.svg';
import proteinStrawberry from '@/assets/images/products/product7.svg';
import proteinCoffee from '@/assets/images/products/product8.svg';

// MUSHROOM IMPORTS (New from Image)
import mushroomLionsMane from '@/assets/images/products/product9.svg';
import mushroomSpirulina from '@/assets/images/products/product10.svg';
import mushroomCordyceps from '@/assets/images/products/product11.svg';
import mushroomReishi from '@/assets/images/products/product12.svg';
import mushroomChlorella from '@/assets/images/products/product13.svg';

export const mockProducts: Product[] = [
  // --- STEVIA (Kept from original) ---
  {
    _id: '1',
    name: 'Stevia Tablets',
    image: steviaTablets.src,
    brand: 'Trivira',
    category: 'Stevia',
    description: 'Natural sweetener in tablet form.',
    price: 499,
    countInStock: 50,
    rating: 4.5,
    reviews: 12,
  },
  {
    _id: '2',
    name: 'Stevia Powder',
    image: steviaPowder.src,
    brand: 'Trivira',
    category: 'Stevia',
    description: 'Natural sweetener in powder form.',
    price: 399,
    countInStock: 40,
    rating: 4.8,
    reviews: 30,
  },
  {
    _id: '3',
    name: 'Stevia Liquid',
    image: steviaLiquid.src,
    brand: 'Trivira',
    category: 'Stevia',
    description: 'Liquid stevia drops for drinks.',
    price: 299,
    countInStock: 25,
    rating: 4.6,
    reviews: 10,
  },

  // --- PLANT BASED PROTEIN (Updated from Image 2) ---
  {
    _id: '4',
    name: 'Plant Based Protein',
    image: proteinBerries.src,
    brand: 'Trivira',
    category: 'Protein',
    description: 'Mixed Berries Flavor', // Added flavor to description
    price: 1999,
    countInStock: 30,
    rating: 5, // Visual: 5 stars
    reviews: 30,
  },
  {
    _id: '5',
    name: 'Plant Based Protein',
    image: proteinUnflavored.src,
    brand: 'Trivira',
    category: 'Protein',
    description: 'Unflavored',
    price: 1899,
    countInStock: 20,
    rating: 4.5, // Visual: 4.5 stars
    reviews: 12,
  },
  {
    _id: '6',
    name: 'Plant Based Protein',
    image: proteinChocolate.src,
    brand: 'Trivira',
    category: 'Protein',
    description: 'Chocolate Flavor',
    price: 1999,
    countInStock: 25,
    rating: 4.5, // Visual: 4.5 stars
    reviews: 10,
  },
  {
    _id: '7',
    name: 'Plant Based Protein',
    image: proteinStrawberry.src,
    brand: 'Trivira',
    category: 'Protein',
    description: 'Strawberry Flavor',
    price: 1999,
    countInStock: 15,
    rating: 4.5, 
    reviews: 30,
  },
  {
    _id: '8',
    name: 'Plant Based Protein',
    image: proteinCoffee.src,
    brand: 'Trivira',
    category: 'Protein',
    description: 'Coffee Flavor',
    price: 1999,
    countInStock: 18,
    rating: 4.5,
    reviews: 12,
  },

  // --- FUNCTIONAL MUSHROOMS (Updated from Image 1) ---
  {
    _id: '9',
    name: 'Lion\'s Mane Mushroom',
    image: mushroomLionsMane.src,
    brand: 'Trivira',
    category: 'Mushrooms',
    description: 'Capsules - For Focus & Memory',
    price: 1499,
    countInStock: 30,
    rating: 4.5, // Visual: 4.5 stars
    reviews: 30,
  },
  {
    _id: '10',
    name: 'Spirulina',
    image: mushroomSpirulina.src,
    brand: 'Trivira',
    category: 'Mushrooms',
    description: 'Capsules - Superfood',
    price: 1299,
    countInStock: 25,
    rating: 4.5, // Visual: 4.5 stars
    reviews: 12,
  },
  {
    _id: '11',
    name: 'Cordyceps',
    image: mushroomCordyceps.src,
    brand: 'Trivira',
    category: 'Mushrooms',
    description: 'Capsules - Energy & Endurance',
    price: 1499,
    countInStock: 10,
    rating: 4.5, // Visual: 4.5 stars
    reviews: 10,
  },
  {
    _id: '12',
    name: 'Reishi Mushrooms',
    image: mushroomReishi.src,
    brand: 'Trivira',
    category: 'Mushrooms',
    description: 'Capsules - Relaxation & Sleep',
    price: 1499,
    countInStock: 15,
    rating: 4.5,
    reviews: 30,
  },
  {
    _id: '13',
    name: 'Chlorella',
    image: mushroomChlorella.src,
    brand: 'Trivira',
    category: 'Mushrooms',
    description: 'Capsules - Detox & Immunity',
    price: 1299,
    countInStock: 20,
    rating: 4.5,
    reviews: 12,
  },
];