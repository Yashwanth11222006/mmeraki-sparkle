import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminReports = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Reports</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Analytics & Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Advanced reporting features coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReports;