import React, { useState } from 'react';
import { SearchFilters } from '../components/search/SearchFilters';
import { ItemCard } from '../components/items/ItemCard';
import { Item } from '../types';

const MOCK_ITEMS: Item[] = [
  {
    id: '1',
    title: 'Power Drill',
    description: 'Professional grade power drill, perfect for DIY projects',
    category: 'Tools',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c',
    owner: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      rating: 4.8
    },
    available: true,
    location: 'Brooklyn, NY',
    distance: 2.5
  },
  {
    id: '2',
    title: 'Stand Mixer',
    description: 'Professional kitchen stand mixer, great for baking',
    category: 'Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1594241660363-2c78a8b5e611',
    owner: {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 4.9
    },
    available: true,
    location: 'Manhattan, NY',
    distance: 1.8
  }
];

export const HomePage: React.FC = () => {
  const [items, setItems] = useState<Item[]>(MOCK_ITEMS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, this would trigger an API call
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // In a real app, this would trigger an API call
  };

  const handleBorrow = (item: Item) => {
    // In a real app, this would open a reservation modal
    console.log('Borrowing item:', item);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Borrow what you need from your community
      </h1>
      
      <SearchFilters
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onDistanceChange={(distance) => console.log('Distance:', distance)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onBorrow={handleBorrow}
          />
        ))}
      </div>
    </div>
  );
};