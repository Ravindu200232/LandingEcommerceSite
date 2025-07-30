import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: "Apartment",
      date: "Feb 03",
      title: "Top Neighborhoods to Live in Colombo for Families",
      image: "https://images.unsplash.com/photo-1598300052677-c39f22a24ff6?auto=format&fit=crop&w=800&q=80" // Colombo cityscape
    },
    {
      id: 2,
      category: "Villa",
      date: "Feb 03",
      title: "How to Choose the Perfect Holiday Home in Galle",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" // Villa or seaside house
    },
    {
      id: 3,
      category: "Townhome",
      date: "Feb 03",
      title: "Tips for Maintaining Your Property in the Hill Country",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80" // Hill country house
    }
  ];

  const brands = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "AMD", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/AMD_logo.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Cisco_logo.svg" },
    { name: "Dropcam", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Dropcam_Logo.svg" },
    { name: "Logitech", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Logitech_logo.svg" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Blog Section */}
        <div className="mb-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Our Blog
            </h2>
            <p className="text-gray-600">
              Insights and tips from Sri Lanka's property market
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-sm">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {post.date.split(' ')[0]}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {post.date.split(' ')[1]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg">
              Trusted by the world's best
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Need Help? Talk To Our Expert.
              </h3>
              <p className="text-gray-600">
                Talk to our experts or browse through more properties.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button className="group bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <a 
                href="tel:+94771234567" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2 w-4 h-4" />
                +94 77 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
