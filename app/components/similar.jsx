'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Heart, 
  Share2, 
  Eye, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  SortAsc,
  Grid3X3,
  List,
} from 'lucide-react';
import { similarPro } from '@/actions/property';
import Link from 'next/link';

export default function Similar({property}) {
  const [savedProperties, setSavedProperties] = useState(new Set());
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);

  console.log(property);

  const [properties, setProperties] = useState([]);

  React.useEffect(() => {
    async function fetchSimilar() {
      console.log("Fetching similar properties for:", property.city, property.province);
      if (property.city && property.province) {
        const result = await similarPro(property.city, property.province);
        setProperties(result.data || []);
      }
    }
    fetchSimilar();
  }, [property.city, property.province]);

  console.log("Similar Properties:", properties);


  
  const handleSave = (propertyId) => {
    const newSaved = new Set(savedProperties);
    if (newSaved.has(propertyId)) {
      newSaved.delete(propertyId);
    } else {
      newSaved.add(propertyId);
    }
    setSavedProperties(newSaved);
  };

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Property Size Badge */}
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-sm font-medium">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
            </svg>
            {property.size}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => handleSave(property.id)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              savedProperties.has(property.id)
                ? 'bg-red-500 text-white'
                : 'bg-white/90 text-gray-700 hover:bg-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${savedProperties.has(property.id) ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Property Type Badge */}
        <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            property.type === 'Commercial'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-green-100 text-green-800'
          }`}>
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {property.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {property.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{property.features.length - 2} more
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-green-600">
              Rs. {property.price}
            </span>
            <span className="text-sm text-gray-500">{property.pricePerPerch}</span>
          </div>
          <Link href={`/property/${property._id}`}>
          <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
            <Eye className="w-4 h-4" />
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );

  const ListItem = ({ property }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="flex">
        {/* Image */}
        <div className="relative w-48 h-32 flex-shrink-0">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {property.size}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                <MapPin className="w-3 h-3" />
                <span>{property.location}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                {property.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {property.description}
              </p>
            </div>
            
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => handleSave(property.id)}
                className={`p-2 rounded-full transition-colors ${
                  savedProperties.has(property.id)
                    ? 'bg-red-100 text-red-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`w-4 h-4 ${savedProperties.has(property.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-green-600">
                Rs. {property.price}
              </span>
              <span className="text-sm text-gray-500">{property.pricePerPerch}</span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Similar Properties</h1>
              <p className="text-gray-600">Find your perfect land investment opportunity</p>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filter</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border hover:bg-gray-50 transition-colors">
                <SortAsc className="w-4 h-4" />
                <span className="text-sm font-medium">Sort</span>
              </button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{properties.length}</span> similar properties
            </p>
            <div className="text-sm text-gray-500">
              Sorted by: <span className="font-medium text-gray-700">Relevance</span>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        <div className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {properties.map((property) => (
            viewMode === 'grid' 
              ? <PropertyCard key={property._id} property={property} />
              : <ListItem key={property._id} property={property} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm">
            Load More Properties
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Showing 6 of 24 similar properties
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">Rs. 1.6M</div>
              <div className="text-sm text-gray-600">Average Price/Perch</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">24</div>
              <div className="text-sm text-gray-600">Properties Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">15.2P</div>
              <div className="text-sm text-gray-600">Average Land Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Days on Market</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}