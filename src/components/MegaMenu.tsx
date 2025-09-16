import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Heart, Gift, Cake, Sparkles, Home, Baby, PartyPopper } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, category }) => {
  const menuData = {
    anniversary: {
      title: 'Anniversary',
      icon: <Heart className="w-5 h-5" />,
      sections: [
        {
          title: 'Candlelight Dinners',
          items: [
            { name: 'Private Couple Experiences', link: '/anniversary/private-couple' },
            { name: 'Rooftop Dinners', link: '/anniversary/rooftop-dinners' },
            { name: 'Poolside Candlelight Dinners', link: '/anniversary/poolside-dinners' },
            { name: 'Private Dinner & Movie', link: '/anniversary/dinner-movie' }
          ]
        },
        {
          title: 'Decorations',
          items: [
            { name: 'Anniversary Party Decors', link: '/anniversary/party-decorations' },
            { name: 'Hotel Room Decorations', link: '/anniversary/hotel-decorations' },
            { name: '25th / 50th Anniversary Decors', link: '/anniversary/milestone-decorations' },
            { name: 'Canopy Decorations', link: '/anniversary/canopy-decorations' }
          ]
        },
        {
          title: 'Gifts',
          items: [
            { name: 'Bubble Balloon Buckets', link: '/anniversary/bubble-balloons' },
            { name: 'Photo Frames', link: '/anniversary/photo-frames' },
            { name: 'Cake & Bouquet Combos', link: '/anniversary/cake-bouquet' },
            { name: 'Digital Surprises', link: '/anniversary/digital-surprises' }
          ]
        }
      ]
    },
    birthdays: {
      title: 'Birthdays',
      icon: <Cake className="w-5 h-5" />,
      sections: [
        {
          title: 'Candlelight Dinners',
          items: [
            { name: 'Romantic Birthday Dinner', link: '/birthdays/romantic-dinner' },
            { name: 'Surprise Dinner Setup', link: '/birthdays/surprise-dinner' }
          ]
        },
        {
          title: 'Birthday Decorations',
          items: [
            { name: 'For Him', link: '/birthdays/decorations/him' },
            { name: 'For Her', link: '/birthdays/decorations/her' },
            { name: 'Kids Decorations', link: '/birthdays/decorations/kids' },
            { name: '1st Birthday', link: '/birthdays/decorations/first-birthday' },
            { name: '18th Birthday', link: '/birthdays/decorations/eighteenth-birthday' },
            { name: 'Car Boot Surprise', link: '/birthdays/decorations/car-boot' },
            { name: 'Terrace Party', link: '/birthdays/decorations/terrace' },
            { name: 'Rosegold Theme', link: '/birthdays/decorations/rosegold' }
          ]
        },
        {
          title: 'Birthday Gifts',
          items: [
            { name: 'Balloon Buckets', link: '/birthdays/gifts/balloon-buckets' },
            { name: 'Digital Surprises', link: '/birthdays/gifts/digital-surprises' },
            { name: 'Cakes', link: '/birthdays/gifts/cakes' },
            { name: 'Bouquets', link: '/birthdays/gifts/bouquets' },
            { name: 'Live Guitarist', link: '/birthdays/gifts/live-guitarist' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      icon: <Sparkles className="w-5 h-5" />,
      sections: [
        {
          title: 'By Occasion',
          items: [
            { name: 'Lohri (13th Jan)', link: '/festivals/lohri' },
            { name: 'Valentine\'s Day (14th Feb)', link: '/festivals/valentines' },
            { name: 'Holi', link: '/festivals/holi' },
            { name: 'Diwali', link: '/festivals/diwali' },
            { name: 'Christmas', link: '/festivals/christmas' },
            { name: 'New Year', link: '/festivals/new-year' },
            { name: 'Women\'s Day', link: '/festivals/womens-day' },
            { name: 'Mother\'s Day', link: '/festivals/mothers-day' },
            { name: 'Father\'s Day', link: '/festivals/fathers-day' },
            { name: 'Navratri', link: '/festivals/navratri' },
            { name: 'Ganesh Chaturthi', link: '/festivals/ganesh-chaturthi' },
            { name: 'Karva Chauth', link: '/festivals/karva-chauth' },
            { name: 'Halloween', link: '/festivals/halloween' }
          ]
        }
      ]
    },
    decorations: {
      title: 'Decorations',
      icon: <Home className="w-5 h-5" />,
      sections: [
        {
          title: 'By Type',
          items: [
            { name: 'Balloon Decorations', link: '/decorations/balloon' },
            { name: 'Rosegold Decorations', link: '/decorations/rosegold' },
            { name: 'Umbrella Decorations', link: '/decorations/umbrella' },
            { name: 'Flower Decorations', link: '/decorations/flower' }
          ]
        },
        {
          title: 'By Occasion',
          items: [
            { name: 'Baby Shower', link: '/decorations/baby-shower' },
            { name: 'Kids Party', link: '/decorations/kids-party' },
            { name: 'Welcome Baby', link: '/decorations/welcome-baby' },
            { name: 'Anniversary', link: '/decorations/anniversary' },
            { name: 'Festive', link: '/decorations/festive' },
            { name: 'Bachelorette', link: '/decorations/bachelorette' },
            { name: 'Pre-Wedding', link: '/decorations/pre-wedding' }
          ]
        },
        {
          title: 'Kids Themes',
          items: [
            { name: 'Minion', link: '/decorations/kids/minion' },
            { name: 'Unicorn', link: '/decorations/kids/unicorn' },
            { name: 'Superhero', link: '/decorations/kids/superhero' },
            { name: 'Harry Potter', link: '/decorations/kids/harry-potter' },
            { name: 'Peppa Pig', link: '/decorations/kids/peppa-pig' }
          ]
        }
      ]
    },
    candlelight: {
      title: 'Candlelight Dinners',
      icon: <Sparkles className="w-5 h-5" />,
      sections: [
        {
          title: 'Trending',
          items: [
            { name: 'Rooftop Dinner', link: '/candlelight/rooftop' },
            { name: 'Dinner on Swing', link: '/candlelight/swing' },
            { name: 'Poolside Dining', link: '/candlelight/poolside' },
            { name: 'Private Supreme Show Movie Experience', link: '/candlelight/movie-experience' }
          ]
        },
        {
          title: 'Categories',
          items: [
            { name: 'Romantic Dinners', link: '/candlelight/romantic' },
            { name: 'Anniversary Specials', link: '/candlelight/anniversary' },
            { name: 'Proposal Dinners', link: '/candlelight/proposal' },
            { name: 'Birthday Celebrations', link: '/candlelight/birthday' }
          ]
        },
        {
          title: 'Our Recommendations',
          items: [
            { name: 'Best Sellers', link: '/candlelight/best-sellers' },
            { name: 'Premium Experiences', link: '/candlelight/premium' },
            { name: 'Budget Friendly', link: '/candlelight/budget' },
            { name: 'Same Day Booking', link: '/candlelight/same-day' }
          ]
        }
      ]
    },
    gifts: {
      title: 'Gifts',
      icon: <Gift className="w-5 h-5" />,
      sections: [
        {
          title: 'Personalized Gifts',
          items: [
            { name: 'Custom Photo Frames', link: '/gifts/photo-frames' },
            { name: 'Personalized Mugs', link: '/gifts/mugs' },
            { name: 'Custom T-shirts', link: '/gifts/t-shirts' },
            { name: 'Engraved Items', link: '/gifts/engraved' }
          ]
        },
        {
          title: 'Experience Gifts',
          items: [
            { name: 'Spa Vouchers', link: '/gifts/spa-vouchers' },
            { name: 'Dining Experiences', link: '/gifts/dining' },
            { name: 'Adventure Activities', link: '/gifts/adventure' },
            { name: 'Workshop Classes', link: '/gifts/workshops' }
          ]
        },
        {
          title: 'Digital Surprises',
          items: [
            { name: 'Video Messages', link: '/gifts/video-messages' },
            { name: 'Digital Photo Albums', link: '/gifts/photo-albums' },
            { name: 'Online Experiences', link: '/gifts/online-experiences' },
            { name: 'Virtual Celebrations', link: '/gifts/virtual-celebrations' }
          ]
        }
      ]
    },
    kids: {
      title: 'Kids Celebrations',
      icon: <PartyPopper className="w-5 h-5" />,
      sections: [
        {
          title: 'Birthday Parties',
          items: [
            { name: '1st Birthday', link: '/kids/first-birthday' },
            { name: 'Theme Parties', link: '/kids/theme-parties' },
            { name: 'Pool Parties', link: '/kids/pool-parties' },
            { name: 'Outdoor Adventures', link: '/kids/outdoor-adventures' }
          ]
        },
        {
          title: 'Special Occasions',
          items: [
            { name: 'Baby Shower', link: '/kids/baby-shower' },
            { name: 'Welcome Baby', link: '/kids/welcome-baby' },
            { name: 'Graduation', link: '/kids/graduation' },
            { name: 'Achievement Celebrations', link: '/kids/achievements' }
          ]
        },
        {
          title: 'Entertainment',
          items: [
            { name: 'Magicians', link: '/kids/magicians' },
            { name: 'Face Painting', link: '/kids/face-painting' },
            { name: 'Balloon Artists', link: '/kids/balloon-artists' },
            { name: 'Games & Activities', link: '/kids/games-activities' }
          ]
        }
      ]
    }
  };

  const currentMenu = menuData[category as keyof typeof menuData];

  if (!isOpen || !currentMenu) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-start space-x-8">
          {/* Menu Icon and Title */}
          <div className="flex items-center space-x-3 mb-6">
            {currentMenu.icon}
            <h3 className="text-xl font-semibold text-gray-900">{currentMenu.title}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentMenu.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-lg font-medium text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.link}
                      className="flex items-center text-gray-600 hover:text-primary transition-colors group"
                      onClick={onClose}
                    >
                      <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            to={`/${category}`}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            onClick={onClose}
          >
            View All {currentMenu.title} Experiences
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
