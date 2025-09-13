import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { items } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const mainCategories = [
    { 
      name: 'Anniversary', 
      path: '/anniversary',
      subcategories: ['Romantic Dinners', 'Surprise Setups', 'Decorations', 'Gifts']
    },
    { 
      name: 'Birthdays', 
      path: '/birthdays',
      subcategories: ['Kids Birthday', 'Adult Birthday', 'Surprise Parties', 'Decorations']
    },
    { 
      name: 'Gifts', 
      path: '/gifts',
      subcategories: ['Personalised Gifts', 'Flowers', 'Cakes', 'Hampers']
    },
    { 
      name: 'Candlelight Dinners', 
      path: '/candlelight',
      subcategories: ['Rooftop Dinners', 'Home Setups', 'Restaurant Bookings']
    },
    { 
      name: 'Decorations', 
      path: '/decorations',
      subcategories: ['Birthday Decor', 'Anniversary Decor', 'Festival Decor']
    },
    { 
      name: 'Festivals', 
      path: '/festivals',
      subcategories: ['Diwali', 'Christmas', 'New Year', 'Holi']
    },
    { 
      name: "Kid's Celebrations", 
      path: '/kids',
      subcategories: ['Birthday Parties', 'Games & Activities', 'Themed Decor']
    },
    { 
      name: 'Corporate Events', 
      path: '/corporate',
      subcategories: ['Team Building', 'Office Parties', 'Product Launches']
    }
  ];

  const quickCategories = [
    { name: 'Birthday Decorations', icon: '🎈', path: '/decorations?type=birthday' },
    { name: 'Same Day Decorations', icon: '⚡', path: '/decorations?delivery=same-day' },
    { name: 'Kids Birthday Decors', icon: '🎪', path: '/kids/birthday' },
    { name: 'Corporate Events', icon: '💼', path: '/corporate' },
    { name: 'Personalised Gifts', icon: '🎁', path: '/gifts/personalised' },
    { name: 'Candlelight Dinner', icon: '🕯️', path: '/candlelight' },
    { name: 'Baby Shower', icon: '👶', path: '/baby-shower' },
    { name: 'Baby Welcome', icon: '🍼', path: '/baby-welcome' },
    { name: 'Festive Celebrations', icon: '🎊', path: '/festivals' },
    { name: 'Games & Activities', icon: '🎮', path: '/activities' }
  ];

  const quickLinks = [
    'Anniversary', 'Birthday', 'Candlelight', 'Romantic Surprises', 'Proposals', 'Kids Parties'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Mmeraki</span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search events, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-0 focus:bg-white transition-colors"
              />
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            
            {mainCategories.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground hover:text-primary px-3 py-2">
                    {category.name} <ChevronDown className="ml-1 w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to={category.path} className="w-full font-medium">
                      View All {category.name}
                    </Link>
                  </DropdownMenuItem>
                  {category.subcategories.map((sub) => (
                    <DropdownMenuItem key={sub} asChild>
                      <Link to={`${category.path}/${sub.toLowerCase().replace(/\s+/g, '-')}`} className="w-full">
                        {sub}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Profile */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white border border-border shadow-medium" align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Wishlist</Link>
                  </DropdownMenuItem>
                  {user?.isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin">Admin Panel</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={logout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search events, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link
                to="/"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {mainCategories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Quick Categories Section */}
      <div className="bg-secondary/30 border-t border-border py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 max-w-6xl mx-auto">
            {quickCategories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-white/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="text-xl">{category.icon}</span>
                </div>
                <span className="text-xs text-center font-medium text-foreground leading-tight">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;