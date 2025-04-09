import Image from 'next/image';
import Link from 'next/link';
import type { Property } from './PropertyCard'; // Reuse the Property type

// Helper functions (can be moved to a utils file later)
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
    <Link href={`/property/${property.id}`} className="block border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow duration-200">
      <div className="relative h-40"> {/* Reduced image height */} 
        <Image
          src={property.imageUrl}
          alt={`Image of ${property.address}`}
          layout="fill"
          objectFit="cover"
        />
        {/* Status tag (optional, can be positioned differently) */}
        {/* <span className={`absolute top-2 left-2 text-xs font-medium px-2 py-0.5 rounded ${property.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{property.status}</span> */}
      </div>
      <div className="p-3"> {/* Reduced padding */} 
        <p className="font-bold text-xl mb-1">{formatPrice(property.price)}</p>
        <div className="flex items-center space-x-2 text-sm text-gray-700 mb-1"> {/* Reduced spacing */} 
          <span><span className="font-semibold">{property.beds}</span> bd</span>
          <span className="text-gray-300">|</span>
          <span><span className="font-semibold">{property.baths}</span> ba</span>
          <span className="text-gray-300">|</span>
          <span><span className="font-semibold">{formatNumber(property.sqft)}</span> sqft</span>
           {/* Simple status text instead of badge */}
           <span className="ml-auto text-xs font-medium text-gray-600">{property.status}</span>
        </div>
        <p className="text-gray-800 text-sm truncate">{property.address}</p>
        <p className="text-gray-600 text-xs truncate">{`${property.city}, ${property.state} ${property.zip}`}</p>
      </div>
    </Link>
  );
};

export default SearchResultCard; 