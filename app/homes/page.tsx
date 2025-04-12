'use client';

import { useSearchParams } from 'next/navigation';
import SearchResultCard from '../components/SearchResultCard';
import type { Property } from '../components/PropertyCard';
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-200 flex items-center justify-center"><p>Loading map...</p></div> // Slightly darker loading bg
});

// Mock Data (existing)
const mockResults: Property[] = [
  { id: '101', imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600', price: 700000, beds: 4, baths: 3, sqft: 2068, address: '45503 Tournament Ln', city: 'Temecula', state: 'CA', zip: '92592', status: 'Active', lat: 33.5136, lng: -117.1478, tags: ['3D Tour', 'Pool'], source: 'HOMESMART, EVERGREEN REALTY' },
  { id: '102', imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600', price: 849900, beds: 4, baths: 3, sqft: 2018, address: '41967 Shorewood Ct', city: 'Temecula', state: 'CA', zip: '92591', status: 'Active', lat: 33.5589, lng: -117.1882, tags: ['Sparkling inground pool'], source: 'HOME QUEST REALTY' },
  { id: '104', imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600', price: 689900, beds: 3, baths: 3, sqft: 1629, address: '31676 Loma Linda Rd', city: 'Temecula', state: 'CA', zip: '92592', status: 'Active', lat: 33.4944, lng: -117.1183, tags: ['Open Sat 1-4pm (4/12)'], source: 'LPT REALTY, INC' },
  { id: '105', imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600', price: 1300000, beds: 4, baths: 3, sqft: 2500, address: '37895 Avenida Bravura', city: 'Temecula', state: 'CA', zip: '92592', status: 'Active', lat: 33.5211, lng: -117.0931, tags: ['Pool and spa'], source: 'AUBURNLANE REAL ESTATE' },
  { id: '106', imageUrl: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600', price: 1150000, beds: 4, baths: 4, sqft: 3143, address: '44375 Reidel St', city: 'Temecula', state: 'CA', zip: '92592', status: 'Active', lat: 33.5435, lng: -117.1318, tags: ['23 hours ago'], source: 'LPT REALTY, INC' },
];


export default function HomesSearchPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search') || 'Temecula, CA'; // Default search term

  const properties = mockResults;

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-var(--header-height,64px))]">
      {/* Property List Section - Reduced to 1/6 of screen width */}
      <div className="w-full lg:w-1/6 xl:w-1/6 p-3 overflow-y-auto bg-white border-r border-gray-200">
        {/* More compact header */}
        <h1 className="text-sm font-semibold mb-1 px-1">
          {`${searchTerm}`}
        </h1>
        <p className="text-[10px] text-gray-600 mb-2 px-1">{properties.length} results</p>

        {/* Filters - more compact for narrow sidebar */}
        <div className="mb-2 px-1 flex flex-wrap gap-1">
            <button className="px-2 py-0.5 border rounded text-[9px] font-medium text-gray-700 hover:border-gray-500">For Sale</button>
            <button className="px-2 py-0.5 border rounded text-[9px] font-medium text-gray-700 hover:border-gray-500">Price</button>
            <button className="px-2 py-0.5 border rounded text-[9px] font-medium text-gray-700 hover:border-gray-500">Beds</button>
        </div>

        {/* Results List - Using a simple list layout */}
        <div className="space-y-3 px-1">
          {properties.length > 0 ? (
            properties.map(property => (
              <SearchResultCard key={property.id} property={property} />
            ))
          ) : (
            <p className="px-1">No properties found matching your search.</p>
          )}
        </div>
      </div>

      {/* Map Section */}
      <div className="hidden lg:block lg:flex-1">
        <Map properties={properties} />
      </div>
    </div>
  );
}
