import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Poster2() {
  const features = [
    "Discover best land & property deals in Sri Lanka",
    "Trusted local agents & fast support",
    "List your own property across Sri Lankan cities"
  ];

  const agents = [
    { id: 1, image: "/img/agent1.jpg", name: "Lakshan Perera" },
    { id: 2, image: "/img/agent2.jpg", name: "Nadeesha Silva" },
    { id: 3, image: "/img/agent3.jpg", name: "Anura Fernando" },
    { id: 4, image: "/img/agent4.jpg", name: "Shanika Jayawardena" },
    { id: 5, image: "/img/agent5.jpg", name: "Dilshan Kumara" }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Find The Perfect
                <br />
                <span className="text-gray-800">Property or Land in Sri Lanka</span>
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Explore premium land and real estate options across Colombo, Kandy,
                <br />
                Galle, and beyond with trusted local experts.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-800 font-medium text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <button className="group flex items-center space-x-2 bg-white border-2 border-gray-300 px-6 py-3 rounded-full hover:border-gray-400 transition-colors duration-200">
                <span className="text-gray-800 font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Content - Images and Agents */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main House Image */}
              <div className="col-span-1 row-span-2">
                <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                  <img 
                    src="/img/poster2.jpg" 
                    alt="Modern house exterior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>

              {/* Couple Image */}
              <div className="col-span-1 ">
                <div className="relative h-37 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300 shadow-lg">
                  <img 
                    src="/img/poster1.jpg" 
                    alt="Sale house"
                    className="w-full h-75 object-cover"
                  />
                </div>
              </div>

              {/* Agents Section */}
              <div className="col-span-1">
                <div className="bg-white p-4 rounded-2xl shadow-lg ">
                  <div className="text-sm font-semibold text-gray-900 mb-3">
                    10k+ Trusted Sri Lankan Agents
                  </div>
                  <div className="flex items-center">
                    {/* Agent Avatars */}
                    <div className="flex -space-x-2">
                      {agents.slice(0, 4).map((agent) => (
                        <div key={agent.id} className="relative">
                          <img
                            src={agent.image}
                            alt={agent.name}
                            className="w-8 h-8 rounded-full border-2 border-white object-cover"
                          />
                        </div>
                      ))}
                      {/* More indicator */}
                      <div className="w-8 h-8 bg-gray-800 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-medium">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
