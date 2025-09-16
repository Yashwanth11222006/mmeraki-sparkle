import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { categories } from '@/data/events';
import MegaMenu from './MegaMenu';

const OccasionNav = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (categorySlug: string) => {
    setActiveMenu(categorySlug);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <motion.div 
      className="bg-white border-b border-gray-200 sticky top-16 z-40 relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3">
          <nav className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => {
              const isActive = location.pathname === `/${category.slug}`;
              const hasMegaMenu = ['anniversary', 'birthdays', 'festivals', 'decorations', 'candlelight', 'gifts', 'kids'].includes(category.slug);
              
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => hasMegaMenu && handleMouseEnter(category.slug)}
                >
                  <Link
                    to={`/${category.slug}`}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                      ${isActive 
                        ? 'bg-primary text-white shadow-md' 
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                      }
                    `}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                    {hasMegaMenu && (
                      <ChevronDown className="w-3 h-3 ml-1" />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mega Menu */}
      {activeMenu && (
        <MegaMenu
          isOpen={true}
          onClose={() => setActiveMenu(null)}
          category={activeMenu}
        />
      )}
    </motion.div>
  );
};

export default OccasionNav;
