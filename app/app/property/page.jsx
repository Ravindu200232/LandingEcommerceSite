import Footer7 from "@/components/footer7";
import PropertyNavbar, { Navbar5 } from "@/components/navbar5";
import React from "react";
import Cart from "../../components/cart";
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

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getProperties } from "@/actions/property";



// Server component - gets search params from URL
export default async function Page({ searchParams }) {
  const itemsPerPage = 10;
  
  // Extract filter values from URL search params
  const filterType = searchParams?.type || "all";
  const filterLocation = searchParams?.location || "all";
  const filterPrice = searchParams?.price || "all";
  const FilterperPrice = searchParams?.perPrice || "all";
  const filterSize = searchParams?.size || "all";
  const search = searchParams?.search || "";
  const currentPage = parseInt(searchParams?.page) || 1;

  const property = await getProperties();

  // Apply filters to properties
  const filteredProperties = property.filter((property) => {
    // Search bar filter
    const query = search.toLowerCase();

    const matchSearch = !search || 
      property.title.toLowerCase().includes(query) ||
      property.city.toLowerCase().includes(query) ||
      property.description.toLowerCase().includes(query) ||
      property.location.toLowerCase().includes(query);

    // Property type
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

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredProperties.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Helper function to build URL with updated params
  const buildFilterUrl = (newParams) => {
    const params = new URLSearchParams();
    
    // Keep existing params
    if (filterType !== "all") params.set('type', filterType);
    if (filterLocation !== "all") params.set('location', filterLocation);
    if (filterPrice !== "all") params.set('price', filterPrice);
    if (FilterperPrice !== "all") params.set('perPrice', FilterperPrice);
    if (filterSize !== "all") params.set('size', filterSize);
    if (search) params.set('search', search);
    if (currentPage > 1) params.set('page', currentPage.toString());
    
    // Override with new params
    Object.entries(newParams).forEach(([key, value]) => {
      if (value && value !== "all" && value !== "") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    
    // Reset page when filters change (except when only changing page)
    if (!newParams.page) {
      params.delete('page');
    }
    
    return `?${params.toString()}`;
  };

  return (
    <div className="min-w-full h-full">
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <PropertyNavbar />
      </div>

      <div className="pt-20">
        <div className="w-full px-4 py-6 flex flex-col items-center">
          {/* Search Bar */}
          <div className="w-full max-w-4xl mb-4">
            <form method="GET" className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 space-x-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="search"
                defaultValue={search}
                placeholder="Search listings..."
                className="w-full h-10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              />
              <input type="hidden" name="type" value={filterType} />
              <input type="hidden" name="location" value={filterLocation} />
              <input type="hidden" name="price" value={filterPrice} />
              <input type="hidden" name="perPrice" value={FilterperPrice} />
              <input type="hidden" name="size" value={filterSize} />
              <Button type="submit" className="ml-2">Search</Button>
            </form>
          </div>

          {/* Filters */}
          <form method="GET" className="w-full max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                  name="type"
                  defaultValue={filterType}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
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
                  name="location"
                  defaultValue={filterLocation}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  name="price"
                  defaultValue={filterPrice}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Prices</option>
                  {priceRange.map((price) => (
                    <option key={price.value} value={price.value}>
                      {price.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Per Perches Price */}
              <div>
                <label
                  htmlFor="perPrice"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Per Perches Price
                </label>
                <select
                  id="perPrice"
                  name="perPrice"
                  defaultValue={FilterperPrice}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Prices</option>
                  {perchPriceRange.map((price) => (
                    <option key={price.value} value={price.value}>
                      {price.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size */}
              <div>
                <label
                  htmlFor="size"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Size (Perches)
                </label>
                <select
                  id="size"
                  name="size"
                  defaultValue={filterSize}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Sizes</option>
                  {perchSizeRange.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter Button */}
              <div className="mt-8">
                <input type="hidden" name="search" value={search} />
                <Button type="submit">Apply Filters</Button>
              </div>
            </div>
          </form>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10">
          {paginatedItems.map((property) => (
            <div key={property._id}>
              <Cart property={property} />
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            <a href="?" className="text-blue-500 hover:underline mt-2 inline-block">
              Clear all filters
            </a>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-6 flex justify-center">
            <PaginationContent className="flex items-center space-x-2">
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  href={currentPage > 1 ? buildFilterUrl({ page: currentPage - 1 }) : '#'}
                  className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>

              {/* Numbered Pages */}
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href={buildFilterUrl({ page: page })}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  href={currentPage < totalPages ? buildFilterUrl({ page: currentPage + 1 }) : '#'}
                  className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        <Footer7 />
      </div>
    </div>
  );
}