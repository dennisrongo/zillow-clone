import Image from 'next/image';
import Link from 'next/link';

// Define a type for the property data
export type Property = { // Export the type
  id: string;
  imageUrl: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  status: 'Active' | 'Pending' | 'Sold' | 'Coming Soon';
  lat: number;
  lng: number;
  tags?: string[];
  mlsId?: string;
  source?: string;
};

// Helper function to format currency
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Helper function to format numbers with commas
const formatNumber = (num: number) => {
  return num.toLocaleString('en-US');
};


const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="w-full max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white flex-shrink-0 snap-start">
       <Link href={`/property/${property.id}`} className="block">
        <div className="relative h-48"> {/* Fixed height for the image container */}
          <Image
            src={property.imageUrl || '/images/placeholder-house.jpg'} // Use placeholder if no image
            alt={`Image of ${property.address}`}
            layout="fill"
            objectFit="cover" // Cover ensures the image fills the container
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
          {/* Tags Overlay - Example: '3D Tour', 'Open Sat 1-4PM' */}
          {property.tags && property.tags.length > 0 && (
             <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                {property.tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`px-2 py-0.5 rounded text-xs font-semibold text-white ${
                            tag.toLowerCase().includes('open') ? 'bg-green-600' :
                            tag.toLowerCase().includes('price cut') ? 'bg-red-600' :
                            'bg-blue-600' // Default tag color
                        }`}
                    >
                        {tag}
                    </span>
                ))}
             </div>
          )}
        </div>
        <div className="p-4">
          <p className="font-bold text-2xl mb-1 text-gray-900">{formatPrice(property.price)}</p>
          <div className="flex items-center space-x-3 text-sm text-gray-900 mb-2">
            <span><span className="font-semibold">{property.beds}</span> bd</span>
            <span className="text-gray-400">|</span>
            <span><span className="font-semibold">{property.baths}</span> ba</span>
            <span className="text-gray-400">|</span>
            <span><span className="font-semibold">{formatNumber(property.sqft)}</span> sqft</span>
            <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded ${property.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{property.status}</span>
          </div>
          <p className="text-gray-900 text-sm truncate">{property.address}</p>
          <p className="text-gray-900 text-xs truncate">{`${property.city}, ${property.state} ${property.zip}`}</p>
           {/* Optional MLS ID/Source */}
           {property.mlsId && (
             <p className="text-gray-900 text-xs mt-2">MLS ID #{property.mlsId}</p>
           )}
        </div>
       </Link>
    </div>
  );
};

export default PropertyCard; 