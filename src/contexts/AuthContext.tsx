
import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from '../types';
import { toast } from '@/components/ui/sonner';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('travel_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse user from localStorage');
        localStorage.removeItem('travel_user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in a real app, this would make an API call
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock users (in a real app, this would come from the backend)
      const mockUser = { 
        id: "123", 
        name: "John Doe", 
        email, 
        createdAt: new Date() 
      };
      
      // Mock validation
      if (email === 'user@example.com' && password === 'password') {
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('travel_user', JSON.stringify(mockUser));
        toast.success('Logged in successfully!');
        return true;
      } else {
        toast.error('Invalid email or password');
        return false;
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please try again.');
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock signup - in a real app, this would make an API call
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newUser = { 
        id: `user_${Date.now()}`, 
        name, 
        email, 
        createdAt: new Date() 
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('travel_user', JSON.stringify(newUser));
      toast.success('Account created successfully!');
      return true;
    } catch (error) {
      console.error('Signup failed:', error);
      toast.error('Signup failed. Please try again.');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('travel_user');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
