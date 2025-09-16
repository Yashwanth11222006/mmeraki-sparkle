import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, Heart, Gift, Sparkles, ChevronLeft, ChevronRight, Clock, Truck, Shield, Award, Cake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import OccasionNav from '@/components/OccasionNav';
import EventHighlights from '@/components/EventHighlights';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import EventCard from '@/components/EventCard';
import { getFeaturedEvents, categories } from '@/data/events';
import heroImage from '@/assets/hero-main.jpg';
import birthdayImage from '@/assets/birthday-event.jpg';
import anniversaryImage from '@/assets/anniversary-event.jpg';
import corporateImage from '@/assets/corporate-event.jpg';

const Home = () => {
  const featuredEvents = getFeaturedEvents();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Celebrate Life's Moments with MMeraki",
      subtitle: "Create unforgettable memories with our premium event experiences",
      image: heroImage,
      ctaText: "Explore Experiences",
      ctaLink: "/experiences"
    },
    {
      title: "Romantic Anniversary Celebrations",
      subtitle: "Make your special moments magical with our curated anniversary packages",
      image: anniversaryImage,
      ctaText: "View Anniversary Packages",
      ctaLink: "/anniversary"
    },
    {
      title: "Birthday Surprises & Celebrations",
      subtitle: "Turn every birthday into an extraordinary celebration",
      image: birthdayImage,
      ctaText: "Plan Birthday Party",
      ctaLink: "/birthdays"
    },
    {
      title: "Corporate Events & Team Building",
      subtitle: "Professional event solutions for your business needs",
      image: corporateImage,
      ctaText: "Corporate Solutions",
      ctaLink: "/corporate"
    }
  ];

  const heroStats = [
    { icon: <Users className="w-6 h-6" />, value: "1M+", label: "Happy Customers" },
    { icon: <Calendar className="w-6 h-6" />, value: "50K+", label: "Events Completed" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "Average Rating" },
    { icon: <Heart className="w-6 h-6" />, value: "100%", label: "Satisfaction" }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const featuredFrames = [
    {
      title: 'Birthday Decorations',
      image: birthdayImage,
      link: '/birthdays/decorations',
      color: 'from-pink-500 to-purple-600',
      icon: <Cake className="w-8 h-8" />
    },
    {
      title: 'Same Day Decorations',
      image: anniversaryImage,
      link: '/decorations/same-day',
      color: 'from-blue-500 to-cyan-600',
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: 'Kids Birthday Decors',
      image: birthdayImage,
      link: '/kids/birthday-decorations',
      color: 'from-yellow-500 to-orange-600',
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: 'Corporate Events',
      image: corporateImage,
      link: '/corporate',
      color: 'from-indigo-500 to-purple-600',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Personalized Gifts',
      image: anniversaryImage,
      link: '/gifts/personalized',
      color: 'from-rose-500 to-pink-600',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Candlelight Dinner',
      image: anniversaryImage,
      link: '/candlelight',
      color: 'from-amber-500 to-yellow-600',
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: 'Baby Shower',
      image: birthdayImage,
      link: '/kids/baby-shower',
      color: 'from-green-500 to-emerald-600',
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: 'Baby Welcome',
      image: anniversaryImage,
      link: '/kids/welcome-baby',
      color: 'from-sky-500 to-blue-600',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Festive Celebrations',
      image: anniversaryImage,
      link: '/festivals',
      color: 'from-violet-500 to-purple-600',
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: 'Games & Activities',
      image: birthdayImage,
      link: '/activities',
      color: 'from-orange-500 to-red-600',
      icon: <Gift className="w-8 h-8" />
    }
  ];

  const trendingExperiences = [
    {
      title: 'Rooftop Candlelight Dinner',
      price: '₹2,999',
      image: anniversaryImage,
      rating: 4.9,
      reviews: 127,
      link: '/candlelight/rooftop'
    },
    {
      title: 'Birthday Surprise Setup',
      price: '₹1,999',
      image: birthdayImage,
      rating: 4.8,
      reviews: 89,
      link: '/birthdays/surprise-setup'
    },
    {
      title: 'Anniversary Room Decoration',
      price: '₹2,499',
      image: anniversaryImage,
      rating: 4.9,
      reviews: 156,
      link: '/anniversary/room-decoration'
    },
    {
      title: 'Corporate Team Building',
      price: '₹4,999',
      image: corporateImage,
      rating: 4.7,
      reviews: 34,
      link: '/corporate/team-building'
    },
    {
      title: 'Kids Theme Party',
      price: '₹1,499',
      image: birthdayImage,
      rating: 4.8,
      reviews: 67,
      link: '/kids/theme-party'
    },
    {
      title: 'Festival Decoration',
      price: '₹3,499',
      image: anniversaryImage,
      rating: 4.6,
      reviews: 45,
      link: '/festivals/decoration'
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "Mmeraki made our anniversary absolutely magical! The attention to detail was incredible."
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Best event planning service in Delhi NCR. Highly recommend for any celebration!"
    },
    {
      name: "Anita Singh",
      location: "Gurgaon",
      rating: 5,
      text: "Professional, creative, and reliable. They exceeded all our expectations!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <OccasionNav />
      
      {/* Hero Carousel */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 w-full h-full ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white max-w-4xl mx-auto px-4">
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl mb-8 text-gray-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full"
                        asChild
                      >
                        <Link to={slide.ctaLink}>
                          {slide.ctaText}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Frames */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular event categories and create unforgettable moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {featuredFrames.map((frame, index) => (
              <motion.div
                key={frame.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <Link to={frame.link}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-sm h-48">
                    <div className="relative h-full">
                      <img
                        src={frame.image}
                        alt={frame.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${frame.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                        <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                          {frame.icon}
                        </div>
                        <h3 className="text-sm md:text-base font-semibold text-center group-hover:text-white transition-colors">
                          {frame.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Section - Trending Experiences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trending Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and trending event experiences that customers love.
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4">
              {trendingExperiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80"
                >
                  <Link to={experience.link}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-sm group">
                      <div className="relative h-48">
                        <img
                          src={experience.image}
                          alt={experience.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-white">
                            {experience.price}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(experience.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {experience.rating} ({experience.reviews} reviews)
                          </span>
                        </div>
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-white"
                          asChild
                        >
                          <Link to={`/event/${experience.link.split('/').pop()}`}>
                            Book Now
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <EventHighlights />

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose MMeraki?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring years of experience and passion to every event, ensuring your special moments are perfect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-primary" />,
                title: "Affordable Prices",
                description: "Premium quality experiences at competitive prices that fit your budget"
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Trusted by 1M+ Customers",
                description: "Join millions of satisfied customers who trust us with their special moments"
              },
              {
                icon: <Sparkles className="w-12 h-12 text-primary" />,
                title: "Unique Experiences",
                description: "Every event is uniquely crafted to create memorable and personalized experiences"
              },
              {
                icon: <Truck className="w-12 h-12 text-primary" />,
                title: "Same Day Delivery",
                description: "Quick and reliable same-day delivery for urgent celebrations and surprises"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 shadow-sm border-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Magic?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you plan the perfect celebration. Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-3"
                asChild
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-3"
                asChild
              >
                <Link to="/experiences">
                  Browse Events
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;