"use client";
import React from "react";
import { Edit, Trash2, MapPin, Home, Phone, Mail, User } from "lucide-react";
import { redirect } from "next/navigation";

export default function MyPro({ property }) {
  if (!Array.isArray(property) || property.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 text-center">
        <Home className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No Properties Available
        </h3>
        <p className="text-gray-500">Check back later for new listings</p>
      </div>
    );
  }

  const handleUpdate = (index) => {
    console.log(`Update property at index ${index}`);
    redirect(`/myproperty/update/${index}`);
    // Add your update logic here
  };

  const handleDelete = (index) => {
    console.log(`Delete property at index ${index}`);
    redirect(`/myproperty/delete/${index}`);
    // Add your delete logic here
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {property.map((prop, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
          >
            {/* Image Container with Actions Overlay */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={prop.images?.[0]}
                alt={`Property ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Price Badge */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-blue-700 font-bold text-lg">
                    Rs. {prop.totalPrice?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title and Type */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors duration-200">
                  {prop.title}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium capitalize">
                    {prop.type}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{prop.size} perches</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600 capitalize">
                    {prop.offeredFor}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
                {prop.description}
              </p>

              {/* Location */}
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-gray-800">{prop.city}</p>
                    <p className="text-gray-600">
                      {prop.location}, {prop.district}
                    </p>
                    <p className="text-gray-500">{prop.province}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  <span className="font-medium">Land Shape:</span>{" "}
                  {prop.landShape}
                </div>
              </div>

              {/* Features */}
              {prop.features && prop.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {prop.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {prop.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{prop.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-800">
                    {prop.owner}
                  </span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                    {prop.ownerType}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    <span>{prop.contact}</span>
                  </div>
                  {prop.whatsapp && (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>WhatsApp: {prop.whatsapp}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    <span className="truncate">{prop.email}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Action Buttons at Bottom */}
            <div className="flex justify-center items-center mb-2 gap-2 mt-4">
              <button
                onClick={() => handleUpdate(prop._id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg transition-colors duration-200"
                title="Update Property"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(prop._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm rounded-lg transition-colors duration-200"
                title="Delete Property"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
