import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import Fuse from 'fuse.js';
import { useNavigate } from 'react-router-dom';
import { Component } from '../types';
import { components } from '../data/components';

const fuse = new Fuse(components, {
  keys: ['name', 'description', 'category', 'manufacturer', 'tags'],
  threshold: 0.3,
});

interface SearchBarProps {
  onClose?: () => void;
  isFullScreen?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, isFullScreen = false }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Component[]>([]);
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      const searchResults = fuse.search(query).map(result => result.item);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActive(false);
        if (onClose) onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleResultClick = (component: Component) => {
    navigate(`/component/${component.id}`);
    setQuery('');
    setResults([]);
    setIsActive(false);
    if (onClose) onClose();
  };

  const containerClasses = isFullScreen
    ? 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16'
    : 'relative';

  const searchBarClasses = isFullScreen
    ? 'w-full max-w-2xl mx-4'
    : 'w-full';

  return (
    <div className={containerClasses}>
      <div ref={searchRef} className={searchBarClasses}>
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsActive(true)}
              placeholder="Search components..."
              className="w-full px-10 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus={isFullScreen}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {isActive && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center border-b border-gray-100 last:border-0"
                >
                  <img
                    src={result.imageUrl}
                    alt={result.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">{result.name}</div>
                    <div className="text-sm text-gray-500">{result.category}</div>
                  </div>
                  <div className="ml-auto text-lg font-semibold text-blue-600">
                    ${result.price.toFixed(2)}
                  </div>
                </button>
              ))}
            </div>
          )}

          {isActive && query && results.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 text-center text-gray-500">
              No results found for "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;