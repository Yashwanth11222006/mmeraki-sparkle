import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock, Building, Award, Target, Coffee } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import corporateImage from '@/assets/corporate-event.jpg';

const Corporate = () => {
  const { addItem } = useCart();

  const corporatePackages = [
    {
      id: 'corp-1',
      name: 'Executive Networking Event',
      description: 'Professional networking experience with premium catering, elegant setup, and structured networking activities.',
      price: 499,
      rating: 4.8,
      reviews: 34,
      image: corporateImage,
      duration: '4 hours',
      capacity: '50-100 people',
      features: ['Premium Catering', 'Professional Photography', 'Networking Activities', 'Executive Setup'],
      category: 'Networking'
    },
    {
      id: 'corp-2',
      name: 'Team Building Retreat',
      description: 'Comprehensive team building experience with activities, workshops, and collaborative exercises.',
      price: 299,
      rating: 4.9,
      reviews: 67,
      image: corporateImage,
      duration: '6 hours',
      capacity: '20-50 people',
      features: ['Team Activities', 'Professional Facilitator', 'Lunch & Refreshments', 'Activity Materials'],
      category: 'Team Building'
    },
    {
      id: 'corp-3',
      name: 'Product Launch Event',
      description: 'Complete product launch experience with media setup, professional presentation, and guest management.',
      price: 799,
      rating: 4.7,
      reviews: 23,
      image: corporateImage,
      duration: '5 hours',
      capacity: '100-200 people',
      features: ['Media Setup', 'Professional AV', 'Guest Management', 'Catering Services'],
      category: 'Launch'
    }
  ];

  const services = [
    {
      icon: Building,
      title: 'Venue Selection',
      description: 'Premium corporate venues with professional amenities'
    },
    {
      icon: Users,
      title: 'Event Management',
      description: 'Full-service event coordination and execution'
    },
    {
      icon: Award,
      title: 'Custom Branding',
      description: 'Branded materials and corporate identity integration'
    },
    {
      icon: Target,
      title: 'ROI Focused',
      description: 'Measurable outcomes and business objective alignment'
    }
  ];

  const handleAddToCart = (pkg: typeof corporatePackages[0]) => {
    addItem({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      image: pkg.image,
      category: 'Corporate'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-premium text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary">Corporate Events</Badge>
            <h1 className="text-5xl font-bold mb-4">Professional Corporate Events</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Elevate your business with professionally executed corporate events that leave lasting impressions.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="hero" size="lg">
                View Packages
              </Button>
              <Button variant="neon" size="lg">
                Custom Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Mmeraki for Corporate Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional excellence meets creative innovation in every corporate event we execute.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-premium text-center p-6 h-full">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Corporate Event Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional packages designed to meet diverse corporate needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-hover card-premium overflow-hidden h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-foreground">
                      {pkg.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {pkg.description}
                    </p>
                    
                    <div className="flex items-center mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{pkg.rating}</span>
                      <span className="text-muted-foreground ml-1">({pkg.reviews})</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {pkg.capacity}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Included:</h4>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">${pkg.price}</span>
                      <Button 
                        variant="default"
                        onClick={() => handleAddToCart(pkg)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-neon">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Need a Custom Corporate Event?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our team specializes in creating bespoke corporate experiences tailored to your specific business objectives.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="hero" size="lg">
                <Coffee className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
              <Button variant="neon" size="lg">
                Request Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;