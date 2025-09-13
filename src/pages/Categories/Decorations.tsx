import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Decorations = () => {
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
            <h1 className="text-5xl font-bold mb-4">Event Decorations</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Transform any space with our premium decoration packages and custom design services.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're crafting an amazing collection of decoration packages. Stay tuned for beautiful themes, 
            premium setups, and custom decoration services.
          </p>
          <Button variant="hero" size="lg">
            Notify Me When Available
          </Button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Decorations;