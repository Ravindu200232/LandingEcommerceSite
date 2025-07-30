"use client";

import React, { useState } from "react";
import {
  Heart,
  Share2,
  Eye,
  Bed,
  Bath,
  Square,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function Properties({ properties }) {
  const [activeTab, setActiveTab] = useState("For Sale");

  // const properties = [
  //   {
  //     id: 1,
  //     price: '$5,000',
  //     title: 'Luxury Family Home',
  //     address: '530 Shaver Ave',
  //     beds: 5,
  //     baths: 2,
  //     sqft: '400 sqft',
  //     status: 'For Sale',
  //     image: '/img/feature1.jpeg'
  //   },
  //   {
  //     id: 2,
  //     price: '$4,800',
  //     title: 'Gorgeous Villa Bay',
  //     address: '818 Gertrude St. Brooklyn',
  //     beds: 8,
  //     baths: 2,
  //     sqft: '700 sqft',
  //     status: 'For Sale',
  //     image: '/img/feature2.jpg'
  //   },
  //   {
  //     id: 3,
  //     price: '$2,950',
  //     title: 'Skyper Pool Apartment',
  //     address: '84 Thompson St',
  //     beds: 4,
  //     baths: 1,
  //     sqft: '600 sqft',
  //     status: 'For Sale',
  //     image: '/img/feature1.jpeg'
  //   },
  //   {
  //     id: 4,
  //     price: '$3,500',
  //     title: 'Diamond Manor Apartment',
  //     address: '162 Franklin Ave',
  //     beds: 3,
  //     baths: 1,
  //     sqft: '500 sqft',
  //     status: 'For Sale',
  //     image: '/img/feature3.jpg'
  //   }
  // ];

  const tabs = ["For Sale", "For Rent"];

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Discover Popular Properties
            </h2>
            <p className="text-gray-400">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {properties
            .filter((property) => property.popular == true)
            .map((property) => (
              <div
                key={property.id}
                className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors duration-300 group"
              >
                {/* Property Image */}
                <div className="relative">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-lg font-bold text-lg">
                      per Rs. {property.perPrice}
                    </span>
                  </div>
                  {/* Action Icons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Share2 className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {property.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {property.location}
                  </p>

                  {/* Property Features */}
                  <div className="flex flex-col space-y-2 text-gray-300 mb-4">
                    

                    <div className="flex items-center space-x-1">
                      
                      <span className="text-sm">
                        {property.description
                          ?.split(" ")
                          .slice(0, 15)
                          .join(" ")}
                        ...
                        <Link
                          href={`/property/${property._id}`}
                          className="text-blue-600 hover:underline ml-1"
                        >
                          See more
                        </Link>
                      </span>
                    </div>

                    <div className="flex items-center space-x-1">
                      
                      <p className="text-sm font-semibold bg-black w-[60px] rounded-lg flex items-center justify-center h-[30px]">{" " + property.type}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="pt-4 border-t border-gray-700">
                    <span className="text-green-400 font-medium text-sm">
                      {property.statues}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* See All Properties Button */}
        <div className="text-center">
          <button className="group bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center mx-auto">
            See All Properties
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
