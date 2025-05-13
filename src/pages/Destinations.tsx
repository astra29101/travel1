
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { destinations } from '@/data/mockData';
import DestinationCard from '@/components/DestinationCard';
import SearchBar from '@/components/SearchBar';
import { Destination } from '@/types';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

// All possible categories
const categories = ['all', 'beach', 'mountain', 'historical', 'adventure', 'cultural'];

const Destinations: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);

  useEffect(() => {
    filterDestinations();
  }, [searchQuery, selectedCategory]);

  const filterDestinations = () => {
    let filtered = [...destinations];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(query) || 
        dest.description.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(dest => dest.category === selectedCategory);
    }
    
    setFilteredDestinations(filtered);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterDestinations();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-travel-blue text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our handpicked destinations and find your next adventure
          </p>
          
          {/* Search form */}
          <form onSubmit={handleSearch} className="flex max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search destinations..."
              className="flex-grow p-3 rounded-l-md border-0 focus:ring-2 focus:ring-travel-teal"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="bg-travel-teal hover:bg-travel-teal/90 rounded-l-none flex items-center"
            >
              <Search size={18} className="mr-2" />
              Search
            </Button>
          </form>
        </div>
      </div>

      {/* Filters and Results */}
      <div className="container mx-auto py-8 px-4">
        {/* Category filter */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Filter size={18} className="mr-2 text-travel-teal" />
            <h2 className="text-lg font-medium">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-travel-teal hover:bg-travel-teal/90" 
                  : "border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-medium mb-2">No destinations found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find destinations
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
