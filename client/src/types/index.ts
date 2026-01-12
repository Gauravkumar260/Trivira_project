// types/index.ts

export interface Product {
  id: string | number;
  _id?: string;      // Added _id for MongoDB compatibility
  name?: string;     // Allow 'name' OR 'title' to support both data structures
  title?: string;
  subtitle?: string;
  image: string;
  bgImage?: string;  // Optional, as not all cards might have it
  price: string | number; // Support both string and number
  rating?: number;
  reviews?: number;
  themeColor?: string;
  category?: string;
  description?: string;
  benefits?: { icon: string; text: string }[];
  // For the 'reverse' layout logic in product lists
  reverse?: boolean; 
  iconClass?: string;
  iconColor?: string;
  btnText?: string;
  qty?: number;
  countInStock?: number;
}

export interface BlogPost {
  id: string | number;
  title: string;
  subtitle?: string;
  date?: string;
  readTime?: string;
  image: string;
  desc: string;
  content?: string; // HTML string
  link?: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  posted?: string;
  description?: string;
  requirements?: string[];
}
