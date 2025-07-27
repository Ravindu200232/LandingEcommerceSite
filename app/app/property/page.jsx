"use client";

import Footer7 from "@/components/footer7";
import { Navbar5 } from "@/components/navbar5";
import React, { useState } from "react";
import Cart from "./cart";
import { priceRange, uniqueCity } from "@/lib/filterData";
import PropertyTypeSelector from "@/components/PropertyTypeSelector";
import SearchComponent from "@/components/searchComponenet";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const property = [
  {
    id: 1,
    title: "10 Perches Bare Land for Sale in Kiribathgoda",
    price: "Rs. 1.55M",
    totalPrice: "Rs. 15.5M",
    location: "Gonawala, Kiribathgoda",
    city: "Malabe",
    district: "Kiribathgoda",
    type: "Land",
    size: "10 Perches",
    description:
      "This great value property, in a highly residential area, awaits its new owner.",
    features: ["Highly residential area", "Few minutes to town", "Clear deed"],
    images: ["/img/feature1.jpeg", "land1_2.jpg"],
    listedDate: "2025-07-25",
    status: "Available",
  },
  {
    id: 2,
    title: "Luxury 4BR House in Malabe",
    price: "Rs. 45M",
    totalPrice: "Rs. 45M",
    location: "Malabe, Colombo",
    city: "Malabe",
    district: "Colombo",
    type: "House",
    size: "15 Perches",
    description:
      "Modern two-story luxury house with landscaped garden and garage.",
    features: ["4 Bedrooms", "3 Bathrooms", "Garden", "Garage for 2 cars"],
    images: ["/img/feature1.jpeg", "land1_2.jpg"],
    listedDate: "2025-07-20",
    status: "Available",
  },
  {
    id: 3,
    title: "6 Acre Agricultural Land in Matale",
    price: "Rs. 250,000 Per Acre",
    totalPrice: "Rs. 1.5M",
    location: "Ukuwela, Matale",
    city: "Ukuwela",
    district: "Matale",
    type: "Agricultural",
    size: "6 Acres",
    description: "Ideal for farming, with direct road access and water supply.",
    features: ["Road Access", "Water Supply", "Fertile Soil"],
    images: ["/img/feature1.jpeg", "land1_2.jpg"],
    listedDate: "2025-07-10",
    status: "Available",
  },
  {
    id: 4,
    title: "Commercial Building in Kandy Town",
    price: "Rs. 120M",
    totalPrice: "Rs. 120M",
    location: "Kandy Town",
    city: "Kandy Town",
    district: "Kandy",
    type: "Commercial",
    size: "4,000 sqft",
    description:
      "3-floor commercial building ideal for retail or office space.",
    features: ["Main Road Frontage", "Parking", "Electricity & Water"],
    images: ["/img/feature1.jpeg", "land1_2.jpg"],
    listedDate: "2025-07-18",
    status: "Available",
  },
  {
    id: 5,
    title: "15 Perches Land with House in Galle",
    price: "Rs. 12M",
    totalPrice: "Rs. 12M",
    location: "Galle City",
    city: "Galle City",
    district: "Galle",
    type: "Land_House",
    size: "15 Perches",
    description:
      "Old house on valuable land, close to Galle Fort and town center.",
    features: ["Close to Galle Fort", "Water/Electricity", "Residential Zone"],
    images: ["/img/feature1.jpeg", "land1_2.jpg"],
    listedDate: "2025-07-15",
    status: "Available",
  },
  {
    id: 6,
    title: "Luxury Apartment in Colombo 07",
    price: "Rs. 75M",
    totalPrice: "Rs. 75M",
    location: "Colombo 07",
    city: "colombo_07",
    district: "Colombo",
    type: "Apartment",
    size: "2,300 sqft",
    description: "Modern apartment with city view, gym, and pool access.",
    features: ["3 Bedrooms", "Swimming Pool", "Gym", "24/7 Security"],
    images: ["/img/feature1.jpeg", "land1_2.jpg"],
    listedDate: "2025-07-12",
    status: "Available",
  },
  {
    id: 7,
    title: "20 Perches Lake View Land in Nuwara Eliya",
    price: "Rs. 900,000 Per Perch",
    totalPrice: "Rs. 18M",
    location: "Lake Road, Nuwara Eliya",
    city: "Lake Road",
    district: "Nuwara Eliya",
    type: "Land",
    size: "20 Perches",
    description:
      "Scenic land overlooking the lake, ideal for holiday bungalow.",
    features: ["Lake View", "Calm Environment", "Close to Town"],
    images: ["/img/feature1.jpeg", "land1_2.jpg"],
    listedDate: "2025-07-22",
    status: "Available",
  },
];

