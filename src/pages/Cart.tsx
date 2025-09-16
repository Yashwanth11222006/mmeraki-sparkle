import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Heart, 
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  Users,
  Shield,
  Truck,
  CreditCard,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import OccasionNav from '@/components/OccasionNav';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import birthdayImage from '@/assets/birthday-event.jpg';
import anniversaryImage from '@/assets/anniversary-event.jpg';
import corporateImage from '@/assets/corporate-event.jpg';

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart } = useCart();
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [giftWrap, setGiftWrap] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Mock cart items - in real app, this would come from context
  const cartItems = [
    {
      id: '1',
      title: 'Rosegold Birthday Surprise',
      category: 'Birthday',
      subcategory: 'For Her',
      price: 2999,
      originalPrice: 3999,
      image: birthdayImage,
      quantity: 1,
      date: '2024-01-20',
      time: '2:00 PM',
      location: 'Delhi NCR',
      duration: '4 hours',
      capacity: '10-20 people',
      package: 'Basic Package',
      features: ['Rosegold decorations', 'Balloon setup', 'Cake arrangement']
    },
    {
      id: '2',
      title: 'Romantic Anniversary Dinner',
      category: 'Anniversary',
      subcategory: 'Candlelight Dinner',
      price: 2499,
      image: anniversaryImage,
      quantity: 1,
      date: '2024-01-22',
      time: '7:00 PM',
      location: 'Delhi NCR',
      duration: '3 hours',
      capacity: '2 people',
      package: 'Premium Package',
      features: ['Candlelight setup', 'Premium table setting', 'Photography']
    },
    {
      id: '3',
      title: 'Corporate Team Building',
      category: 'Corporate',
      subcategory: 'Team Building',
      price: 4999,
      image: corporateImage,
      quantity: 1,
      date: '2024-01-25',
      time: '10:00 AM',
      location: 'Delhi NCR',
      duration: '6 hours',
      capacity: '20-50 people',
      package: 'Luxury Package',
      features: ['Team activities', 'Professional facilitator', 'Catering']
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? subtotal * 0.1 : 0; // 10% discount for demo
  const giftWrapFee = giftWrap ? 500 : 0;
  const total = subtotal - discount + giftWrapFee;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'WELCOME10') {
      setAppliedCoupon(couponCode);
      setCouponCode('');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon('');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <OccasionNav />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any events to your cart yet.</p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/birthdays">
                Browse Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <OccasionNav />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <div className="text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {item.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {item.subcategory}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{item.package}</p>
                            
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{item.date} at {item.time}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{item.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{item.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                <span>{item.capacity}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary mb-2">
                              ₹{item.price.toLocaleString()}
                            </div>
                            {item.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">
                                ₹{item.originalPrice.toLocaleString()}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Heart className="w-4 h-4 mr-2" />
                              Save for Later
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, 0)}
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Coupon Code */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  Coupon Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-700 font-medium">
                        Coupon "{appliedCoupon}" applied! 10% discount
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleRemoveCoupon}>
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={handleApplyCoupon} disabled={!couponCode}>
                      Apply
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Special Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Special Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Any special requests or instructions for your events..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  rows={3}
                />
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon})</span>
                      <span>-₹{discount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="gift-wrap"
                        checked={giftWrap}
                        onCheckedChange={checked => setGiftWrap(checked === true)}
                      />
                      <label htmlFor="gift-wrap" className="text-sm">
                        Gift Wrap (+₹500)
                      </label>
                    </div>
                    {giftWrap && <span>₹{giftWrapFee.toLocaleString()}</span>}
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="w-4 h-4 mr-1" />
                      <span>Free Delivery</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security & Trust */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Why Choose MMeraki?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-3 text-green-500" />
                  <span>100% Secure Payment</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="w-4 h-4 mr-3 text-blue-500" />
                  <span>Same Day Delivery Available</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-3 text-purple-500" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-3 text-orange-500" />
                  <span>Trusted by 1M+ Customers</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;