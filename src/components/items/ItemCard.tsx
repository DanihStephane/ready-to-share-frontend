import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Item } from '../../types';
import { Button } from '../ui/Button';

interface ItemCardProps {
  item: Item;
  onBorrow: (item: Item) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onBorrow }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <span className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            {item.owner.rating}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{item.distance ? `${item.distance}km away` : item.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={item.owner.avatar}
              alt={item.owner.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-700">{item.owner.name}</span>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => onBorrow(item)}
            disabled={!item.available}
          >
            {item.available ? 'Borrow' : 'Unavailable'}
          </Button>
        </div>
      </div>
    </div>
  );
};