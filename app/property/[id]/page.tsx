// app/property/[id]/page.tsx
// import Image from 'next/image'; // Removed unused import
import { notFound } from 'next/navigation';
import type { Property } from '../../components/PropertyCard'; // Adjust path

// --- Mock Data Fetching ---
// Using placeholder images (reverted URL format)
const allMockProperties: Property[] = [
    { id: '1', imageUrl: 'https://placehold.co/800x600/EBF5FF/7F9CF5?text=Property+Image+1', price: 1250000, beds: 5, baths: 4, sqft: 3896, address: '6510 Winter Rush Dr', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.791, lng: -121.235, tags: ['3D Tour'], mlsId: '223029487' },
    { id: '2', imageUrl: 'https://placehold.co/800x600/EBF5FF/7F9CF5?text=Property+Image+2', price: 610000, beds: 3, baths: 2, sqft: 1605, address: '2252 Quarry Way', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.800, lng: -121.240, tags: ['Perfect sized backyard'], mlsId: '223033627' },
    // Add other properties from previous mock data with placeholder URLs, ensuring unique IDs and lat/lng
    { id: '3', imageUrl: 'https://placehold.co/800x600/EBF5FF/7F9CF5?text=Property+Image+3', price: 839990, beds: 5, baths: 3, sqft: 2295, address: '5026 Southside Ranch Rd', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.785, lng: -121.230, tags: ['Wood fireplace'], mlsId: '223041694' },
    { id: '4', imageUrl: 'https://placehold.co/800x600/EBF5FF/7F9CF5?text=Property+Image+4', price: 725888, beds: 3, baths: 3, sqft: 2183, address: '947 Campfire Cir', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.805, lng: -121.245, tags: ['15 minutes ago'], mlsId: '223043638' },
    { id: '5', imageUrl: 'https://placehold.co/800x600/FEF3C7/D97706?text=Property+Image+5', price: 495000, beds: 2, baths: 1, sqft: 1202, address: '4075 Coldwater Dr', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.798, lng: -121.233, tags: ['Open: Sat 1-4PM (4/12)'], mlsId: '223042393' },
    { id: '6', imageUrl: 'https://placehold.co/800x600/FEF3C7/D97706?text=Property+Image+6', price: 665000, beds: 2, baths: 2, sqft: 1781, address: '2605 Tahoe Star Cir', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.802, lng: -121.238, tags: ['Tree lined streets'], mlsId: '223040962' },
    { id: '7', imageUrl: 'https://placehold.co/800x600/FEF3C7/D97706?text=Property+Image+7', price: 695000, beds: 3, baths: 2, sqft: 1855, address: '6212 Night Ridge Way', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.786, lng: -121.231, tags: ['Producing pomegranate trees'], mlsId: '223041603' },
    { id: '8', imageUrl: 'https://placehold.co/800x600/FEF3C7/D97706?text=Property+Image+8', price: 565000, beds: 2, baths: 2, sqft: 1611, address: '2433 Pinnacles Dr', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.806, lng: -121.246, tags: ['Price cut: $15,000 (4/8)'], mlsId: '223038194' },
    { id: '11', imageUrl: 'https://placehold.co/800x600/EBF5FF/7F9CF5?text=Property+Image+11', price: 950000, beds: 4, baths: 3, sqft: 2800, address: '123 Mockingbird Ln', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.795, lng: -121.225, tags: [], mlsId: 'MOCK123' },
    { id: '12', imageUrl: 'https://placehold.co/800x600/EBF5FF/7F9CF5?text=Property+Image+12', price: 710000, beds: 3, baths: 2, sqft: 1950, address: '456 Placeholder Ave', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.788, lng: -121.242, tags: [], mlsId: 'MOCK456' },
    { id: '13', imageUrl: 'https://placehold.co/800x600/FEF3C7/D97706?text=Property+Image+13', price: 880000, beds: 4, baths: 3, sqft: 2500, address: '789 Example St', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Coming Soon', lat: 38.796, lng: -121.226, tags: ['Coming Soon'], mlsId: 'MOCK789' },
    { id: '14', imageUrl: 'https://placehold.co/800x600/FEF3C7/D97706?text=Property+Image+14', price: 520000, beds: 3, baths: 1, sqft: 1300, address: '101 Test Rd', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Coming Soon', lat: 38.789, lng: -121.243, tags: ['Coming Soon'], mlsId: 'MOCK101' },
    { id: '101', imageUrl: 'https://placehold.co/800x600/D1FAE5/065F46?text=Property+Image+101', price: 750000, beds: 4, baths: 3, sqft: 2400, address: '123 Main St', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.7910, lng: -121.2350 },
    { id: '102', imageUrl: 'https://placehold.co/800x600/D1FAE5/065F46?text=Property+Image+102', price: 620000, beds: 3, baths: 2, sqft: 1850, address: '456 Oak Ave', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.8005, lng: -121.2400 },
    { id: '103', imageUrl: 'https://placehold.co/800x600/D1FAE5/065F46?text=Property+Image+103', price: 890000, beds: 5, baths: 4, sqft: 3100, address: '789 Pine Ln', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.7855, lng: -121.2295 },
];

async function getPropertyData(id: string): Promise<Property | null> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100));
    const property = allMockProperties.find(p => p.id === id);
    return property || null;
}
// --- End Mock Data Fetching ---

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

