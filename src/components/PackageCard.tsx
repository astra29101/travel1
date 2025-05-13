
import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign } from 'lucide-react';

interface PackageCardProps {
  packageItem: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageItem }) => {
  return (
    <Card className="overflow-hidden card-hover animate-fade-in h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img
          src={packageItem.imageUrl}
          alt={packageItem.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-travel-teal text-white px-3 py-1 rounded-bl-md font-medium">
          {packageItem.durationDays} Days
        </div>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <h3 className="font-bold text-lg mb-2">{packageItem.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{packageItem.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{packageItem.durationDays} days</span>
          </div>
          
          <div className="flex items-center font-medium text-travel-teal">
            <DollarSign size={16} className="mr-1" />
            <span>₹{packageItem.cost.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/packages/${packageItem.id}`} className="w-full">
          <Button className="w-full bg-travel-teal hover:bg-travel-teal/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
