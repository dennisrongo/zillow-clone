import PropertyCard from './components/PropertyCard';
import Carousel from './components/Carousel';
import SearchBar from './components/SearchBar';
import type { Property } from './components/PropertyCard'; // Import the type


// Mock Data using placeholder images (reverted URL format)
const trendingHomes: Property[] = [
  { id: '1', imageUrl: 'https://placehold.co/600x400/EBF5FF/7F9CF5?text=Trending+Home+1', price: 1250000, beds: 5, baths: 4, sqft: 3896, address: '6510 Winter Rush Dr', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.791, lng: -121.235, tags: ['3D Tour'], mlsId: '223029487' },
  { id: '2', imageUrl: 'https://placehold.co/600x400/EBF5FF/7F9CF5?text=Trending+Home+2', price: 610000, beds: 3, baths: 2, sqft: 1605, address: '2252 Quarry Way', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.800, lng: -121.240, tags: ['Perfect sized backyard'], mlsId: '223033627' },
  { id: '3', imageUrl: 'https://placehold.co/600x400/EBF5FF/7F9CF5?text=Trending+Home+3', price: 839990, beds: 5, baths: 3, sqft: 2295, address: '5026 Southside Ranch Rd', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.785, lng: -121.230, tags: ['Wood fireplace'], mlsId: '223041694' },
  { id: '4', imageUrl: 'https://placehold.co/600x400/EBF5FF/7F9CF5?text=Trending+Home+4', price: 725888, beds: 3, baths: 3, sqft: 2183, address: '947 Campfire Cir', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.805, lng: -121.245, tags: ['15 minutes ago'], mlsId: '223043638' },
  { id: '11', imageUrl: 'https://placehold.co/600x400/EBF5FF/7F9CF5?text=Trending+Home+5', price: 950000, beds: 4, baths: 3, sqft: 2800, address: '123 Mockingbird Ln', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Active', lat: 38.795, lng: -121.225, tags: [], mlsId: 'MOCK123' },
  { id: '12', imageUrl: 'https://placehold.co/600x400/EBF5FF/7F9CF5?text=Trending+Home+6', price: 710000, beds: 3, baths: 2, sqft: 1950, address: '456 Placeholder Ave', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.788, lng: -121.242, tags: [], mlsId: 'MOCK456' },
];

const sellingSoonHomes: Property[] = [
   { id: '5', imageUrl: 'https://placehold.co/600x400/FEF3C7/D97706?text=Selling+Soon+1', price: 495000, beds: 2, baths: 1, sqft: 1202, address: '4075 Coldwater Dr', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.798, lng: -121.233, tags: ['Open: Sat 1-4PM (4/12)'], mlsId: '223042393' },
   { id: '6', imageUrl: 'https://placehold.co/600x400/FEF3C7/D97706?text=Selling+Soon+2', price: 665000, beds: 2, baths: 2, sqft: 1781, address: '2605 Tahoe Star Cir', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.802, lng: -121.238, tags: ['Tree lined streets'], mlsId: '223040962' },
   { id: '7', imageUrl: 'https://placehold.co/600x400/FEF3C7/D97706?text=Selling+Soon+3', price: 695000, beds: 3, baths: 2, sqft: 1855, address: '6212 Night Ridge Way', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.786, lng: -121.231, tags: ['Producing pomegranate trees'], mlsId: '223041603' },
   { id: '8', imageUrl: 'https://placehold.co/600x400/FEF3C7/D97706?text=Selling+Soon+4', price: 565000, beds: 2, baths: 2, sqft: 1611, address: '2433 Pinnacles Dr', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Active', lat: 38.806, lng: -121.246, tags: ['Price cut: $15,000 (4/8)'], mlsId: '223038194' },
   { id: '13', imageUrl: 'https://placehold.co/600x400/FEF3C7/D97706?text=Selling+Soon+5', price: 880000, beds: 4, baths: 3, sqft: 2500, address: '789 Example St', city: 'Rocklin', state: 'CA', zip: '95677', status: 'Coming Soon', lat: 38.796, lng: -121.226, tags: ['Coming Soon'], mlsId: 'MOCK789' },
   { id: '14', imageUrl: 'https://placehold.co/600x400/FEF3C7/D97706?text=Selling+Soon+6', price: 520000, beds: 3, baths: 1, sqft: 1300, address: '101 Test Rd', city: 'Rocklin', state: 'CA', zip: '95765', status: 'Coming Soon', lat: 38.789, lng: -121.243, tags: ['Coming Soon'], mlsId: 'MOCK101' },
];


export default function Home() {
  // Placeholder URL for hero background image
  const heroImageUrl = 'https://placehold.co/1920x600/cccccc/31343C?text=Hero+Background';

  // Data for the info cards section
  const infoCards = [
    {
      title: "Buy a home",
      description: "A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.",
      buttonText: "Find a local agent",
      buttonUrl: "/agent-finder", // Example URL
      imageUrl: "https://placehold.co/200x150/E0F2FE/0891B2?text=Buy+Illustration"
    },
    {
      title: "Finance a home",
      description: "Zillow Home Loans can get you pre-approved so you're ready to make an offer quickly when you find the right home.",
      buttonText: "Start now",
      buttonUrl: "/home-loans", // Example URL
      imageUrl: "https://placehold.co/200x150/D1FAE5/065F46?text=Finance+Illustration",
      subtext: "NMLS #10287"
    },
    {
      title: "Rent a home",
      description: "We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
      buttonText: "Find rentals",
      buttonUrl: "/rent", // Example URL
      imageUrl: "https://placehold.co/200x150/FEF3C7/D97706?text=Rent+Illustration"
    }
  ];

  return (
    <div className="mx-auto bg-white">

      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center pt-24 pb-32 px-4 sm:px-6 lg:px-8 mb-12" // Adjust padding as needed
        style={{ backgroundImage: `url('${heroImageUrl}')` }}
      >
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content centered over image */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Agents. Tours. Loans. Homes.
          </h1>
          <SearchBar />
        </div>
      </div>


      {/* Rest of the content within standard max-width container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

         {/* Trending Homes Section - Updated Title */}
        <section className="mb-12">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Trending Homes in Rocklin, CA</h2>
              <p className="text-sm text-gray-600">Viewed and saved the most in the area over the past 24 hours</p>
            </div>
            <Carousel title=""> {/* Pass empty title to Carousel as title is handled above */}
                {trendingHomes.map((property) => (
                <PropertyCard key={property.id} property={property} />
                ))}
            </Carousel>
        </section>

        {/* Selling Soon Homes Section - Using original structure for variation */}
        <Carousel title="Selling Soon Homes in Rocklin, CA">
          {sellingSoonHomes.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </Carousel>

         {/* --- BuyAbility Placeholder Section --- */}
         <section className="mt-16 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Find homes you can afford with BuyAbility℠</h2>
            <p className="text-sm text-gray-600 mb-6">Answer a few questions. We&apos;ll highlight homes you&apos;re likely to qualify for.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Left Card */}
                <div className="md:col-span-1 bg-white p-6 rounded-lg border border-gray-200 shadow space-y-4">
                    <div className="flex items-center gap-2 border-b pb-3 mb-3">
                        {/* Placeholder Zillow Home Loans Logo */}
                        <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            {/* Simple placeholder shape */} 
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /> 
                        </svg>
                        <span className="font-semibold text-gray-800">Zillow Home Loans℠</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="text-left">
                            <p className="text-gray-500 text-xs mb-1">Suggested target price</p>
                            <p className="text-2xl font-semibold text-gray-900">$--</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-xs mb-1">BuyAbility℠</p>
                            <p className="text-2xl font-semibold text-gray-900">$--</p>
                        </div>
                    </div>
                     <div className="flex justify-between items-baseline pt-2 border-t mt-2">
                        <div className="text-left">
                            <p className="text-gray-500 text-xs mb-1">Mo. payment</p>
                            <p className="text-xl font-semibold text-gray-900">$--</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-xs mb-1">Today&apos;s rate</p>
                             <p className="text-xl font-semibold text-gray-900">--% <span className="text-sm font-normal">APR</span></p>
                        </div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Let&apos;s get started
                    </button>
                </div>

                 {/* Right Property Previews (Placeholders) */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow relative">
                            <div className="bg-gray-200 h-32 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Property Preview {i}</span>
                            </div>
                            <div className="p-3 space-y-1">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                <div className="h-3 bg-gray-200 rounded w-full"></div>
                            </div>
                             <div className="absolute top-2 left-2 bg-white px-2 py-0.5 rounded text-xs font-semibold text-blue-800 border border-blue-300 shadow">
                                Within BuyAbility
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* --- End BuyAbility Placeholder --- */}

        {/* --- Info Cards Section --- */}
        <section className="mt-16 mb-12">
            {/* Optional Link above cards */}
            <div className="text-center mb-8">
                <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
                    ↓ More recommended homes
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {infoCards.map((card) => (
                    <div key={card.title} className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center">
                        <img src={card.imageUrl} alt={`${card.title} illustration`} className="h-32 mb-6 object-contain" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-600 mb-6 grow">{card.description}</p>
                        <a
                           href={card.buttonUrl}
                           className="mt-auto inline-block px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition"
                        >
                            {card.buttonText}
                        </a>
                        {card.subtext && (
                             <p className="text-xs text-gray-500 mt-4">{card.subtext}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
        {/* --- End Info Cards Section --- */}

        {/* Placeholder for "About Zillow's Recommendations" */}
        <section className="bg-gray-50 p-6 rounded-lg text-center text-sm text-gray-700 mt-12">
          <h3 className="font-semibold mb-2">About Zillow&apos;s Recommendations</h3>
          <p>Recommendations are based on your location and search activity, such as the homes you&apos;ve viewed and saved and the filters you&apos;ve used. We use this information to bring similar homes to your attention, so you don&apos;t miss out.</p>
        </section>
      </div> {/* End of max-width container */}

    </div> // End of main page div
  );
}
