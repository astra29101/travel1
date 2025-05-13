
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, MapPin } from 'lucide-react';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-travel-teal/10 rounded-full">
            <MapPin size={60} className="text-travel-teal" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">
          Oops! You seem to be lost in your journey
        </p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or might have been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="bg-travel-teal hover:bg-travel-teal/90 w-full sm:w-auto">
              <Home size={18} className="mr-2" />
              Return to Home
            </Button>
          </Link>
          <Link to="/destinations">
            <Button variant="outline" className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white w-full sm:w-auto">
              Explore Destinations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
