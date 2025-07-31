"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Cycle through background effects
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSeeProperties = () => {
    // In a real Next.js app, you would use: router.push('/property')
    window.location.href = '/property';
  };

  const floatingElements = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className={`absolute animate-float-${i % 4 + 1} opacity-60`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
      }}
    >
      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full blur-sm"></div>
    </div>
  ));

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ${
            currentImageIndex === 0 ? 'opacity-40' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.2)), url('/img/hero.jpg')`
          }}
        ></div>
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 transition-all duration-2000 ${
            currentImageIndex === 1 ? 'opacity-60' : 'opacity-0'
          }`}
        ></div>
        <div 
          className={`absolute inset-0 bg-gradient-to-bl from-slate-600/30 to-emerald-800/30 transition-all duration-2000 ${
            currentImageIndex === 2 ? 'opacity-50' : 'opacity-0'
          }`}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-400/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 border-2 border-emerald-300/30 rounded-full animate-bounce-slow"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Animated Header */}
        <div className={`text-center mb-16 max-w-5xl transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 mt-10 mb-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full">
            <MapPin size={16} className="text-emerald-300 animate-pulse" />
            <span className="text-emerald-100 text-sm font-medium tracking-wider  uppercase">
              Explore Lands in Sri Lanka
            </span>
            <Sparkles size={16} className="text-emerald-300 animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block mb-2 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent animate-gradient">
              Discover Your
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-reverse">
              Perfect Land
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Over <span className="text-emerald-400 font-bold">50,000 verified</span> land listings 
            island-wide — from pristine coastal plots to lush mountain retreats
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-emerald-400 group-hover:scale-110 transition-transform">50K+</div>
              <div className="text-slate-300 text-sm">Properties</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-teal-400 group-hover:scale-110 transition-transform">25</div>
              <div className="text-slate-300 text-sm">Districts</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">9</div>
              <div className="text-slate-300 text-sm">Provinces</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`transform transition-all duration-1000 delay-500 mb-30 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button
            onClick={handleSeeProperties}
            className="group relative px-12 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            
            {/* Button Content */}
            <div className="relative flex  items-center gap-3">
              <span>See All Lands</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full p-1">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(90deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(270deg); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(45deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-reverse {
          background-size: 200% 200%;
          animation: gradient-reverse 3s ease infinite;
        }
        
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        
        .duration-2000 { transition-duration: 2000ms; }
      `}</style>
    </div>
  );
}