'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet library
import type { Property } from './PropertyCard'; // Adjust path if needed
import Link from 'next/link'; // For linking from popup
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Fix for default icon issue with Webpack
delete (L.Icon.Default.prototype as L.Icon.DefaultIconOptions & { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface MapProps {
    properties: Property[];
    // Add center, zoom props if needed, or calculate dynamically
}

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

const Map: React.FC<MapProps> = ({ properties }) => {
    // Calculate center or use a default if no properties
    const center: [number, number] = properties.length > 0
        ? [properties[0].lat, properties[0].lng] // Center on first property
        : [38.79, -121.23]; // Default to Rocklin center

    const zoom = 13; // Default zoom level

    if (typeof window === 'undefined') {
        // Still rendering on the server
        return <div className="h-full w-full bg-gray-300 flex items-center justify-center"><p>Loading map...</p></div>;
    }

    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {properties.map((property) => (
                <Marker key={property.id} position={[property.lat, property.lng]}>
                    <Popup maxWidth={300}>
                        <div className="text-sm w-[260px]">
                            {/* Property Thumbnail */}
                            <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md">
                                <div className="relative w-full h-full">
                                    <img 
                                        src={property.imageUrl} 
                                        alt={`Image of ${property.address}`}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                
                                {/* Status tag */}
                                <div className="absolute bottom-2 left-2">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-md ${
                                        property.status === 'Active' ? 'bg-green-600 text-white' :
                                        property.status === 'Pending' ? 'bg-yellow-600 text-white' :
                                        property.status === 'Sold' ? 'bg-red-600 text-white' :
                                        'bg-blue-600 text-white'
                                    }`}>
                                        {property.status}
                                    </span>
                                </div>

                                {/* Tags Overlay */}
                                {property.tags && property.tags.length > 0 && (
                                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                                        {property.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className={`px-2 py-0.5 rounded text-xs font-semibold text-white ${
                                                    tag.toLowerCase().includes('open') ? 'bg-green-700' :
                                                    tag.toLowerCase().includes('price cut') ? 'bg-red-700' :
                                                    'bg-blue-700' // Default tag color
                                                }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            {/* Price and details */}
                            <p className="font-bold text-xl mb-2 text-gray-900">{formatPrice(property.price)}</p>
                            
                            <div className="flex items-center space-x-2 text-sm text-gray-900 mb-2">
                                <span><span className="font-semibold">{property.beds}</span> bd</span>
                                <span className="text-gray-400">|</span>
                                <span><span className="font-semibold">{property.baths}</span> ba</span>
                                <span className="text-gray-400">|</span>
                                <span><span className="font-semibold">{formatNumber(property.sqft)}</span> sqft</span>
                            </div>
                            
                            <p className="font-medium text-gray-900 mb-1">{property.address}</p>
                            <p className="text-gray-600 text-xs mb-2">{property.city}, {property.state} {property.zip}</p>
                            
                            {/* MLS ID if available */}
                            {property.mlsId && (
                                <p className="text-gray-500 text-xs mb-3">MLS# {property.mlsId}</p>
                            )}
                            
                            {/* View Details Button */}
                            <Link href={`/property/${property.id}`} className="block w-full mt-3">
                                <div className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 font-medium">
                                    View Details
                                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                </div>
                            </Link>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
