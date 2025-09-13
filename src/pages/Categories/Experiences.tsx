import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Star, Clock, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import anniversaryImage from '@/assets/anniversary-event.jpg';
import birthdayImage from '@/assets/birthday-event.jpg';

const Experiences = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { addItem } = useCart();

  const events = [
    {
      id: '1',
      name: 'Romantic Anniversary Dinner',
      description: 'A beautifully crafted intimate dinner experience with candlelight, premium decorations, and personalized touches.',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 127,
      image: anniversaryImage,
      category: 'Anniversary',
      duration: '3 hours',
      capacity: '2-4 people',
      location: 'Downtown',
      featured: true,
      tags: ['Romantic', 'Premium', 'Intimate']
    },
    {
      id: '2',
      name: 'Birthday Party Extravaganza',
      description: 'Complete birthday celebration with decorations, entertainment, cake, and memorable moments for all ages.',
      price: 199,
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      image: birthdayImage,
      category: 'Birthday',
      duration: '4 hours',
      capacity: '10-30 people',
      location: 'Multiple Venues',
      featured: false,
      tags: ['Fun', 'Entertainment', 'Family']
    },
    {
      id: '3',
      name: 'Surprise Proposal Setup',
      description: 'Perfect proposal moment with romantic decorations, photography, and everything needed for the perfect "yes".',
      price: 449,
      originalPrice: null,
      rating: 5.0,
      reviews: 67,
      image: anniversaryImage,
      category: 'Proposal',
      duration: '2 hours',
      capacity: '2 people',
      location: 'Scenic Locations',
      featured: true,
      tags: ['Romantic', 'Photography', 'Luxury']
    },
    {
      id: '4',
      name: 'Kids Party Adventure',
      description: 'Themed kids party with games, entertainment, decorations, and magical moments for your little ones.',
      price: 149,
      originalPrice: null,
      rating: 4.7,
      reviews: 142,
      image: birthdayImage,
      category: 'Kids',
      duration: '3 hours',
      capacity: '8-20 kids',
      location: 'Indoor/Outdoor',
      featured: false,
      tags: ['Kids', 'Themed', 'Interactive']
    }
  ];

  const categories = ['Anniversary', 'Birthday', 'Proposal', 'Kids', 'Romantic', 'Candlelight'];
  const locations = ['Downtown', 'Multiple Venues', 'Scenic Locations', 'Indoor/Outdoor'];

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(prev => 
      checked 
        ? [...prev, category]
        : prev.filter(c => c !== category)
    );
  };

  const handleAddToCart = (event: typeof events[0]) => {
    addItem({
      id: event.id,
      name: event.name,
      price: event.price,
      image: event.image,
      category: event.category
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Unique Experiences</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover carefully curated experiences designed to create unforgettable moments and lasting memories.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div 
            className="lg:w-64 flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-premium p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5" />
                <h3 className="font-semibold">Filters</h3>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={10}
                  className="mb-3"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-3">
                  {categories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      />
                      <label htmlFor={category} className="text-sm font-medium">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Location</h4>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="w-full">
                Clear Filters
              </Button>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-1">All Experiences</h2>
                <p className="text-muted-foreground">{events.length} experiences found</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Select defaultValue="popular">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex rounded-lg border border-border">
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
            </motion.div>

            {/* Events Grid */}
            <motion.div 
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`card-hover card-premium overflow-hidden group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}>
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-64 flex-shrink-0' : 'h-48'
                    }`}>
                      <img 
                        src={event.image} 
                        alt={event.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {event.featured && (
                        <Badge className="absolute top-3 left-3 bg-primary text-white">
                          Featured
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-white"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      {event.originalPrice && (
                        <Badge className="absolute bottom-3 left-3 bg-red-500 text-white">
                          Save ${event.originalPrice - event.price}
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="p-6 flex-1">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {event.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-semibold">{event.rating}</span>
                          <span className="text-muted-foreground ml-1">({event.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {event.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {event.capacity}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">${event.price}</span>
                          {event.originalPrice && (
                            <span className="text-muted-foreground line-through ml-2">
                              ${event.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button 
                          variant="default"
                          onClick={() => handleAddToCart(event)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experiences;