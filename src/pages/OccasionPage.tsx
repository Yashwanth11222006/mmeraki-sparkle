import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Star, Clock, Users, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import MainLayout from '@/layouts/MainLayout';
import EventCard from '@/components/EventCard';
import Banner from '@/components/Banner';
import { getEventsByCategory, categories } from '@/data/events';
import heroImage from '@/assets/hero-main.jpg';

const OccasionPage = () => {
  const { category } = useParams<{ category: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const currentCategory = categories.find(cat => cat.slug === category);
  const events = getEventsByCategory(category || '');
  
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = event.price.replace('₹', '').replace(',', '') >= priceRange[0] &&
                        event.price.replace('₹', '').replace(',', '') <= priceRange[1];
    const matchesFeatures = selectedFeatures.length === 0 || 
                           selectedFeatures.some(feature => event.features.includes(feature));
    
    return matchesSearch && matchesPrice && matchesFeatures;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace('₹', '').replace(',', '')) - parseInt(b.price.replace('₹', '').replace(',', ''));
      case 'price-high':
        return parseInt(b.price.replace('₹', '').replace(',', '')) - parseInt(a.price.replace('₹', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  const allFeatures = Array.from(new Set(events.flatMap(event => event.features)));

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  if (!currentCategory) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/">Go Home</a>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Banner */}
      <Banner
        title={`${currentCategory.name} Experiences`}
        subtitle={`Discover amazing ${currentCategory.name.toLowerCase()} events and celebrations`}
        backgroundImage={heroImage}
        ctaText={`Explore ${currentCategory.name}`}
        ctaLink={`/${category}`}
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder={`Search ${currentCategory.name.toLowerCase()} events...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-primary/20 rounded-full h-12"
                  />
                </div>
              </div>

              {/* Sort */}
              <div className="flex gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-white border-gray-200 rounded-full h-12">
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

                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-full p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-full"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-full"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-64"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </h3>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="price-0-2000"
                        checked={priceRange[0] === 0 && priceRange[1] === 2000}
                        onCheckedChange={(checked) => checked && setPriceRange([0, 2000])}
                      />
                      <label htmlFor="price-0-2000" className="text-sm text-gray-600">
                        Under ₹2,000
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="price-2000-5000"
                        checked={priceRange[0] === 2000 && priceRange[1] === 5000}
                        onCheckedChange={(checked) => checked && setPriceRange([2000, 5000])}
                      />
                      <label htmlFor="price-2000-5000" className="text-sm text-gray-600">
                        ₹2,000 - ₹5,000
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="price-5000-10000"
                        checked={priceRange[0] === 5000 && priceRange[1] === 10000}
                        onCheckedChange={(checked) => checked && setPriceRange([5000, 10000])}
                      />
                      <label htmlFor="price-5000-10000" className="text-sm text-gray-600">
                        Above ₹5,000
                      </label>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Features</h4>
                  <div className="space-y-2">
                    {allFeatures.slice(0, 10).map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={selectedFeatures.includes(feature)}
                          onCheckedChange={() => handleFeatureToggle(feature)}
                        />
                        <label htmlFor={feature} className="text-sm text-gray-600">
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchQuery('');
                    setPriceRange([0, 10000]);
                    setSelectedFeatures([]);
                    setSortBy('popular');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </motion.div>

            {/* Events Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {currentCategory.name} Events
                  </h2>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                    {sortedEvents.length} events
                  </Badge>
                </div>
              </div>

              {sortedEvents.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No events found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search terms to find more events.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setPriceRange([0, 10000]);
                      setSelectedFeatures([]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              ) : (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {sortedEvents.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OccasionPage;
