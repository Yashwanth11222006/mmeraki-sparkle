import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Gifts = () => {
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
            <h1 className="text-5xl font-bold mb-4">Special Gifts</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Curated gift collections and personalized presents for every occasion and celebration.
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
            We're selecting the perfect gifts and creating custom gift packages. 
            From luxury items to personalized keepsakes, we'll have it all.
          </p>
          <Button variant="hero" size="lg">
            Join Waitlist
          </Button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Gifts;