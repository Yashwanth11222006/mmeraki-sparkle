import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminOrders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Orders</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Order management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOrders;