import React from 'react';
import { Star } from 'lucide-react';

export default function HomeReviews() {
  const reviews = [
    {
      id: 1,
      title: "Great Work",
      review: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et",
      rating: 5,
      author: {
        name: "Ali Tufan",
        role: "Marketing",
        avatar: "/api/placeholder/50/50"
      }
    },
    {
      id: 2,
      title: "Good Job",
      review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
      rating: 5,
      author: {
        name: "Albert Flores",
        role: "Designer",
        avatar: "/api/placeholder/50/50"
      }
    },
    {
      id: 3,
      title: "Perfect",
      review: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
      rating: 5,
      author: {
        name: "Robert Fox",
        role: "Developer",
        avatar: "/api/placeholder/50/50"
      }
    },
    {
      id: 4,
      title: "Work Hard",
      review: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et",
      rating: 5,
      author: {
        name: "Mervin McKinney",
        role: "Marketing",
        avatar: "/api/placeholder/50/50"
      }
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            People Love Living with Homez
          </h2>
          <p className="text-gray-600 text-lg">
            Aliquam lacinia diam quis lacus euismod
          </p>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Review Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {review.title}
              </h3>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                "{review.review}"
              </p>

              {/* Star Rating */}
              <div className="flex items-center mb-6">
                {renderStars(review.rating)}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={review.author.avatar}
                    alt={review.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="text-gray-900 font-semibold text-sm">
                    {review.author.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {review.author.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}