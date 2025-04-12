import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Property } from './PropertyCard';
import { HeartIcon } from '@heroicons/react/24/outline';

// Helper functions
const formatPrice = (price: number) => { 
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
};

const formatNumber = (num: number) => { 
    return num.toLocaleString('en-US');
};

interface SearchResultCardProps {
  property: Property;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ property }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
      {/* Image with overlay */}
      <div className="relative">
        <Image
          src={property.imageUrl}
          alt={`${property.address}`}
          width={300}
          height={200}
          className="w-full h-auto"
        />
        
        {/* Favorite button */}
        <button className="absolute top-1 right-1 bg-gray-900/20 rounded-full p-1 text-white hover:bg-gray-900/40">
          <HeartIcon className="h-3 w-3" />
        </button>
        
        {/* Tag (if available) */}
        {property.tags && property.tags.length > 0 && (
          <div className="absolute bottom-1 left-1">
            <span className={`px-1 py-0.5 rounded text-[8px] font-semibold text-white ${
              property.tags[0].toLowerCase().includes('open') ? 'bg-green-600' :
              property.tags[0].toLowerCase().includes('price cut') ? 'bg-red-600' :
              'bg-blue-600'
            }`}>
              {property.tags[0]}
            </span>
          </div>
        )}
      </div>
      
      {/* Details */}
      <div className="p-2">
        <Link href={`/property/${property.id}`} className="block">
          <p className="font-semibold text-sm text-gray-900">{formatPrice(property.price)}</p>
          
          <div className="flex items-center text-[10px] text-gray-700 space-x-1">
            <span><b>{property.beds}</b> bd</span>
            <span>•</span>
            <span><b>{property.baths}</b> ba</span>
            <span>•</span>
            <span><b>{formatNumber(property.sqft)}</b> sqft</span>
          </div>
          
          <p className="text-[10px] text-gray-600 truncate mt-1">
            {property.address}
          </p>
          
          <p className="text-[8px] text-gray-400 uppercase mt-0.5">
            {property.source}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SearchResultCard;
