export interface Event {
  id: string;
  title: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  duration: string;
  capacity: string;
  location: string;
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Romantic Anniversary Dinner',
    category: 'Anniversary',
    price: '₹2,999',
    originalPrice: '₹3,999',
    image: '/src/assets/anniversary-event.jpg',
    description: 'A beautifully crafted intimate dinner experience with candlelight, premium decorations, and personalized touches.',
    rating: 4.9,
    reviews: 127,
    duration: '3 hours',
    capacity: '2-4 people',
    location: 'Your chosen venue or our premium locations',
    features: ['Professional event setup', 'Premium decorations', 'Photography moments', 'Personalized touches'],
    isPopular: true
  },
  {
    id: '2',
    title: 'Birthday Surprise Party',
    category: 'Birthday',
    price: '₹1,999',
    image: '/src/assets/birthday-event.jpg',
    description: 'Make birthdays unforgettable with our surprise party packages including decorations, cake, and entertainment.',
    rating: 4.8,
    reviews: 89,
    duration: '4 hours',
    capacity: '10-20 people',
    location: 'Home or venue of choice',
    features: ['Surprise setup', 'Birthday decorations', 'Cake arrangement', 'Entertainment'],
    isNew: true
  },
  {
    id: '3',
    title: 'Corporate Networking Event',
    category: 'Corporate',
    price: '₹4,999',
    image: '/src/assets/corporate-event.jpg',
    description: 'Professional networking experience with premium catering, elegant setup, and structured networking activities.',
    rating: 4.7,
    reviews: 34,
    duration: '4 hours',
    capacity: '50-100 people',
    location: 'Premium corporate venues',
    features: ['Premium catering', 'Professional photography', 'Networking activities', 'Executive setup']
  },
  {
    id: '4',
    title: 'Candlelight Dinner Setup',
    category: 'Candlelight',
    price: '₹2,499',
    originalPrice: '₹3,199',
    image: '/src/assets/anniversary-event.jpg',
    description: 'Intimate candlelight dinner with romantic ambiance, premium table setting, and personalized service.',
    rating: 4.9,
    reviews: 156,
    duration: '2 hours',
    capacity: '2 people',
    location: 'Your home or romantic venue',
    features: ['Candlelight setup', 'Premium table setting', 'Romantic music', 'Personalized service'],
    isPopular: true
  },
  {
    id: '5',
    title: 'Kids Birthday Celebration',
    category: 'Kids',
    price: '₹1,499',
    image: '/src/assets/birthday-event.jpg',
    description: 'Fun-filled kids birthday party with themed decorations, games, and entertainment for the little ones.',
    rating: 4.8,
    reviews: 67,
    duration: '3 hours',
    capacity: '8-15 kids',
    location: 'Home or party venue',
    features: ['Themed decorations', 'Party games', 'Entertainment', 'Kids-friendly setup']
  },
  {
    id: '6',
    title: 'Festival Decoration Package',
    category: 'Festivals',
    price: '₹3,499',
    image: '/src/assets/anniversary-event.jpg',
    description: 'Complete festival decoration package with traditional and modern elements for your celebrations.',
    rating: 4.6,
    reviews: 45,
    duration: '6 hours',
    capacity: '20-50 people',
    location: 'Your venue',
    features: ['Traditional decorations', 'Modern elements', 'Lighting setup', 'Cultural touches']
  },
  {
    id: '7',
    title: 'Personalized Gift Experience',
    category: 'Gifts',
    price: '₹999',
    image: '/src/assets/birthday-event.jpg',
    description: 'Curated personalized gift experience with custom packaging and delivery for special occasions.',
    rating: 4.7,
    reviews: 123,
    duration: '1 hour',
    capacity: '1 person',
    location: 'Delivery to address',
    features: ['Personalized gifts', 'Custom packaging', 'Special delivery', 'Surprise element']
  },
  {
    id: '8',
    title: 'Baby Shower Celebration',
    category: 'Kids',
    price: '₹2,199',
    image: '/src/assets/corporate-event.jpg',
    description: 'Beautiful baby shower setup with elegant decorations, games, and memorable moments for the expecting parents.',
    rating: 4.8,
    reviews: 78,
    duration: '4 hours',
    capacity: '15-25 people',
    location: 'Home or venue',
    features: ['Elegant decorations', 'Baby shower games', 'Memory moments', 'Gift presentation']
  },
  {
    id: '9',
    title: 'Proposal Setup',
    category: 'Anniversary',
    price: '₹3,999',
    image: '/src/assets/anniversary-event.jpg',
    description: 'Perfect proposal setup with romantic ambiance, photography, and all the special touches for your big moment.',
    rating: 4.9,
    reviews: 89,
    duration: '2 hours',
    capacity: '2 people',
    location: 'Romantic venue of choice',
    features: ['Romantic setup', 'Professional photography', 'Ring presentation', 'Memory creation'],
    isPopular: true
  },
  {
    id: '10',
    title: 'Team Building Retreat',
    category: 'Corporate',
    price: '₹2,999',
    image: '/src/assets/corporate-event.jpg',
    description: 'Comprehensive team building experience with activities, workshops, and collaborative exercises.',
    rating: 4.7,
    reviews: 56,
    duration: '6 hours',
    capacity: '20-50 people',
    location: 'Outdoor or indoor venue',
    features: ['Team activities', 'Professional facilitator', 'Lunch & refreshments', 'Activity materials']
  },
  {
    id: '11',
    title: 'Valentine\'s Day Special',
    category: 'Anniversary',
    price: '₹3,499',
    originalPrice: '₹4,499',
    image: '/src/assets/anniversary-event.jpg',
    description: 'Special Valentine\'s Day package with romantic dinner, decorations, and personalized surprises.',
    rating: 4.9,
    reviews: 134,
    duration: '3 hours',
    capacity: '2 people',
    location: 'Romantic venue',
    features: ['Romantic dinner', 'Valentine decorations', 'Personalized surprises', 'Memory moments']
  },
  {
    id: '12',
    title: 'Graduation Celebration',
    category: 'Festivals',
    price: '₹1,799',
    image: '/src/assets/birthday-event.jpg',
    description: 'Celebrate academic achievements with our graduation party package including decorations and entertainment.',
    rating: 4.6,
    reviews: 42,
    duration: '4 hours',
    capacity: '15-30 people',
    location: 'Home or venue',
    features: ['Graduation decorations', 'Achievement celebration', 'Entertainment', 'Memory book']
  },
  {
    id: '13',
    title: 'Housewarming Party',
    category: 'Festivals',
    price: '₹2,299',
    image: '/src/assets/corporate-event.jpg',
    description: 'Warm welcome to your new home with our housewarming party package including decorations and catering.',
    rating: 4.7,
    reviews: 63,
    duration: '5 hours',
    capacity: '20-40 people',
    location: 'New home',
    features: ['Welcome decorations', 'Catering setup', 'House blessing', 'Gift presentation']
  },
  {
    id: '14',
    title: 'Retirement Celebration',
    category: 'Corporate',
    price: '₹3,799',
    image: '/src/assets/corporate-event.jpg',
    description: 'Honor years of service with our retirement celebration package including speeches and memories.',
    rating: 4.8,
    reviews: 28,
    duration: '4 hours',
    capacity: '30-60 people',
    location: 'Office or venue',
    features: ['Honor ceremony', 'Memory presentation', 'Catering', 'Gift ceremony']
  },
  {
    id: '15',
    title: 'New Year Party',
    category: 'Festivals',
    price: '₹4,499',
    image: '/src/assets/anniversary-event.jpg',
    description: 'Ring in the new year with our spectacular New Year party package including decorations and entertainment.',
    rating: 4.8,
    reviews: 91,
    duration: '6 hours',
    capacity: '25-50 people',
    location: 'Venue of choice',
    features: ['New Year decorations', 'Countdown setup', 'Entertainment', 'Midnight celebration']
  }
];

export const categories = [
  { name: 'Anniversary', slug: 'anniversary', icon: '💕' },
  { name: 'Birthdays', slug: 'birthdays', icon: '🎂' },
  { name: 'Gifts', slug: 'gifts', icon: '🎁' },
  { name: 'Candlelight Dinners', slug: 'candlelight', icon: '🕯️' },
  { name: 'Decorations', slug: 'decorations', icon: '🎨' },
  { name: 'Festivals', slug: 'festivals', icon: '🎊' },
  { name: 'Kids Celebrations', slug: 'kids', icon: '🎪' },
  { name: 'Corporate Events', slug: 'corporate', icon: '💼' }
];

export const getEventsByCategory = (category: string) => {
  return events.filter(event => event.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedEvents = () => {
  return events.filter(event => event.isPopular || event.isNew).slice(0, 6);
};

export const getEventById = (id: string) => {
  return events.find(event => event.id === id);
};
