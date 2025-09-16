import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  SortAsc, 
  Grid, 
  List, 
  Star, 
  MapPin, 
  Clock, 
  Users,
  Heart,
  ShoppingCart,
  Search,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Navbar from '@/components/Navbar';
import OccasionNav from '@/components/OccasionNav';
import Footer from '@/components/Footer';
import birthdayImage from '@/assets/birthday-event.jpg';
import anniversaryImage from '@/assets/anniversary-event.jpg';
import corporateImage from '@/assets/corporate-event.jpg';

const BirthdayPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');

  const subcategories = [
    { name: 'For Him', slug: 'for-him', count: 45, icon: '👨' },
    { name: 'For Her', slug: 'for-her', count: 52, icon: '👩' },
    { name: 'Kids', slug: 'kids', count: 38, icon: '👶' },
    { name: '1st Birthday', slug: 'first-birthday', count: 28, icon: '🎂' },
    { name: '18th Birthday', slug: 'eighteenth-birthday', count: 15, icon: '🎉' },
    { name: 'Car Boot Surprise', slug: 'car-boot', count: 12, icon: '🚗' },
    { name: 'Terrace Party', slug: 'terrace', count: 20, icon: '🏠' },
    { name: 'Rosegold Theme', slug: 'rosegold', count: 25, icon: '🌹' }
  ];

  const birthdayEvents = [
    {
      id: '1',
      title: 'Rosegold Birthday Surprise',
      price: '₹2,999',
      originalPrice: '₹3,999',
      image: birthdayImage,
      rating: 4.9,
      reviews: 127,
      duration: '4 hours',
      capacity: '10-20 people',
      location: 'Delhi NCR',
      category: 'For Her',
      isPopular: true,
      isNew: false,
      features: ['Rosegold decorations', 'Balloon setup', 'Cake arrangement', 'Photography']
    },
    {
      id: '2',
      title: 'Superhero Kids Party',
      price: '₹1,999',
      image: birthdayImage,
      rating: 4.8,
      reviews: 89,
      duration: '3 hours',
      capacity: '8-15 kids',
      location: 'Delhi NCR',
      category: 'Kids',
      isPopular: false,
      isNew: true,
      features: ['Superhero theme', 'Party games', 'Entertainment', 'Kids-friendly setup']
    },
    {
      id: '3',
      title: 'Masculine Birthday Setup',
      price: '₹2,499',
      image: anniversaryImage,
      rating: 4.7,
      reviews: 67,
      duration: '4 hours',
      capacity: '15-25 people',
      location: 'Delhi NCR',
      category: 'For Him',
      isPopular: false,
      isNew: false,
      features: ['Masculine theme', 'Premium decorations', 'Entertainment', 'Catering']
    },
    {
      id: '4',
      title: 'First Birthday Celebration',
      price: '₹1,499',
      image: birthdayImage,
      rating: 4.9,
      reviews: 156,
      duration: '3 hours',
      capacity: '20-30 people',
      location: 'Delhi NCR',
      category: '1st Birthday',
      isPopular: true,
      isNew: false,
      features: ['Baby-friendly setup', 'Memory moments', 'Photography', 'Gift presentation']
    },
    {
      id: '5',
      title: 'Car Boot Surprise',
      price: '₹3,999',
      image: corporateImage,
      rating: 4.8,
      reviews: 45,
      duration: '2 hours',
      capacity: '2-4 people',
      location: 'Delhi NCR',
      category: 'Car Boot Surprise',
      isPopular: false,
      isNew: true,
      features: ['Car decoration', 'Surprise element', 'Photography', 'Memory creation']
    },
    {
      id: '6',
      title: 'Terrace Birthday Party',
      price: '₹2,199',
      image: birthdayImage,
      rating: 4.6,
      reviews: 78,
      duration: '5 hours',
      capacity: '25-40 people',
      location: 'Delhi NCR',
      category: 'Terrace Party',
      isPopular: false,
      isNew: false,
      features: ['Outdoor setup', 'Premium decorations', 'Catering', 'Entertainment']
    }
  ];

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredEvents = birthdayEvents.filter(event => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(event.category);
    const priceNumber = Number(event.price.replace('₹', '').replace(/,/g, ''));
    const matchesPrice = priceNumber >= priceRange[0] && priceNumber <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <OccasionNav />
      
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Birthday Celebrations</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Make every birthday unforgettable with our magical setups
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {subcategories.map((subcategory) => (
              <Link
                key={subcategory.slug}
                to={`/birthdays/${subcategory.slug}`}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <span className="text-lg">{subcategory.icon}</span>
                <span className="font-medium">{subcategory.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {subcategory.count}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search birthday events..."
                  className="pl-10 w-64"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex border border-gray-200 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-white rounded-lg border"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={20000}
                      step={500}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {subcategories.map((subcategory) => (
                      <div key={subcategory.slug} className="flex items-center space-x-2">
                        <Checkbox
                          id={subcategory.slug}
                          checked={selectedCategories.includes(subcategory.name)}
                          onCheckedChange={() => handleCategoryToggle(subcategory.name)}
                        />
                        <label htmlFor={subcategory.slug} className="text-sm">
                          {subcategory.name} ({subcategory.count})
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Features</h3>
                  <div className="space-y-2">
                    {['Same Day Delivery', 'Photography', 'Catering', 'Entertainment'].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox id={feature} />
                        <label htmlFor={feature} className="text-sm">{feature}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Birthday Events ({filteredEvents.length})
            </h2>
          </div>

          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
          }>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={viewMode === 'grid' ? '' : 'flex gap-4'}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className={`relative ${viewMode === 'grid' ? 'h-48' : 'h-32 w-48 flex-shrink-0'}`}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {event.isPopular && (
                        <Badge className="bg-primary text-white">Popular</Badge>
                      )}
                      {event.isNew && (
                        <Badge className="bg-green-500 text-white">New</Badge>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {event.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(event.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {event.rating} ({event.reviews} reviews)
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.capacity}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">{event.price}</span>
                        {event.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            {event.originalPrice}
                          </span>
                        )}
                      </div>
                       <Button 
                         className="bg-primary hover:bg-primary/90"
                         asChild
                       >
                         <Link to={`/event/${event.id}`}>
                           <ShoppingCart className="w-4 h-4 mr-2" />
                           Book Now
                         </Link>
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([1000, 10000]);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BirthdayPage;
