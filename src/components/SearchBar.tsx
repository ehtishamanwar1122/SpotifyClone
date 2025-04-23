
import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="w-5 h-5 text-spotify-gray-400" />
      </div>
      <input
        type="text"
        className="bg-spotify-gray-700 text-white placeholder-spotify-gray-400 border-none rounded-full py-3 pl-10 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-spotify-DEFAULT"
        placeholder="What do you want to listen to?"
        value={query}
        onChange={handleChange}
      />
      {query && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={clearSearch}
        >
          <X className="w-5 h-5 text-spotify-gray-400 hover:text-white" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
