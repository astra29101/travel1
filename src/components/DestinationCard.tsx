
import React from 'react';
import { Link } from 'react-router-dom';
import { Destination } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Card className="overflow-hidden card-hover animate-fade-in h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-travel-teal text-white px-2 py-1 text-sm">
          {destination.category}
        </div>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center mb-2">
          <MapPin size={16} className="text-travel-teal mr-1" />
          <h3 className="font-bold text-lg">{destination.name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">{destination.description}</p>
        
        <div className="mt-2">
          <p className="text-xs font-medium text-gray-500 mb-1">TOP HIGHLIGHTS</p>
          <ul className="space-y-1">
            {destination.highlights.slice(0, 2).map((highlight, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-center">
                <span className="w-1 h-1 bg-travel-teal rounded-full mr-2"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/destinations/${destination.id}`} className="w-full">
          <Button variant="outline" className="w-full border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white">
            View Packages
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
