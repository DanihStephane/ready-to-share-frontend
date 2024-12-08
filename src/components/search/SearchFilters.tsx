import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onDistanceChange: (distance: number) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  onSearch,
  onCategoryChange,
  onDistanceChange,
}) => {
  const categories = ['All', 'Tools', 'Kitchen', 'Books', 'Games', 'Electronics'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex gap-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search items..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="px-4 py-1.5 rounded-full bg-gray-100 text-sm hover:bg-gray-200 whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};