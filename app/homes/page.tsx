'use client';

import { useSearchParams } from 'next/navigation';
import SearchResultCard from '../components/SearchResultCard'; // Import the new card
import type { Property } from '../components/PropertyCard'; // Type still comes from original definition
import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-300 flex items-center justify-center"><p>Loading map...</p></div> // Optional loading state
});

// Mock Data using placeholder images (reverted URL format)
const mockResults: Property[] = [
  { id: '101', imageUrl: 'https://placehold.co/600x400/D1FAE5/065F46?text=Search+Result+1', price: 750000, beds: 4, baths: 3, sqft: 2400, address: '123 Main St', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.7910, lng: -121.2350 },
  { id: '102', imageUrl: 'https://placehold.co/600x400/D1FAE5/065F46?text=Search+Result+2', price: 620000, beds: 3, baths: 2, sqft: 1850, address: '456 Oak Ave', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.8005, lng: -121.2400 },
  { id: '103', imageUrl: 'https://placehold.co/600x400/D1FAE5/065F46?text=Search+Result+3', price: 890000, beds: 5, baths: 4, sqft: 3100, address: '789 Pine Ln', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.7855, lng: -121.2295 },
  // Add more mock properties with slightly varied coordinates if desired
];

export default function HomesSearchPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search');

  // TODO: Implement actual data fetching based on searchTerm
  const properties = mockResults;

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] bg-white"> {/* Add bg-white */} 

      {/* Property List Section (Scrollable) */} 
      <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 p-4 overflow-y-auto border-r border-gray-200">
        <h1 className="text-xl font-semibold mb-4">
          {searchTerm ? `${searchTerm} Homes for Sale` : 'Real Estate & Homes For Sale'}
        </h1>
        <p className="text-sm text-gray-600 mb-4">{properties.length} results</p>
        
        {/* TODO: Add Filter Buttons/Dropdowns here */}
        <div className="mb-4">
            {/* Placeholder for filters */} 
            <button className="px-3 py-1 border rounded text-sm mr-2 hover:bg-gray-100">Price</button>
            <button className="px-3 py-1 border rounded text-sm mr-2 hover:bg-gray-100">Beds & Baths</button>
            <button className="px-3 py-1 border rounded text-sm mr-2 hover:bg-gray-100">Home Type</button>
            <button className="px-3 py-1 border rounded text-sm mr-2 hover:bg-gray-100">More</button>
        </div>

        <div className="space-y-4">
          {properties.length > 0 ? (
            properties.map(property => (
              <SearchResultCard key={property.id} property={property} />
            ))
          ) : (
            <p>No properties found matching your search.</p>
          )}
        </div>
      </div>

      {/* Map Section (Fixed) */} 
      <div className="hidden md:block md:w-1/2 lg:w-3/5 xl:w-2/3">
        {/* Render the dynamically imported Map component */}
        <Map properties={properties} />
      </div>
    </div>
  );
} 