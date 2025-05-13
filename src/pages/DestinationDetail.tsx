
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations, packages } from '@/data/mockData';
import PackageCard from '@/components/PackageCard';
import { MapPin, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const destination = useMemo(() => {
    return destinations.find(dest => dest.id === id);
  }, [id]);

  const destinationPackages = useMemo(() => {
    return packages.filter(pkg => pkg.destinationId === id);
  }, [id]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Destination not found</h2>
          <p className="mb-4">The destination you're looking for doesn't exist.</p>
          <Link to="/destinations">
            <Button variant="default" className="bg-travel-teal hover:bg-travel-teal/90">
              Back to Destinations
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[400px]">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {destination.name}
          </h1>
          <div className="flex items-center text-white">
            <MapPin size={18} className="mr-1" />
            <span>{destination.category.charAt(0).toUpperCase() + destination.category.slice(1)} destination</span>
          </div>
        </div>
      </div>

      {/* Destination Information */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Info className="text-travel-teal mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
              <p className="text-gray-700 mb-6">{destination.description}</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-travel-teal mr-2"></span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <h2 className="text-2xl font-bold mb-6">Available Packages</h2>
        {destinationPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationPackages.map((pkg) => (
              <PackageCard key={pkg.id} packageItem={pkg} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600">No packages available for this destination yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationDetail;
