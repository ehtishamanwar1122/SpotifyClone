
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import SongRow from '../components/SongRow';
import { allSongs, searchCategories } from '../services/musicData';
import { UserCircle } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(allSongs);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query) {
      setSearchResults(allSongs);
      return;
    }
    
    const filtered = allSongs.filter(
      song => 
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.album.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filtered);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="bg-spotify-gray-900 sticky top-0 z-10 py-4 px-8 flex justify-between items-center">
        <div className="w-full max-w-xl">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex items-center ml-4">
          <button className="bg-black text-white rounded-full py-1 px-4 text-sm font-bold hover:scale-105 transition-transform mr-2">
            Upgrade
          </button>
          <button className="bg-black bg-opacity-70 rounded-full p-1 flex items-center">
            <UserCircle size={24} className="text-white" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="px-8 pt-4">
        {!searchQuery ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-6">Browse all</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {searchCategories.map((category) => (
                <CategoryCard 
                  key={category.id} 
                  name={category.name} 
                  color={category.color} 
                  imageUrl={category.imageUrl} 
                />
              ))}
            </div>
          </>
        ) : (
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              {searchResults.length > 0 
                ? 'Search Results' 
                : 'No results found for "' + searchQuery + '"'
              }
            </h2>
            {searchResults.length > 0 && (
              <div className="bg-spotify-gray-900 bg-opacity-30 rounded-md p-4">
                <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 border-b border-spotify-gray-700 text-spotify-gray-400 text-sm">
                  <div className="text-center">#</div>
                  <div>TITLE</div>
                  <div>ALBUM</div>
                  <div className="text-right">DURATION</div>
                </div>
                <div className="mt-2">
                  {searchResults.map((song, index) => (
                    <SongRow key={song.id} song={song} index={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
