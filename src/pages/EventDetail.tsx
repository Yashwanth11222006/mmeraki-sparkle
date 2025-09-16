import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Share2, 
  Calendar,
  Check,
  ArrowLeft,
  Phone,
  MessageCircle,
  Shield,
  Truck,
  Award,
  ChevronDown,
  Plus,
  Minus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import OccasionNav from '@/components/OccasionNav';
import Footer from '@/components/Footer';
import birthdayImage from '@/assets/birthday-event.jpg';
import anniversaryImage from '@/assets/anniversary-event.jpg';
import corporateImage from '@/assets/corporate-event.jpg';

const EventDetail = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock event data - in real app, this would come from API
  const event = {
    id: '1',
    title: 'Rosegold Birthday Surprise',
    category: 'Birthday',
    subcategory: 'For Her',
    price: '₹2,999',
    originalPrice: '₹3,999',
    rating: 4.9,
    reviewCount: 127,
    duration: '4 hours',
    capacity: '10-20 people',
    location: 'Delhi NCR',
    isPopular: true,
    isNew: false,
    images: [birthdayImage, anniversaryImage, corporateImage],
    description: 'Create the perfect birthday surprise with our stunning rosegold themed setup. This package includes premium decorations, balloon arrangements, cake setup, and photography to make the celebration truly magical.',
    features: [
      'Rosegold themed decorations',
      'Premium balloon arrangements',
      'Birthday cake setup',
      'Professional photography (2 hours)',
      'Memory book creation',
      'Same day delivery available'
    ],
    packages: [
      {
        id: 'basic',
        name: 'Basic Package',
        price: '₹2,999',
        features: ['Rosegold decorations', 'Balloon setup', 'Cake arrangement'],
        duration: '3 hours'
      },
      {
        id: 'premium',
        name: 'Premium Package',
        price: '₹4,999',
        features: ['Everything in Basic', 'Professional photography', 'Memory book', 'Entertainment'],
        duration: '4 hours'
      },
      {
        id: 'luxury',
        name: 'Luxury Package',
        price: '₹7,999',
        features: ['Everything in Premium', 'Live music', 'Catering', 'Videography'],
        duration: '6 hours'
      }
    ],
    availability: {
      '2024-01-20': ['10:00 AM', '2:00 PM', '6:00 PM'],
      '2024-01-21': ['10:00 AM', '2:00 PM'],
      '2024-01-22': ['10:00 AM', '2:00 PM', '6:00 PM'],
      '2024-01-23': ['2:00 PM', '6:00 PM'],
      '2024-01-24': ['10:00 AM', '2:00 PM', '6:00 PM']
    },
    reviews: [
      {
        id: 1,
        name: 'Priya Sharma',
        rating: 5,
        date: '2024-01-10',
        comment: 'Absolutely amazing! The rosegold setup was perfect and exceeded all expectations. Highly recommend!',
        verified: true
      },
      {
        id: 2,
        name: 'Rajesh Kumar',
        rating: 5,
        date: '2024-01-08',
        comment: 'Professional service and beautiful decorations. My wife was so surprised and happy!',
        verified: true
      },
      {
        id: 3,
        name: 'Anita Singh',
        rating: 4,
        date: '2024-01-05',
        comment: 'Great service and quality. The team was punctual and everything was set up perfectly.',
        verified: false
      }
    ],
    vendor: {
      name: 'MMeraki Events',
      rating: 4.9,
      totalEvents: 1250,
      location: 'Delhi NCR',
      responseTime: 'Within 1 hour',
      joinedDate: '2020'
    }
  };

  const timeSlots = selectedDate ? event.availability[selectedDate.toISOString().split('T')[0]] || [] : [];

  const handleBooking = () => {
    setShowBookingForm(true);
  };

  const calculateTotal = () => {
    const packagePrice = event.packages.find(p => p.id === selectedPackage)?.price || event.price;
    return packagePrice;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <OccasionNav />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/birthdays" className="hover:text-primary">Birthdays</Link>
            <span>/</span>
            <Link to="/birthdays/for-her" className="hover:text-primary">For Her</Link>
            <span>/</span>
            <span className="text-gray-900">{event.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {event.isPopular && (
                      <Badge className="bg-primary text-white">Popular</Badge>
                    )}
                    {event.isNew && (
                      <Badge className="bg-green-500 text-white">New</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/80 hover:bg-white"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Thumbnail Images */}
                <div className="flex space-x-2 p-4">
                  {event.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${event.title} ${index + 1}`}
                      className="w-16 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Event Details */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{event.rating}</span>
                        <span className="ml-1">({event.reviews.length} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{event.price}</div>
                    {event.originalPrice && (
                      <div className="text-lg text-gray-500 line-through">{event.originalPrice}</div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{event.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-medium">{event.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-600">Capacity</div>
                      <div className="font-medium">{event.capacity}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-600">Category</div>
                      <div className="font-medium">{event.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-600">Subcategory</div>
                      <div className="font-medium">{event.subcategory}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {event.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Packages */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Package</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-lg">{pkg.name}</h4>
                          <p className="text-gray-600">{pkg.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1">
                        {pkg.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Check className="w-3 h-3 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {event.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{review.name}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">Verified</Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span>{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Book This Event</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Select Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="w-4 h-4 mr-2" />
                        {selectedDate ? selectedDate.toLocaleDateString() : 'Choose date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {selectedDate && timeSlots.length > 0 && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Select Time
                    </label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Number of Guests
                  </label>
                  <div className="flex items-center space-x-3">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center">{guestCount}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setGuestCount(guestCount + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Package Price</span>
                    <span>{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{calculateTotal()}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                >
                  Book Now
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="w-4 h-4 mr-1" />
                      <span>Free Delivery</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vendor Info */}
            <Card>
              <CardHeader>
                <CardTitle>About the Vendor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{event.vendor.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{event.vendor.rating}</span>
                        <span>•</span>
                        <span>{event.vendor.totalEvents} events</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.vendor.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Responds {event.vendor.responseTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Joined {event.vendor.joinedDate}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetail;