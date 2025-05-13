
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl text-travel-teal">
            Wanderlust
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-travel-teal transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="text-gray-700 hover:text-travel-teal transition-colors">
              Destinations
            </Link>
            {isAuthenticated && (
              <Link to="/bookings" className="text-gray-700 hover:text-travel-teal transition-colors">
                My Bookings
              </Link>
            )}
            
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link to="/profile">
                  <Button variant="outline" size="sm" className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white">
                    <User size={18} className="mr-2" />
                    Profile
                  </Button>
                </Link>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="default" className="bg-travel-teal hover:bg-travel-teal/90">
                  Login / Signup
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-travel-teal"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              className="block py-2 text-gray-700 hover:text-travel-teal"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            {isAuthenticated && (
              <Link 
                to="/bookings" 
                className="block py-2 text-gray-700 hover:text-travel-teal"
                onClick={toggleMenu}
              >
                My Bookings
              </Link>
            )}
            
            {isAuthenticated ? (
              <div className="space-y-2">
                <Link 
                  to="/profile" 
                  className="block py-2 text-gray-700 hover:text-travel-teal"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="block"
                onClick={toggleMenu}
              >
                <Button variant="default" className="bg-travel-teal hover:bg-travel-teal/90 w-full">
                  Login / Signup
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