// Define the props for the page component
interface PropertyPageProps {
    params: { id: string };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
    const { id } = params; // Destructure id from params first
    const property = await getPropertyData(id); // Now pass the destructured id

    if (!property) {
        notFound(); // Trigger 404 page if property not found
    }

    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white min-h-screen">
            {/* Image Gallery Placeholder */}
            <div className="mb-6 bg-gray-200 h-96 rounded-lg flex items-center justify-center overflow-hidden">
                {/* Display the actual placeholder image */}
                <img src={property.imageUrl} alt={`Image for ${property.address}`} className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="md:col-span-2 space-y-6">
                    {/* Price, Beds, Baths, Sqft */}
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                        <span className="text-4xl font-bold text-gray-900">{formatPrice(property.price)}</span>
                        <span className="text-xl font-semibold text-gray-900"><span className="font-bold">{property.beds}</span> bd</span>
                        <span className="text-xl text-gray-400">|</span>
                        <span className="text-xl font-semibold text-gray-900"><span className="font-bold">{property.baths}</span> ba</span>
                        <span className="text-xl text-gray-400">|</span>
                        <span className="text-xl font-semibold text-gray-900"><span className="font-bold">{formatNumber(property.sqft)}</span> sqft</span>
                    </div>

                    {/* Address */}
                    <p className="text-lg text-gray-900">{property.address}, {property.city}, {property.state} {property.zip}</p>

                    {/* Status/Tags */}
                    <div className="flex flex-wrap gap-2">
                         <span className={`text-sm font-medium px-2.5 py-0.5 rounded ${property.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {property.status}
                        </span>
                        {property.tags?.map((tag, index) => (
                             <span key={index} className="text-sm font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Description Placeholder */}
                    <div className="pt-4 border-t">
                        <h2 className="text-2xl font-semibold mb-3 text-gray-900">What&apos;s special</h2>
                        <p className="text-gray-800 leading-relaxed">
                            {/* Add actual description field to Property type and mock data later */} 
                            Placeholder description for {property.address}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                     {/* Facts and Features Placeholder */}
                     <div className="pt-4 border-t">
                        <h2 className="text-2xl font-semibold mb-3 text-gray-900">Facts and features</h2>
                        {/* Add detailed facts section here later */} 
                        <p className="text-gray-800">Details about interior, exterior, construction, etc., would go here.</p>
                    </div>
                </div>

                {/* Sidebar Area */}
                <div className="md:col-span-1 space-y-4">
                    {/* Action Buttons */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow space-y-3">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Request a tour
                        </button>
                        <button className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
                            Contact agent
                        </button>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center">
                         <span className="text-gray-700">Mini-Map Placeholder</span>
                    </div>

                    {/* Mortgage Calculator Placeholder */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
                        <h3 className="font-semibold mb-2 text-gray-900">Est. payment: $X,XXX/mo</h3>
                        {/* Add Mortgage Calc component here later */} 
                        <p className="text-xs text-gray-700">Get pre-qualified</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 