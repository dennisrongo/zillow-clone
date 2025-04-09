'use client'; // Required for useState

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter(); // Initialize the router

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim() === '') return; // Prevent empty search

    console.log('Navigating to search results for:', searchTerm);
    // Navigate to the /homes page with the search term as a query parameter
    router.push(`/homes?search=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-xl mx-auto flex items-center bg-white rounded-full shadow-md overflow-hidden"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter an address, neighborhood, city, or ZIP code"
        className="flex-grow px-6 py-3 text-gray-700 placeholder-gray-500 focus:outline-none"
        aria-label="Search locations"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full m-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Search"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar; 