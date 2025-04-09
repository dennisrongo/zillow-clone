'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet library
import type { Property } from './PropertyCard'; // Adjust path if needed
import Link from 'next/link'; // For linking from popup

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

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
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
                    <Popup>
                        <div className="text-sm">
                            <Link href={`/property/${property.id}`} className="font-semibold text-blue-600 hover:underline">
                                {property.address}
                            </Link>
                            <p>{formatPrice(property.price)}</p>
                            <p>{property.beds} bd | {property.baths} ba | {property.sqft} sqft</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map; 