
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, UserRound } from 'lucide-react';

// Mock booking data
const mockBookings = [
  {
    id: '1',
    packageName: 'Goa Beach Paradise',
    destination: 'Goa',
    travelDates: ['2023-06-10', '2023-06-15'],
    guideName: 'Raj Sharma',
    status: 'upcoming',
    cost: 18500
  },
  {
    id: '2',
    packageName: 'Royal Rajasthan Circuit',
    destination: 'Rajasthan',
    travelDates: ['2023-07-15', '2023-07-25'],
    guideName: 'Devraj Singh',
    status: 'upcoming',
    cost: 45000
  },
  {
    id: '3',
    packageName: 'Manali Adventure Pack',
    destination: 'Manali',
    travelDates: ['2023-01-05', '2023-01-12'],
    guideName: 'Tenzing Sherpa',
    status: 'past',
    cost: 22000
  }
];

const Bookings: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Please Login</h2>
          <p className="mb-4">You need to be logged in to view your bookings.</p>
          <Link to="/login">
            <Button className="bg-travel-teal hover:bg-travel-teal/90">
              Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const upcomingBookings = mockBookings.filter(booking => booking.status === 'upcoming');
  const pastBookings = mockBookings.filter(booking => booking.status === 'past');

  const renderBookingCard = (booking: typeof mockBookings[0]) => (
    <Card key={booking.id} className="mb-4">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="font-bold text-xl mb-1">{booking.packageName}</h3>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={16} className="mr-1 text-travel-teal" />
              <span>{booking.destination}</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-travel-teal" />
                <div>
                  <p className="text-sm font-medium">Travel Dates</p>
                  <p className="text-gray-600">
                    {new Date(booking.travelDates[0]).toLocaleDateString()} - {new Date(booking.travelDates[1]).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <UserRound size={16} className="mr-2 text-travel-teal" />
                <div>
                  <p className="text-sm font-medium">Guide</p>
                  <p className="text-gray-600">{booking.guideName}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-lg font-bold text-travel-teal">₹{booking.cost.toLocaleString()}</p>
            <Link to={`/packages/details/${booking.id}`}>
              <Button variant="outline" size="sm" className="mt-4 border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
          
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">
                Upcoming Bookings ({upcomingBookings.length})
              </TabsTrigger>
              <TabsTrigger value="past">
                Past Bookings ({pastBookings.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              {upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingBookings.map(renderBookingCard)}
                </div>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>No Upcoming Bookings</CardTitle>
                    <CardDescription>
                      You don't have any upcoming trips planned yet.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center pt-4">
                    <Link to="/destinations">
                      <Button className="bg-travel-teal hover:bg-travel-teal/90">
                        Explore Destinations
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {pastBookings.length > 0 ? (
                <div className="space-y-4">
                  {pastBookings.map(renderBookingCard)}
                </div>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>No Past Bookings</CardTitle>
                    <CardDescription>
                      You haven't taken any trips with us yet.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center pt-4">
                    <Link to="/destinations">
                      <Button className="bg-travel-teal hover:bg-travel-teal/90">
                        Explore Destinations
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
