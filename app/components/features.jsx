"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Feature({ properties }) {
  console.log("properties", properties);
  // const properties = [
  //   {
  //     id: 1,
  //     image: "/img/feature1.jpeg",
  //     price: "$4,600",
  //     title: "House on the Hollywood",
  //     address: "1374 Johnson Ave",
  //     beds: 4,
  //     baths: 2,
  //     sqft: "200 sqft",
  //     status: "FEATURED",
  //     forSale: true,
  //   },
  //   {
  //     id: 2,
  //     image: "/img/feature2.jpg",
  //     price: "$5,600",
  //     title: "Comfortable Villa Green",
  //     address: "113 Brookside, Brooklyn",
  //     beds: 5,
  //     baths: 3,
  //     sqft: "400 sqft",
  //     status: "FEATURED",
  //     forSale: true,
  //   },
  //   {
  //     id: 3,
  //     image: "/img/feature3.jpg",
  //     price: "$2,500",
  //     title: "Quality House For Sale",
  //     address: "679 Oxford ave",
  //     beds: 10,
  //     baths: 2,
  //     sqft: "500 sqft",
  //     status: "FEATURED",
  //     forSale: true,
  //   },
  //   {
  //     id: 4,
  //     image: "/img/feature3.jpg",
  //     price: "$2,500",
  //     title: "Quality House For Sale",
  //     address: "679 Oxford ave",
  //     beds: 10,
  //     baths: 2,
  //     sqft: "500 sqft",
  //     status: "FEATURED",
  //     forSale: true,
  //   },
  //   {
  //     id: 5,
  //     image: "/img/feature3.jpg",
  //     price: "$2,500",
  //     title: "Quality House For Sale",
  //     address: "679 Oxford ave",
  //     beds: 10,
  //     baths: 2,
  //     sqft: "500 sqft",
  //     status: "FEATURED",
  //     forSale: true,
  //   },
  // ];

  // Group properties into pages of 3
  // Limit to maximum 9 properties
  const limitedProperties = properties.slice(0, 9);

  // Group limited properties into pages of 3
  const pages = [];
  for (let i = 0; i < limitedProperties.length; i += 3) {
    pages.push(limitedProperties.slice(i, i + 3));
  }

  // Function to switch visible page (DOM manipulation)
  const handlePageClick = (pageIndex) => {
    const pagesEls = document.querySelectorAll(".page");
    const dotsEls = document.querySelectorAll(".pagination-dot");
    pagesEls.forEach((el, idx) => {
      el.style.display = idx === pageIndex ? "grid" : "none";
    });
    dotsEls.forEach((dot, idx) => {
      dot.classList.toggle("bg-gray-800", idx === pageIndex);
      dot.classList.toggle("bg-gray-300", idx !== pageIndex);
    });
  };

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

        {/* Pages */}
        {pages.map((page, pageIndex) => (
          <div
            key={pageIndex}
            className="page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ display: pageIndex === 0 ? "grid" : "none" }} // Show first page initially
          >
            {page.map((property) => (
              <div
                key={property._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {property.features
                      ?.slice(0, 2)
                      .filter(Boolean)
                      .map((feature, index) => (
                        <span
                          key={index}
                          className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded font-bold text-lg">
                      Rs. {property.perPrice}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{property.address}</p>
                  <div className="text-gray-600 mb-4">
                    {/* Top row: Location left, Type right */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-light text-gray-900">
                        {property.location}
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {property.type}
                      </span>
                    </div>

                    {/* Description below */}
                    <div className="text-sm font-semibold text-gray-900">
                      {property.description?.split(" ").slice(0, 15).join(" ")}
                      ...
                      <Link
                        href={`/property/${property._id}`}
                        className="text-blue-600 hover:underline ml-1"
                      >
                        see more
                      </Link>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <Link href={`/property/${property._id}`}>
                      <span className="text-green-600 font-medium text-sm">
                        For Sale
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {pages.map((_, idx) => (
            <button
              key={idx}
              className={`pagination-dot w-2.5 h-2.5 rounded-full ${
                idx === 0 ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Page ${idx + 1}`}
              onClick={() => handlePageClick(idx)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
