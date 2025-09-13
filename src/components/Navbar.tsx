import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown, HelpCircle, MapPin } from 'lucide-react';
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

  const occasionCategories = [
    { name: 'Anniversary', path: '/anniversary' },
    { name: 'Birthdays', path: '/birthdays' },
    { name: 'Gifts', path: '/gifts' },
    { name: 'Candlelight Dinners', path: '/candlelight' },
    { name: 'Decorations', path: '/decorations' },
    { name: 'Festivals', path: '/festivals' },
    { name: "Kid's Celebrations", path: '/kids' },
    { name: 'Corporate Events', path: '/corporate' }
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
                placeholder="What are you celebrating?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-0 focus:bg-white transition-colors rounded-full"
              />
            </div>
          </form>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Help Center */}
            <Button variant="ghost" className="hidden md:flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
              <HelpCircle className="w-4 h-4" />
              <span>HELP CENTER</span>
            </Button>

            {/* Login */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
                    <User className="w-4 h-4" />
                    <span>LOG IN</span>
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
                <Button variant="ghost" className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
                  <User className="w-4 h-4" />
                  <span>LOG IN</span>
                </Button>
              </Link>
            )}

            {/* Location */}
            <Button variant="ghost" className="hidden md:flex items-center space-x-1 text-sm text-primary">
              <MapPin className="w-4 h-4" />
              <span>DELHI NCR</span>
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
                  placeholder="What are you celebrating?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {occasionCategories.map((category) => (
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

      {/* First Sub Navigation - Occasions */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center space-x-8 py-3 text-sm">
            {occasionCategories.map((category, index) => (
              <React.Fragment key={category.name}>
                <Link
                  to={category.path}
                  className={`hover:text-primary transition-colors ${
                    index === occasionCategories.length - 1 ? 'text-primary font-medium' : 'text-foreground'
                  }`}
                >
                  {category.name}
                </Link>
                {index < occasionCategories.length - 1 && (
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Second Sub Navigation - Event Categories */}
      <div className="bg-muted/30 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 max-w-6xl mx-auto">
            {quickCategories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-white/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-2 shadow-sm group-hover:shadow-md transition-shadow border border-border/20">
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