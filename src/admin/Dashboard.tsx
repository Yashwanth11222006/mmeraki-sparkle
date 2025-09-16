import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, ShoppingBag, TrendingUp, Star, Eye, Plus, DollarSign, Activity, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AdminDashboard = () => {
  const stats = [
    { 
      title: 'Total Bookings', 
      value: '1,234', 
      icon: Calendar, 
      change: '+12%', 
      changeType: 'positive',
      description: 'This month'
    },
    { 
      title: 'Revenue', 
      value: '₹2,34,567', 
      icon: DollarSign, 
      change: '+23%', 
      changeType: 'positive',
      description: 'This month'
    },
    { 
      title: 'Active Users', 
      value: '8,456', 
      icon: Users, 
      change: '+8%', 
      changeType: 'positive',
      description: 'Total customers'
    },
    { 
      title: 'Avg Rating', 
      value: '4.9', 
      icon: Star, 
      change: '+0.2', 
      changeType: 'positive',
      description: 'Customer satisfaction'
    },
  ];

  const recentBookings = [
    { 
      id: 1, 
      event: 'Romantic Anniversary Dinner', 
      customer: 'Priya Sharma', 
      date: '2024-01-15', 
      status: 'Completed',
      amount: '₹2,999',
      category: 'Anniversary'
    },
    { 
      id: 2, 
      event: 'Birthday Surprise Party', 
      customer: 'Rajesh Kumar', 
      date: '2024-01-14', 
      status: 'In Progress',
      amount: '₹1,999',
      category: 'Birthday'
    },
    { 
      id: 3, 
      event: 'Corporate Team Building', 
      customer: 'Tech Corp', 
      date: '2024-01-13', 
      status: 'Scheduled',
      amount: '₹4,999',
      category: 'Corporate'
    },
    { 
      id: 4, 
      event: 'Kids Theme Party', 
      customer: 'Anita Singh', 
      date: '2024-01-12', 
      status: 'Completed',
      amount: '₹1,499',
      category: 'Kids'
    },
  ];

  const topCategories = [
    { name: 'Anniversary', bookings: 45, revenue: '₹89,500', color: 'bg-red-500' },
    { name: 'Birthday', bookings: 38, revenue: '₹67,200', color: 'bg-purple-500' },
    { name: 'Corporate', bookings: 22, revenue: '₹98,400', color: 'bg-blue-500' },
    { name: 'Kids', bookings: 29, revenue: '₹43,500', color: 'bg-yellow-500' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your events business.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add New Event
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <stat.icon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-gray-500">{stat.description}</p>
                  <p className={`text-xs font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Recent Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <motion.div 
                    key={booking.id} 
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="font-medium text-gray-900">{booking.event}</p>
                          <p className="text-sm text-gray-600">{booking.customer}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {booking.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{booking.amount}</p>
                      <p className="text-sm text-gray-600">{booking.date}</p>
                      <Badge className={`text-xs mt-1 ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Categories & Quick Actions */}
        <div className="space-y-6">
          {/* Top Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Top Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCategories.map((category, index) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`} />
                      <span className="font-medium text-gray-900">{category.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{category.bookings} bookings</p>
                      <p className="text-xs text-gray-600">{category.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Add New Event
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  View Orders
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;