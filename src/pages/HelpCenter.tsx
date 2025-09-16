import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  ChevronRight,
  HelpCircle,
  FileText,
  CreditCard,
  Truck,
  Shield,
  Star,
  Send,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import OccasionNav from '@/components/OccasionNav';
import Footer from '@/components/Footer';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqCategories = [
    {
      title: 'General',
      icon: <HelpCircle className="w-5 h-5" />,
      faqs: [
        {
          question: 'What is MMeraki?',
          answer: 'MMeraki is a premium event planning platform that helps you create unforgettable moments for all your special occasions. We offer a wide range of services including birthday parties, anniversary celebrations, corporate events, and more.'
        },
        {
          question: 'How do I book an event?',
          answer: 'Booking an event is simple! Browse our categories, select your preferred event, choose a date and time, add it to your cart, and proceed to checkout. You can also contact our team for personalized assistance.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We currently serve Delhi NCR and surrounding areas. We are expanding to other cities soon. Contact us to check availability in your area.'
        },
        {
          question: 'Do you offer same-day bookings?',
          answer: 'Yes! We offer same-day delivery and setup for most of our events, subject to availability. Please contact us directly for urgent bookings.'
        }
      ]
    },
    {
      title: 'Booking & Payment',
      icon: <CreditCard className="w-5 h-5" />,
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards, UPI payments, digital wallets, and net banking. All payments are processed securely through our encrypted payment gateway.'
        },
        {
          question: 'Can I cancel or modify my booking?',
          answer: 'Yes, you can cancel or modify your booking up to 24 hours before the event date. Cancellation fees may apply based on the timing and package selected.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer full refunds for cancellations made 48+ hours in advance. Partial refunds may be available for cancellations made 24-48 hours in advance, subject to our terms and conditions.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely! We use industry-standard encryption and security measures to protect your payment information. We never store your card details on our servers.'
        }
      ]
    },
    {
      title: 'Delivery & Setup',
      icon: <Truck className="w-5 h-5" />,
      faqs: [
        {
          question: 'How far in advance should I book?',
          answer: 'We recommend booking at least 3-7 days in advance to ensure availability. For popular dates and peak seasons, we suggest booking 2-3 weeks ahead.'
        },
        {
          question: 'Do you provide setup and cleanup?',
          answer: 'Yes! Our team handles complete setup and cleanup for all events. We arrive 1-2 hours before the event and clean up after the celebration ends.'
        },
        {
          question: 'What if I need to change the venue?',
          answer: 'Venue changes are possible up to 48 hours before the event, subject to availability and additional charges if applicable. Contact our team for assistance.'
        },
        {
          question: 'Do you work with outdoor venues?',
          answer: 'Yes, we work with both indoor and outdoor venues. We can adapt our setups to various environments and weather conditions.'
        }
      ]
    },
    {
      title: 'Safety & Security',
      icon: <Shield className="w-5 h-5" />,
      faqs: [
        {
          question: 'Are your staff background verified?',
          answer: 'Yes, all our team members undergo thorough background checks and are trained professionals. We maintain the highest standards of safety and professionalism.'
        },
        {
          question: 'Do you have insurance coverage?',
          answer: 'Yes, we are fully insured and bonded. Our comprehensive insurance covers all aspects of our services to protect both our clients and our team.'
        },
        {
          question: 'What safety measures do you follow?',
          answer: 'We follow strict safety protocols including regular equipment maintenance, safety training for all staff, and adherence to local safety regulations.'
        },
        {
          question: 'Can I request specific safety requirements?',
          answer: 'Absolutely! We can accommodate specific safety requirements and dietary restrictions. Please mention these during booking or contact our team.'
        }
      ]
    }
  ];

  const popularTopics = [
    { title: 'How to book an event', category: 'General', views: 1250 },
    { title: 'Payment and refunds', category: 'Payment', views: 980 },
    { title: 'Same day delivery', category: 'Delivery', views: 756 },
    { title: 'Event customization', category: 'General', views: 642 },
    { title: 'Cancellation policy', category: 'Payment', views: 534 },
    { title: 'Contact information', category: 'General', views: 421 }
  ];

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-6 h-6" />,
      availability: '24/7',
      responseTime: 'Within 2 minutes',
      action: 'Start Chat'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className="w-6 h-6" />,
      availability: '9 AM - 9 PM',
      responseTime: 'Immediate',
      action: '+91 98765 43210'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed queries',
      icon: <Mail className="w-6 h-6" />,
      availability: '24/7',
      responseTime: 'Within 4 hours',
      action: 'support@mmeraki.com'
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <OccasionNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="faq" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="topics">Popular Topics</TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to the most common questions about our services
              </p>
            </div>

            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        {category.icon}
                        <span className="ml-2">{category.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {method.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                      <p className="text-gray-600 mb-4">{method.description}</p>
                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center justify-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{method.availability}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>{method.responseTime}</span>
                        </div>
                      </div>
                      <Button className="w-full">
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        value={contactForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Subject *
                    </label>
                    <Input
                      value={contactForm.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe your question or issue in detail..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Popular Topics Tab */}
          <TabsContent value="topics" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Most searched and viewed help articles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{topic.title}</h3>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <Badge variant="outline">{topic.category}</Badge>
                        <span className="flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          {topic.views} views
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;
