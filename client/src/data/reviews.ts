// Mock data for reviews
export interface Review {
  _id: string;
  name: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
}

export const mockReviews: Review[] = [
  {
    _id: '1',
    name: 'Rachel S. William',
    rating: 5,
    title: 'Focus & Clarity',
    comment: "They help me focus and not get as distracted. My brain is less foggy and it's easier to think.",
    createdAt: new Date().toISOString(),
  },
  {
    _id: '2',
    name: 'John Doe',
    rating: 5,
    title: 'Great Energy',
    comment: 'I feel much more energetic throughout the day without the crash I get from coffee.',
    createdAt: new Date().toISOString(),
  },
  {
    _id: '3',
    name: 'Emily Smith',
    rating: 4,
    title: 'Natural Taste',
    comment: "Love that it's all natural. The taste is surprisingly good for a health supplement.",
    createdAt: new Date().toISOString(),
  },
  {
    _id: '4',
    name: 'Michael Brown',
    rating: 5,
    title: 'Sleep Improved',
    comment: 'The Reishi mushrooms really helped regulate my sleep cycle. Highly recommend.',
    createdAt: new Date().toISOString(),
  },
  {
    _id: '5',
    name: 'Sarah Lee',
    rating: 5,
    title: 'Daily Staple',
    comment: "Part of my morning routine now. Can't imagine starting my day without it.",
    createdAt: new Date().toISOString(),
  },
  {
    _id: '6',
    name: 'David Kim',
    rating: 4,
    title: 'Good Value',
    comment: 'A bit pricey but worth it for the quality ingredients.',
    createdAt: new Date().toISOString(),
  },
];
