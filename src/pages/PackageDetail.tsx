
import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { packages, places, guides, destinations } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, MapPin, DollarSign, Star, Languages, CalendarDays, Users, Award, ArrowLeft } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date>();
  
  // Find the package and related data
  const packageItem = useMemo(() => {
    return packages.find(pkg => pkg.id === id);
  }, [id]);

  const destination = useMemo(() => {
    if (!packageItem) return null;
    return destinations.find(dest => dest.id === packageItem.destinationId);
  }, [packageItem]);

  const packagePlaces = useMemo(() => {
    if (!packageItem) return [];
    return places.filter(place => packageItem.placesCovered.includes(place.name));
  }, [packageItem]);

  const availableGuides = useMemo(() => {
    if (!packageItem) return [];
    return guides.filter(guide => guide.destinationId === packageItem.destinationId);
  }, [packageItem]);

  // Calculate end date based on start date and package duration
  const endDate = useMemo(() => {
    if (!startDate || !packageItem) return undefined;
    return addDays(new Date(startDate), packageItem.durationDays - 1);
  }, [startDate, packageItem]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleBooking = () => {
    if (!isAuthenticated) {
      toast('Please login to book this package');
      // In a real app, we'd save the package in session/local storage
      return;
    }
    
    if (!startDate) {
      toast('Please select your travel dates');
      return;
    }
    
    if (!selectedGuide) {
      toast('Please select a guide');
      return;
    }
    
    // In a real app, we'd move to the booking confirmation page
    toast.success('Package booked successfully!');
  };

  if (!packageItem || !destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Package not found</h2>
          <p className="mb-4">The package you're looking for doesn't exist.</p>
          <Link to="/destinations">
            <Button>Back to Destinations</Button>
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
          src={packageItem.imageUrl}
          alt={packageItem.title}
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {packageItem.title}
            </h1>
            <div className="flex items-center text-white mb-4">
              <MapPin size={18} className="mr-1" />
              <span>{destination.name}</span>
            </div>
            <div className="inline-flex items-center bg-travel-teal text-white px-3 py-1 rounded-md text-sm">
              <Clock size={16} className="mr-1" />
              {packageItem.durationDays} Days
            </div>
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

      {/* Package Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 mb-6">{packageItem.description}</p>

              <h3 className="text-xl font-bold mb-4">Package Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock size={20} className="text-travel-teal mr-3" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-gray-600">{packageItem.durationDays} Days</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign size={20} className="text-travel-teal mr-3" />
                  <div>
                    <p className="font-medium">Price</p>
                    <p className="text-gray-600">₹{packageItem.cost.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Itinerary</h3>
              <ul className="space-y-4 mb-6">
                {packageItem.placesCovered.map((place, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-travel-teal text-white rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{place}</p>
                      <p className="text-gray-600 text-sm">Day {index + 1}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Places Covered */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Places You'll Visit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packagePlaces.map((place) => (
                  <div key={place.id} className="flex flex-col rounded-lg overflow-hidden border">
                    <img 
                      src={place.imageUrl} 
                      alt={place.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{place.name}</h3>
                      <p className="text-gray-600 text-sm">{place.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-6">Book This Package</h2>
              
              {/* Date Selection - Only Start Date */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Select Start Date</h3>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                {startDate && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <CalendarDays size={16} className="text-travel-teal mr-2" />
                      <div>
                        <p className="text-sm font-medium">Trip Duration</p>
                        <p className="text-xs text-gray-600">
                          {format(startDate, "PPP")} - {endDate ? format(endDate, "PPP") : ""}
                          <span className="ml-2 text-travel-teal">({packageItem.durationDays} days)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Guide Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Select Guide</h3>
                <div className="space-y-4">
                  {availableGuides.map((guide) => (
                    <div 
                      key={guide.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedGuide === guide.id 
                          ? 'border-travel-teal bg-travel-teal/10' 
                          : 'hover:border-travel-teal'
                      }`}
                      onClick={() => setSelectedGuide(guide.id)}
                    >
                      <div className="flex items-center mb-2">
                        <img 
                          src={guide.imageUrl} 
                          alt={guide.name}
                          className="w-10 h-10 rounded-full mr-3" 
                        />
                        <div>
                          <h4 className="font-medium">{guide.name}</h4>
                          <div className="flex items-center text-sm text-yellow-500">
                            <Star size={14} className="fill-yellow-500 mr-1" />
                            <span>{guide.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <Award size={14} className="text-travel-teal mr-1" />
                          <span>{guide.experience} yrs exp</span>
                        </div>
                        <div className="flex items-center">
                          <Languages size={14} className="text-travel-teal mr-1" />
                          <span>{guide.languages.length} languages</span>
                        </div>
                        <div className="flex items-center col-span-2">
                          <DollarSign size={14} className="text-travel-teal mr-1" />
                          <span>₹{guide.pricePerDay}/day</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Price Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Package Cost</span>
                    <span>₹{packageItem.cost.toLocaleString()}</span>
                  </div>
                  {selectedGuide && (
                    <div className="flex justify-between">
                      <span>Guide Fee</span>
                      <span>
                        ₹{(availableGuides.find(g => g.id === selectedGuide)?.pricePerDay || 0) * packageItem.durationDays}
                      </span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>
                        ₹{(packageItem.cost + (selectedGuide 
                          ? (availableGuides.find(g => g.id === selectedGuide)?.pricePerDay || 0) * packageItem.durationDays
                          : 0
                        )).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <Button 
                onClick={handleBooking} 
                className="w-full bg-travel-teal hover:bg-travel-teal/90"
                disabled={!startDate || !selectedGuide}
              >
                {isAuthenticated ? 'Book Now' : 'Login to Book'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
