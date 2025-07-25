"use client";

import React, { useState } from 'react';
import { Search, Settings } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchInput, setSearchInput] = useState('');

  const tabs = ['All', 'For Sale', 'For Rent'];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/img/hero.jpg')`
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header Text */}
        <div className="text-center mb-12 max-w-4xl">
          <p className="text-white text-sm font-medium mb-2 tracking-wider uppercase">
            THE BEST WAY TO
          </p>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Find Your Dream Home
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            We've more than 745,000 apartments, place & plot
          </p>
        </div>

        {/* Search Container */}
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            {/* Tabs */}
            <div className="flex mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'text-slate-800 border-b-2 border-slate-800'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 border-2 border-slate-400 rounded"></div>
                </div>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Enter an address, neighborhood, city, or ZIP code"
                  className="w-full pl-12 pr-4 py-4 text-slate-700 placeholder-slate-400 bg-slate-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 text-sm"
                />
              </div>
              
              <button className="flex items-center gap-2 px-4 py-4 text-slate-600 hover:text-slate-800 transition-colors">
                <Settings size={18} />
                <span className="text-sm font-medium">Advanced</span>
              </button>
              
              <button className="bg-coral-500 hover:bg-coral-600 text-white p-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group">
                <Search size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for extra visual interest */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>

      <style jsx>{`
        .bg-coral-500 {
          background-color: #ff6b47;
        }
        .hover\\:bg-coral-600:hover {
          background-color: #ff5722;
        }
      `}</style>
    </div>
  );
}