export default function Page() {
  const [properties, setProperties] = useState(property);

  const [ptype, setPtype] = useState("all");
  const [lType, setLtype] = useState("all");
  const [priceType, setPriceType] = useState("all");
  const [sizeType, setSizeType] = useState("all");
  const [sorttype, setSorttype] = useState("all");

  const [filterType,setFilterType] = useState("all");
  const [filterLocation,setFilterLocation] = useState("all");



  const handleFilter = ()=>{

    setFilterType(ptype);
    setFilterLocation(lType);
  }

    const filteredProperties = properties.filter((property)=>{
      const propertyTypeMatch = filterType === "all" || property.type.toLowerCase() === filterType.toLowerCase() ;
      const locationMatch = filterLocation === "all" || property.city.toLowerCase()  === filterLocation.toLowerCase() ;
      console.log(property.type.toLowerCase())
      return propertyTypeMatch && locationMatch
    })


  return (
    <div className=" min-w-full h-full">
      <div className="   shadow-xl ">
        <Navbar5 />
      </div>

      <div className="w-full px-4 py-6 flex flex-col items-center">
        {/* Search Bar */}
        <div className="w-full max-w-4xl mb-4">
          <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 space-x-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search listings..."
              onChange={(e) => handleMovieSearch(e.target.value)}
              className="w-full h-10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
          {/* Property Type */}
          <div>
            <label
              htmlFor="type"
              className="block mb-1 font-medium text-gray-700"
            >
              Property Type
            </label>
            <select
              id="type"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setPtype(e.target.value)
              }}
            >
              <option value="" disabled>
                Select property type
              </option>
              <option value="all">All</option>
              <option value="land">Land</option>
              <option value="house">House</option>
              <option value="agricultural">Agricultural</option>
              <option value="commercial">Commercial</option>
              <option value="apartment">Apartment</option>
              
            </select>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block mb-1 font-medium text-gray-700"
            >
              Location
            </label>
            <select
              id="location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setLtype(e.target.value)
              }}
            >
              {uniqueCity.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label
              htmlFor="price"
              className="block mb-1 font-medium text-gray-700"
            >
              Price Range
            </label>
            <select
              id="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setPriceType(e.target.value)
              }}
            >
              {priceRange.map((price) => (
                <option key={price.value} value={price.value}>
                  {price.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label
              htmlFor="bedrooms"
              className="block mb-1 font-medium text-gray-700"
            >
              Bedrooms
            </label>
            <select
              id="bedrooms"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select bedrooms
              </option>
              <option value="1">1+</option>
              <option value="2">2+</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div>
            <label
              htmlFor="bathrooms"
              className="block mb-1 font-medium text-gray-700"
            >
              Bathrooms
            </label>
            <select
              id="bathrooms"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select bathrooms
              </option>
              <option value="1">1+</option>
              <option value="2">2+</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label
              htmlFor="sortBy"
              className="block mb-1 font-medium text-gray-700"
            >
              Sort By
            </label>
            <select
              id="sortBy"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Sort listings
              </option>
              <option value="newest">Newest</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>

          {/* filter button */}
           <div>
            <Button onClick={handleFilter}>Filter</Button>
           
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10">
        {filteredProperties.map((property) => (
          <div key={property.id}>
            <Cart property={property} />
          </div>
        ))}
      </div>

      <Footer7 />
    </div>
  );
}
