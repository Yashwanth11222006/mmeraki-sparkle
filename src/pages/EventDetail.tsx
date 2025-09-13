import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Users, MapPin, Calendar, Heart, Share2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import anniversaryImage from '@/assets/anniversary-event.jpg';

const EventDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  // Mock event data - in real app, fetch based on id
  const event = {
    id: '1',
    name: 'Romantic Anniversary Dinner',
    description: 'A beautifully crafted intimate dinner experience with candlelight, premium decorations, and personalized touches. Perfect for celebrating your special moments with the one you love.',
    longDescription: 'This exclusive anniversary dinner experience is designed to create the perfect romantic atmosphere for your special celebration. Our team carefully curates every detail, from the elegant table setting with premium linens and fine china, to the ambient candlelight and fresh floral arrangements. The experience includes a personalized menu consultation, professional setup and breakdown, photography moments, and special romantic touches that will make your evening truly unforgettable.',
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 127,
    images: [anniversaryImage, anniversaryImage, anniversaryImage],
    category: 'Anniversary',
    duration: '3 hours',
    capacity: '2-4 people',
    location: 'Your chosen venue or our premium locations',
    features: [
      'Professional event setup and styling',
      'Premium table linens and dinnerware',
      'Ambient lighting and candle arrangements',
      'Fresh floral centerpieces',
      'Personalized menu planning assistance',
      'Professional photography (30 minutes)',
      'Setup and cleanup service',
      'Dedicated event coordinator'
    ],
    included: [
      'Complete table setup',
      'Decorative elements',
      'Lighting arrangement',
      'Professional coordination',
      'Photography session'
    ],
    notIncluded: [
      'Food and beverages',
      'Venue rental',
      'Transportation',
      'Additional decorations'
    ]
  };

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Absolutely magical! Every detail was perfect and exceeded our expectations. The team was professional and the setup was breathtaking.',
      verified: true
    },
    {
      name: 'Michael Chen',
      rating: 5,
      date: '1 month ago',
      comment: 'Perfect anniversary celebration. The ambiance was romantic and intimate. Highly recommend for special occasions!',
      verified: true
    },
    {
      name: 'Emily Davis',
      rating: 4,
      date: '2 months ago',
      comment: 'Beautiful setup and great service. The photography session was a nice touch. Will definitely book again.',
      verified: true
    }
  ];

  const relatedEvents = [
    {
      id: '2',
      name: 'Proposal Setup',
      price: 449,
      image: anniversaryImage,
      rating: 5.0
    },
    {
      id: '3',
      name: 'Birthday Celebration',
      price: 199,
      image: anniversaryImage,
      rating: 4.8
    }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: event.id,
        name: event.name,
        price: event.price,
        image: event.images[0],
        category: event.category
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                <img 
                  src={event.images[0]} 
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {event.images.slice(1).map((image, index) => (
                  <div key={index} className="h-24 rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${event.name} ${index + 2}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{event.category}</Badge>
                {event.originalPrice && (
                  <Badge className="bg-red-500 text-white">
                    Save ${event.originalPrice - event.price}
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-semibold text-lg">{event.rating}</span>
                  <span className="text-muted-foreground ml-1">({event.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {event.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {event.capacity}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">{event.description}</p>
              
              <Separator className="my-6" />
              
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Experience</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{event.longDescription}</p>
              </div>

              <Separator className="my-6" />

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Reviews */}
              <div>
                <h3 className="text-xl font-bold mb-6">Reviews ({event.reviews})</h3>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="card-premium p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold">{review.name}</span>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">Verified</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="card-premium p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-primary">${event.price}</span>
                    {event.originalPrice && (
                      <span className="text-muted-foreground line-through ml-2 text-lg">
                        ${event.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Quantity</label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Date Selector */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Preferred Date</label>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Select Date
                  </Button>
                </div>

                <div className="space-y-3 mb-6">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleAddToCart}
                  >
                    Add to Cart - ${event.price * quantity}
                  </Button>
                  <Button variant="neon" className="w-full" size="lg">
                    Book Now
                  </Button>
                </div>

                <Separator className="my-6" />

                {/* Quick Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span>{event.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Setup Time:</span>
                    <span>1 hour</span>
                  </div>
                </div>
              </Card>

              {/* Related Events */}
              <Card className="card-premium p-6 mt-6">
                <h3 className="font-bold mb-4">You Might Also Like</h3>
                <div className="space-y-4">
                  {relatedEvents.map((relatedEvent) => (
                    <div key={relatedEvent.id} className="flex gap-3">
                      <img 
                        src={relatedEvent.image} 
                        alt={relatedEvent.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1">{relatedEvent.name}</h4>
                        <div className="flex items-center gap-2">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground">{relatedEvent.rating}</span>
                        </div>
                        <span className="text-sm font-bold text-primary">${relatedEvent.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetail;