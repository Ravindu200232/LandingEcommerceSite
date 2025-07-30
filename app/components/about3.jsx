'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Users, Building, Star, MapPin, TrendingUp, Heart, Eye } from 'lucide-react';

const defaultCompanies = [
  {
    src: "https://www.marketscreener.com/static/private-issuer-squared-8P86Q.png",
    alt: "Brandix",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP8GIcuQewXFkDKkFVkRfjhyoJBlBqiBR2g&s",
    alt: "John Keells Holdings",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4if7rW0oYW_omKdWndVMQYkgXiW-He5K8Uw&s",
    alt: "HSBC Sri Lanka",
  },
  {
    src: "https://dimah.de/wp-content/themes/dimah/images/dimah-print-logo.png",
    alt: "Dilmah",
  },
  {
    src: "https://rexgroup.lk/assets/images/industries/tobacco/1.jpg",
    alt: "Ceylon Tobacco Company",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChpClofDsNhDELwmuVfC8RDpaUwSkXTTgBw&s",
    alt: "National Bank of Sri Lanka",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "150+", icon: Building, color: "from-blue-500 to-cyan-500" },
  { label: "Projects Finalized", value: "400+", icon: Award, color: "from-emerald-500 to-teal-500" },
  { label: "Happy Customers", value: "98%", icon: Heart, color: "from-pink-500 to-rose-500" },
  { label: "Recognized Awards", value: "8+", icon: Star, color: "from-amber-500 to-orange-500" },
];

const About3 = ({
  title = "About PropEstate Sri Lanka",
  description = "PropEstate Sri Lanka is dedicated to providing innovative real estate solutions that empower homebuyers and sellers across the island. We bring local expertise and global standards together.",
  mainImage = {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Modern Sri Lanka cityscape",
  },
  secondaryImage = {
    src: "https://images.unsplash.com/photo-1556228724-cf6714e2c49f?auto=format&fit=crop&w=600&q=80",
    alt: "Traditional Sri Lankan architecture",
  },
  breakout = {
    title: "Hundreds of Properties Listed in Sri Lanka",
    description: "Connecting buyers and sellers across Colombo, Kandy, Galle, and beyond with trusted real estate listings.",
    buttonText: "Explore Listings",
    buttonUrl: "https://www.propetate.lk/listings",
  },
  companiesTitle = "Trusted by Leading Sri Lankan Brands",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Sri Lanka",
  achievementsDescription = "We take pride in our local impact and commitment to excellence in real estate.",
  achievements = defaultAchievements,
} = {}) => {
  
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({});
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const observer = observerRef.current;
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer?.observe(el));
  }, []);

  const animateCounter = (target, id) => {
    const numericValue = parseInt(target.replace(/\D/g, '')) || 0;
    let current = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      setCounters(prev => ({ 
        ...prev, 
        [id]: target.includes('%') ? `${Math.floor(current)}%` : `${Math.floor(current)}+`
      }));
    }, 30);
  };

  useEffect(() => {
    achievements.forEach((achievement, idx) => {
      if (isVisible.achievements) {
        setTimeout(() => {
          animateCounter(achievement.value, idx);
        }, idx * 200);
      }
    });
  }, [isVisible.achievements]);

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-100/50 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div 
          id="header"
          data-animate
          className={`mb-20 text-center transform transition-all duration-1000 ${
            isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full">
            <MapPin size={16} className="text-blue-600 animate-pulse" />
            <span className="text-blue-800 text-sm font-medium tracking-wide">About Our Journey</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block mb-2 bg-gradient-to-r from-slate-800 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              {title.split(' ').slice(0, 2).join(' ')}
            </span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              {title.split(' ').slice(2).join(' ')}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Images Grid */}
        <div 
          id="images"
          data-animate
          className={`grid gap-8 lg:grid-cols-3 mb-20 transform transition-all duration-1000 delay-200 ${
            isVisible.images ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Main Image */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl">
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              className="w-full h-[400px] lg:h-[620px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-bold mb-2">Modern Sri Lanka</h3>
              <p className="text-white/80">Where tradition meets innovation</p>
            </div>
          </div>

          {/* Side Content */}
          <div className="flex flex-col gap-8">
            {/* Breakout Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-blue-50 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{breakout.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{breakout.description}</p>
                
                <button className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  {breakout.buttonText}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="group relative overflow-hidden rounded-3xl flex-1">
              <img
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                className="w-full h-full min-h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <div 
          id="companies"
          data-animate
          className={`text-center mb-20 transform transition-all duration-1000 delay-400 ${
            isVisible.companies ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-12">{companiesTitle}</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, idx) => (
              <div 
                key={company.src + idx}
                className="group transform transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <img 
                    src={company.src} 
                    alt={company.alt} 
                    className="h-8 w-auto md:h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div 
          id="achievements"
          data-animate
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 p-12 md:p-20 transform transition-all duration-1000 delay-600 ${
            isVisible.achievements ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px] animate-pulse"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full animate-pulse delay-1000"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
                {achievementsTitle}
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                {achievementsDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.label + idx}
                    className="group text-center transform transition-all duration-500 hover:scale-110"
                    style={{ animationDelay: `${idx * 200}ms` }}
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    
                    <div className="text-4xl md:text-5xl font-black text-white mb-3 tabular-nums">
                      {counters[idx] || '0+'}
                    </div>
                    
                    <p className="text-blue-100 font-medium">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export { About3 };