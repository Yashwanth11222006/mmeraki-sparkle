import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-main.jpg';
import birthdayImage from '@/assets/birthday-event.jpg';
import anniversaryImage from '@/assets/anniversary-event.jpg';
import corporateImage from '@/assets/corporate-event.jpg';

const Home = () => {
  const categories = [
    {
      title: 'Anniversary',
      description: 'Celebrate love with romantic setups',
      image: anniversaryImage,
      link: '/experiences',
      color: 'bg-red-50'
    },
    {
      title: 'Birthday',
      description: 'Make birthdays unforgettable',
      image: birthdayImage,
      link: '/experiences',
      color: 'bg-purple-50'
    },
    {
      title: 'Corporate',
      description: 'Professional events & networking',
      image: corporateImage,
      link: '/corporate',
      color: 'bg-blue-50'
    },
    {
      title: 'Romantic',
      description: 'Intimate moments & surprises',
      image: anniversaryImage,
      link: '/experiences',
      color: 'bg-pink-50'
    }
  ];

  const featuredEvents = [
    {
      id: '1',
      name: 'Premium Anniversary Dinner',
      price: 299,
      rating: 4.9,
      reviews: 127,
      image: anniversaryImage,
      category: 'Anniversary',
      duration: '3 hours',
      capacity: '2-4 people'
    },
    {
      id: '2',
      name: 'Birthday Party Extravaganza',
      price: 199,
      rating: 4.8,
      reviews: 89,
      image: birthdayImage,
      category: 'Birthday',
      duration: '4 hours',
      capacity: '10-30 people'
    },
    {
      id: '3',
      name: 'Corporate Networking Event',
      price: 499,
      rating: 4.7,
      reviews: 45,
      image: corporateImage,
      category: 'Corporate',
      duration: '5 hours',
      capacity: '50-100 people'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      event: 'Anniversary Celebration',
      rating: 5,
      comment: 'Absolutely magical! Every detail was perfect and exceeded our expectations.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      event: 'Corporate Event',
      rating: 5,
      comment: 'Professional, elegant, and seamlessly executed. Our clients were impressed!',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Emily Davis',
      event: 'Birthday Party',
      rating: 5,
      comment: 'The best birthday celebration ever! The team made everything stress-free.',
      image: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Unforgettable</span> Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            From intimate celebrations to grand events, we craft experiences that leave lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="hero" asChild>
              <Link to="/experiences">
                Explore Events <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="xl" variant="neon" asChild>
              <Link to="/contact">
                Plan Custom Event
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Trending Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Trending Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular event categories designed to make every occasion special.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={category.link}>
                  <Card className="card-hover card-premium overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                        <p className="text-sm opacity-90">{category.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Featured Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked experiences that guarantee exceptional memories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/event/${event.id}`}>
                  <Card className="card-hover card-premium overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-white text-foreground">
                        {event.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{event.name}</h3>
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
                        <span className="text-2xl font-bold text-primary">${event.price}</span>
                        <Button variant="default">
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Time Deals */}
      <section className="py-20 bg-gradient-neon">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary text-white">Limited Time Offer</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Save 30% on Premium Events
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Book any premium event package this month and enjoy exceptional savings.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-sm text-gray-300">Days</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">14</div>
                <div className="text-sm text-gray-300">Hours</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">32</div>
                <div className="text-sm text-gray-300">Minutes</div>
              </div>
            </div>
            <Button size="xl" variant="hero">
              Claim Offer Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from people who trusted us with their special moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-premium p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;