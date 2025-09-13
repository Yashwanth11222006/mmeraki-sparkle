import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminEvents = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Events</h1>
        <Button>Add New Event</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Events</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Event management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminEvents;