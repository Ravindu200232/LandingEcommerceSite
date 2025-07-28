import React from "react";
import { Heart, MapPin, Home, Bath, Square } from "lucide-react";
import Link from "next/link";


// Sample property data for demonstration
const sampleProperty = {
  images: [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  ],
  title: "Modern Family Home",
  address: "123 Oak Street, Downtown",
  price: "$485,000",
  status: "Featured",
  beds: 4,
  baths: 3,
  sqft: "2,450 sq ft",
};

export default function PropertyCard({ property = sampleProperty }) {
  return (
    <div className="bg-white md:w-[400px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Property Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
            {property.status}
          </span>
        </div>

        {/* Favorite Button */}
        <div className="absolute top-4 right-4">
          <button className="bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
            Rs.
            {property.per_price >= 1000000
              ? (property.per_price / 1000000).toFixed(1).replace(/\.0$/, "") +
                "M"
              : property.per_price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
            <p className="text-sm">{property.location}</p>
          </div>
        </div>

        {/* Property Features */}
        <div className="flex items-center justify-between text-gray-600 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-semibold">
                <span className="font-semibold text-gray-900">
                  {property.description.split(" ").slice(0, 40).join(" ")}
                  {property.description.split(" ").length > 40 ? "..." : ""}
                </span>{" "}
                see more
              </span>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="flex items-center justify-between">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            For Sale
          </span>
          <Link href={`property/${property.id}`}>
          <button className="bg-primary hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:shadow-md">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
