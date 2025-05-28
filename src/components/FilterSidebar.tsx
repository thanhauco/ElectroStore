import React from 'react';
import { Sliders, X } from 'lucide-react';
import Button from './ui/Button';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedManufacturers: string[];
  setSelectedManufacturers: (manufacturers: string[]) => void;
  inStockOnly: boolean;
  setInStockOnly: (inStock: boolean) => void;
  categories: string[];
  manufacturers: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedManufacturers,
  setSelectedManufacturers,
  inStockOnly,
  setInStockOnly,
  categories,
  manufacturers,
}) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories, category]
    );
  };

  const handleManufacturerChange = (manufacturer: string) => {
    setSelectedManufacturers(
      selectedManufacturers.includes(manufacturer)
        ? selectedManufacturers.filter(m => m !== manufacturer)
        : [...selectedManufacturers, manufacturer]
    );
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <Sliders className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Price Range</h3>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-24 px-2 py-1 border border-gray-300 rounded"
                min={0}
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-24 px-2 py-1 border border-gray-300 rounded"
                min={priceRange[0]}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Manufacturers */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Manufacturers</h3>
            <div className="space-y-2">
              {manufacturers.map((manufacturer) => (
                <label key={manufacturer} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedManufacturers.includes(manufacturer)}
                    onChange={() => handleManufacturerChange(manufacturer)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">{manufacturer}</span>
                </label>
              ))}
            </div>
          </div>

          {/* In Stock Only */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">In Stock Only</span>
            </label>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <Button
            variant="primary"
            fullWidth
            onClick={onClose}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;