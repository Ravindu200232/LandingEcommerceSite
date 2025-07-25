import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Feature() {
  const properties = [
    {
      id: 1,
      image: "/img/feature1.jpeg",
      price: "$4,600",
      title: "House on the Hollywood",
      address: "1374 Johnson Ave",
      beds: 4,
      baths: 2,
      sqft: "200 sqft",
      status: "FEATURED",
      forSale: true
    },
    {
      id: 2,
      image: "/img/feature2.jpg",
      price: "$5,600",
      title: "Comfortable Villa Green",
      address: "113 Brookside, Brooklyn",
      beds: 5,
      baths: 3,
      sqft: "400 sqft",
      status: "FEATURED",
      forSale: true
    },
    {
      id: 3,
      image: "/img/feature3.jpg",
      price: "$2,500",
      title: "Quality House For Sale",
      address: "679 Oxford ave",
      beds: 10,
      baths: 2,
      sqft: "500 sqft",
      status: "FEATURED",
      forSale: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Discover Our Featured Listings
            </h2>
            <p className="text-gray-600">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            See All Properties
            <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.status}
                  </span>
                </div>
                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded font-bold text-lg">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {property.address}
                </p>

                {/* Property Features */}
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">
                      <span className="font-semibold text-gray-900">{property.beds}</span> Beds
                    </span>
                    <span className="text-sm">
                      <span className="font-semibold text-gray-900">{property.baths}</span> Baths
                    </span>
                    <span className="text-sm">
                      <span className="font-semibold text-gray-900">{property.sqft}</span>
                    </span>
                  </div>
                </div>

                {/* For Sale Status */}
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-green-600 font-medium text-sm">
                    For Sale
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <button className="w-2 h-2 rounded-full bg-gray-800"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400"></button>
        </div>
      </div>
    </section>
  );
}