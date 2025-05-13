
import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { destinations, packages, places } from '@/data/mockData';
import PackageCard from '@/components/PackageCard';
import { MapPin, Info, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const placesPerPage = 4;
  
  const destination = useMemo(() => {
    return destinations.find(dest => dest.id === id);
  }, [id]);

  const destinationPackages = useMemo(() => {
    return packages.filter(pkg => pkg.destinationId === id);
  }, [id]);

  const destinationPlaces = useMemo(() => {
    return places.filter(place => place.destinationId === id);
  }, [id]);

  // Calculate places for current page
  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = destinationPlaces.slice(indexOfFirstPlace, indexOfLastPlace);
  const totalPages = Math.ceil(destinationPlaces.length / placesPerPage);

  // Popular food items and must-try foods (mock data)
  const popularFoods = useMemo(() => {
    if (!destination) return [];
    
    // Generate some mock food items based on destination name
    const cityFoods = {
      'goa': ['Fish Curry', 'Vindaloo', 'Bebinca', 'Feni'],
      'rajasthan': ['Dal Baati Churma', 'Gatte ki Sabzi', 'Pyaaz Kachori', 'Laal Maas'],
      'manali': ['Sidu', 'Babru', 'Kullu Trout', 'Madra'],
      'kerala': ['Appam', 'Kerala Sadya', 'Malabar Biryani', 'Banana Chips']
    };
    
    // Default foods or use destination category for general foods
    return cityFoods[destination.name.toLowerCase()] || 
           ['Local Curry', 'Traditional Bread', 'Regional Dessert', 'Street Food'];
  }, [destination]);

  const handleGoBack = () => {
    navigate(-1);
  };

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

        {/* Back navigation button */}
        <Button 
          variant="outline" 
          className="absolute top-4 left-4 bg-white/80 hover:bg-white" 
          onClick={handleGoBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
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
          <div className="flex flex-wrap gap-3 mb-6">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                <span className="w-2 h-2 rounded-full bg-travel-teal mr-2 inline-block align-middle"></span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
          
          {/* Must-try foods section */}
          <h3 className="text-xl font-bold mb-3">Must Try Foods</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {popularFoods.map((food, index) => (
              <div key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 inline-block align-middle"></span>
                <span>{food}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Places Section with Pagination */}
        <h2 className="text-2xl font-bold mb-6">Places to Visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {currentPlaces.map((place) => (
            <div key={place.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={place.imageUrl} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                <p className="text-gray-600">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="my-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    isActive={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

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
