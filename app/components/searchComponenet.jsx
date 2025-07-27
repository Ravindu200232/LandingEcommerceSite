import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="w-fit max-w-2xl mx-auto">
      <div className="relative">
        {/* Search Input Container */}
        <div 
          className={`relative h-[40px] md:h-[50]   flex items-center bg-white rounded-xl border-2 transition-all duration-300 shadow-sm hover:shadow-md ${
            isFocused 
              ? 'border-blue-500 shadow-lg ring-4 ring-blue-100' 
              : 'border-gray-200'
          }`}
        >
          {/* Search Icon */}
          <div className="pl-4 pr-2">
            <Search className={`w-5 h-5 transition-colors duration-200 ${
              isFocused ? 'text-blue-500' : 'text-gray-400'
            }`} />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyPress={handleKeyPress}
            placeholder="Search properties, locations, or keywords..."
            className="flex-1 py-4 px-2 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-md"
          />

          {/* Clear Button */}
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Search Button */}
          <button
            onClick={handleSearch}
            disabled={!searchQuery.trim()}
            className={`md:m-2 py-1 px-2 text-sm md:px-6 md:py-3 rounded-md mr-1 md:mr-0 md:rounded-lg  font-semibold text-white transition-all duration-200 ${
              searchQuery.trim()
                ? 'bg-gradient-to-r from-primary to-primary hover:from-gray-800 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Search
          </button>
        </div>

        {/* Search Suggestions/Recent Searches (Optional) */}
        {isFocused && !searchQuery && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg z-10 p-4">
            <div className="text-sm text-gray-500 mb-3">Recent searches</div>
            <div className="space-y-2">
              {['Houses in Colombo', 'Apartments near beach', 'Commercial properties'].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(suggestion)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-150"
                >
                  <div className="flex items-center">
                    <Search className="w-4 h-4 text-gray-400 mr-3" />
                    {suggestion}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Search Stats/Results Count (Optional) */}
      {searchQuery && (
        <div className="mt-4 text-sm text-gray-500 animate-fade-in">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Searching for "{searchQuery}"...</span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SearchComponent;