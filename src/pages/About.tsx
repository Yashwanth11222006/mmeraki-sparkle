import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">About Mmeraki</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Creating unforgettable moments through beautifully crafted events and experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-xl text-muted-foreground mb-8">
            At Mmeraki, we believe every moment deserves to be celebrated with beauty, creativity, and attention to detail. 
            Our passion for creating extraordinary experiences drives everything we do.
          </p>
          <p className="text-lg text-muted-foreground">
            From intimate romantic dinners to grand corporate events, we bring your vision to life with professional 
            excellence and creative innovation. Our team of experienced event specialists works tirelessly to ensure 
            every detail is perfect, creating memories that last a lifetime.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default About;