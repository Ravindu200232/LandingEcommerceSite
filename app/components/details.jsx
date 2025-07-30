'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Star, 
  Share2, 
  Heart,
  Zap,
  Building2,
  FileCheck,
  Droplets,
  Eye,
  Calculator
} from 'lucide-react';

export default function Details({property}) {

  console.log("proper",property)
  const [isSaved, setIsSaved] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const [features,setfeatures] = useState(property.features)
  console.log("feature")

 



  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-green-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg font-medium">{property.location}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-bold text-green-600">
                  LKR {property.perPrice}
                </span>
                <span className="text-gray-600 text-lg">Per Perch</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  LKR
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button 
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                    isSaved 
                      ? 'bg-red-50 border-red-300 text-red-600' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Property Type</div>
                  <div className="font-semibold text-gray-900">{property.type}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Area of land</div>
                  <div className="font-semibold text-gray-900">{property.size} Perches</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Availability</div>
                  <div className="font-semibold text-green-600">Available</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Offered for</div>
                  <div className="font-semibold text-gray-900">{property.offeredFor}</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Shape of land</div>
                  <div className="font-semibold text-gray-900">{property.landShape}</div>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{property.title}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                

                {showMore && (
                  <div className="pt-4 space-y-3 text-gray-700">
                    <p>{property.description}</p>
                  </div>
                )}

                <button 
                  onClick={() => setShowMore(!showMore)}
                  className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
                >
                  {showMore ? 'Show Less' : 'Show More'}
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Property Features */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-800">✔ {feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Calculator */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Price Breakdown</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Total Land Area</div>
                  <div className="text-2xl font-bold text-gray-900">{property.size} Perches</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Price per Perch</div>
                  <div className="text-2xl font-bold text-green-600">Rs. {property.perPrice}</div>
                </div>
                <div className="bg-white rounded-lg p-4 md:col-span-2">
                  <div className="text-sm text-gray-600 mb-1">Total Price</div>
                  <div className="text-3xl font-bold text-green-600">Rs. {property.totalPrice}</div>
                  <div className="text-sm text-gray-500 mt-1">Rs. {property.size} × Rs. {property.perPrice}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Advertiser */}
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Advertiser</h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600">
                    {property.owner.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{property.owner}</div>
                  <div className="text-sm text-gray-600">{property.owner_type}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-600 mb-1">Check Availability</div>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    {property.contact}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-xs text-gray-500 text-center">
                  Always verify property details and documentation before making any transactions
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property ID</span>
                  <span className="font-medium">#HOM30P001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Listed</span>
                  <span className="font-medium">2 days ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Views</span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inquiries</span>
                  <span className="font-medium">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}