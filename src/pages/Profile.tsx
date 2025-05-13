
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, MapPin, Calendar, LogOut } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  // Edit profile state
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [age, setAge] = useState(user?.age?.toString() || '');
  const [location, setLocation] = useState(user?.location || '');
  const [isLoading, setIsLoading] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Please Login</h2>
          <p className="mb-4">You need to be logged in to view your profile.</p>
          <Link to="/login">
            <Button className="bg-travel-teal hover:bg-travel-teal/90">
              Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to update profile
    setTimeout(() => {
      setIsLoading(false);
      // Show success message (in a real app, this would be handled by the context/API)
      alert('Profile updated successfully!');
    }, 1000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>
          
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Profile Information</TabsTrigger>
              <TabsTrigger value="edit">Edit Profile</TabsTrigger>
            </TabsList>
            
            {/* View Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    View your personal information and booking history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-travel-teal/20 flex items-center justify-center text-travel-teal">
                        <User size={40} />
                      </div>
                    </div>
                    
                    <div className="flex-grow space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium flex items-center">
                            <User size={16} className="mr-2 text-travel-teal" />
                            {user.name}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium flex items-center">
                            <Mail size={16} className="mr-2 text-travel-teal" />
                            {user.email}
                          </p>
                        </div>
                        
                        {user.age && (
                          <div>
                            <p className="text-sm text-gray-500">Age</p>
                            <p className="font-medium flex items-center">
                              <Calendar size={16} className="mr-2 text-travel-teal" />
                              {user.age} years
                            </p>
                          </div>
                        )}
                        
                        {user.location && (
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium flex items-center">
                              <MapPin size={16} className="mr-2 text-travel-teal" />
                              {user.location}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link to="/bookings">
                    <Button variant="outline" className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white">
                      My Bookings
                    </Button>
                  </Link>
                  <Button 
                    variant="destructive" 
                    onClick={handleLogout}
                    className="flex items-center"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Edit Profile Tab */}
            <TabsContent value="edit">
              <Card>
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                  <CardDescription>
                    Update your personal information
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSaveProfile}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input 
                          id="age"
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit"
                      className="bg-travel-teal hover:bg-travel-teal/90 w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Saving Changes...' : 'Save Changes'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
