import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BarChart3, Calendar, Users, ShoppingBag, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: BarChart3, label: 'Dashboard', href: '/admin' },
    { icon: Calendar, label: 'Events', href: '/admin/events' },
    { icon: ShoppingBag, label: 'Orders', href: '/admin/orders' },
    { icon: Users, label: 'Users', href: '/admin/users' },
    { icon: BarChart3, label: 'Reports', href: '/admin/reports' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <div className="w-64 bg-sidebar border-r border-sidebar-border">
        <div className="p-6">
          <h1 className="text-xl font-bold">Mmeraki Admin</h1>
        </div>
        <nav className="px-4">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <Button
                variant={location.pathname === item.href ? 'default' : 'ghost'}
                className="w-full justify-start mb-2"
              >
                <item.icon className="mr-2 w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;