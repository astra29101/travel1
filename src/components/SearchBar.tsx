
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`flex w-full max-w-xl ${className}`}>
      <Input
        type="text"
        placeholder="Search destinations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-r-none border-r-0 focus-visible:ring-travel-teal"
      />
      <Button 
        type="submit" 
        className="rounded-l-none bg-travel-teal hover:bg-travel-teal/90"
      >
        <Search size={18} className="mr-2" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
