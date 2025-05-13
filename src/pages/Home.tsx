
import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '@/components/HeroBanner';
import DestinationCard from '@/components/DestinationCard';
import PackageCard from '@/components/PackageCard';
import { Button } from '@/components/ui/button';
import { featuredDestinations, topPackages } from '@/data/mockData';
import { MapPin, Calendar, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Destinations Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <Globe size={28} className="mr-2 text-travel-teal" />
              Featured Destinations
            </h2>
            <Link to="/destinations">
              <Button variant="outline" className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white">
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Wanderlust</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-travel-teal/10 p-4 mb-4">
                <MapPin size={32} className="text-travel-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Handpicked Destinations</h3>
              <p className="text-gray-600">
                Carefully selected locations to ensure you experience the best each place has to offer.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-travel-teal/10 p-4 mb-4">
                <Calendar size={32} className="text-travel-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expertly Planned Itineraries</h3>
              <p className="text-gray-600">
                Well-thought-out travel plans that maximize your experience without the hassle.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-travel-teal/10 p-4 mb-4">
                <Globe size={32} className="text-travel-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expert Guides</h3>
              <p className="text-gray-600">
                Connect with experienced local guides who bring destinations to life with their knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Packages Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Top Packages</h2>
            <Link to="/destinations">
              <Button variant="outline" className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white">
                All Packages
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topPackages.map((packageItem) => (
              <PackageCard key={packageItem.id} packageItem={packageItem} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 bg-travel-blue text-white">
        <div className="absolute inset-0 bg-travel-teal/20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Next Adventure Today!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our curated collections of destinations and packages to find your perfect getaway.
          </p>
          <Link to="/destinations">
            <Button size="lg" className="bg-travel-teal hover:bg-travel-teal/90 text-white">
              Explore Destinations
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
