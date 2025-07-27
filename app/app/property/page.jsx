"use client";

import Footer7 from "@/components/footer7";
import { Navbar5 } from "@/components/navbar5";
import React, { useState } from "react";
import Cart from "./cart";
import {
  perchPriceRange,
  perchSizeRange,
  priceRange,
  uniqueCity,
} from "@/lib/filterData";
import PropertyTypeSelector from "@/components/PropertyTypeSelector";
import SearchComponent from "@/components/searchComponenet";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  checkPerchPriceMax,
  checkPerchPriceMin,
  checkPerchSizeMax,
  checkPerchSizeMin,
  checkPriceRangerMax,
  checkPriceRangerMin,
} from "@/lib/Range";

const property = [
  {
    id: 1,
    title: "10 Perches Bare Land for Sale in Kiribathgoda",
    per_price: 250000.0,
    totalPrice: 1200000.0,
    location: "Gonawala, Kiribathgoda",
    city: "Malabe",
    district: "Kiribathgoda",
    type: "Land",
    size: 20,
    description:
      "This great value property, in a highly residential area, awaits its new owner.",
    features: ["Highly residential area", "Few minutes to town", "Clear deed"],
    images: ["/img/feature1.jpeg", "land1_2.jpg"],
    listedDate: "2025-07-25",
    status: "Available",
  },
  {
    id: 2,
    title: "Luxury Apartment for Sale in Colombo 07",
    per_price: 1500000.0,
    totalPrice: 30000000.0,
    location: "Ward Place, Colombo 07",
    city: "Colombo",
    district: "Colombo",
    type: "Apartment",
    size: 15,
    description:
      "Modern luxury apartment in the heart of the city, near top schools and hospitals.",
    features: ["24/7 Security", "Swimming Pool", "Covered Parking"],
    images: ["apartment1.jpg", "apartment2.jpg"],
    listedDate: "2025-07-20",
    status: "Available",
  },
  {
    id: 3,
    title: "2-Story House for Sale in Kandy",
    per_price: 500000.0,
    totalPrice: 15000000.0,
    location: "Peradeniya Road, Kandy",
    city: "Kandy",
    district: "Kandy",
    type: "House",
    size: 25,
    description:
      "Spacious family house with beautiful mountain views and garden space.",
    features: ["Garage", "Garden", "Balcony View"],
    images: ["house1.jpg", "house2.jpg"],
    listedDate: "2025-07-18",
    status: "Available",
  },
  {
    id: 4,
    title: "Commercial Land for Sale in Galle Town",
    per_price: 800000.0,
    totalPrice: 6400000.0,
    location: "Main Street, Galle",
    city: "Galle",
    district: "Galle",
    type: "Commercial",
    size: 8,
    description:
      "Prime commercial land ideal for showroom or office space near city center.",
    features: ["Main road access", "High visibility", "Ideal for business"],
    images: ["comm1.jpg", "comm2.jpg"],
    listedDate: "2025-07-15",
    status: "Available",
  },
  {
    id: 5,
    title: "Agricultural Land for Sale in Anuradhapura",
    per_price: 150000.0,
    totalPrice: 3000000.0,
    location: "Mihintale, Anuradhapura",
    city: "Anuradhapura",
    district: "Anuradhapura",
    type: "Agriculture",
    size: 20,
    description:
      "Fertile land suitable for paddy or vegetables, with irrigation access.",
    features: ["Water source", "Fertile soil", "Easy access road"],
    images: ["agri1.jpg", "agri2.jpg"],
    listedDate: "2025-07-10",
    status: "Available",
  },
];

export default function Page() {
  const [properties, setProperties] = useState(property);

  const [ptype, setPtype] = useState("all");
  const [lType, setLtype] = useState("all");
  const [priceType, setPriceType] = useState("all");
  const [perPrice, setperPrice] = useState("all");
  const [preces, setpreces] = useState("all");
  const [search, setSearch] = useState("");

  const [filterType, setFilterType] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");
  const [FilterperPrice, setFilterperPrice] = useState("all");
  const [filterSize, setFilterSize] = useState("all");

  const handleFilter = () => {
    setFilterType(ptype);
    setFilterLocation(lType);
    setFilterPrice(priceType);
    setFilterperPrice(perPrice);
    setFilterSize(preces);
  };

  const filteredProperties = properties.filter((property) => {
    //search bar filter
    const query = search.toLowerCase();

    const matchSearch =
      property.title.toLowerCase().includes(query) ||
      property.city.toLowerCase().includes(query) ||
      property.description.toLowerCase().includes(query) ||
      property.location.toLowerCase().includes(query);
      

    // property type
    const propertyTypeMatch =
      filterType === "all" ||
      property.type.toLowerCase() === filterType.toLowerCase();

    const locationMatch =
      filterLocation === "all" ||
      property.city.toLowerCase() === filterLocation.toLowerCase();

    // Price Range (total price)
    const priceRangeMatch =
      filterPrice === "all" ||
      (property.totalPrice >= checkPriceRangerMin(filterPrice) &&
        property.totalPrice < checkPriceRangerMax(filterPrice));

    // Per Price Range
    const perpriceRangeMatch =
      FilterperPrice === "all" ||
      (property.per_price >= checkPerchPriceMin(FilterperPrice) &&
        property.per_price < checkPerchPriceMax(FilterperPrice));

    // Size Range (in perches)
    const sizeMatch =
      filterSize === "all" ||
      (property.size >= checkPerchSizeMin(filterSize) &&
        property.size < checkPerchSizeMax(filterSize));

    // Combine all conditions
    return (
      matchSearch &&
      propertyTypeMatch &&
      locationMatch &&
      priceRangeMatch &&
      perpriceRangeMatch &&
      sizeMatch
    );
  });

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
              onChange={(e) => setSearch(e.target.value)}
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
                setPtype(e.target.value);
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
                setLtype(e.target.value);
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
              onChange={(e) => {
                setPriceType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select price
              </option>
              {priceRange.map((price) => (
                <option key={price.value} value={price.value}>
                  {price.label}
                </option>
              ))}
            </select>
          </div>

          {/* perches price */}
          <div>
            <label
              htmlFor="per_price"
              className="block mb-1 font-medium text-gray-700"
            >
              Per Perches Price
            </label>
            <select
              id="perchesPrice"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setperPrice(e.target.value);
              }}
            >
              <option value="" disabled>
                Select price
              </option>
              {perchPriceRange.map((price) => (
                <option key={price.value} value={price.value}>
                  {price.label}
                </option>
              ))}
            </select>
          </div>

          {/* size */}
          <div>
            <label
              htmlFor="size"
              className="block mb-1 font-medium text-gray-700"
            >
              Size(Perches)
            </label>
            <select
              id="size"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setpreces(e.target.value);
              }}
            >
              <option value="" disabled>
                Select No Of per
              </option>
              {perchSizeRange.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>

          {/* filter button */}
          <div className="mt-8">
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
