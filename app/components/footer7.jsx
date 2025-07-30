'use client';

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer7 = ({
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 PropEstate. All rights reserved.",
  legalLinks = defaultLegalLinks,
}) => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-bounce-gentle {
          animation: bounce 2s infinite;
        }
        
        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .bg-gradient-animated {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #ec4899, #f97316);
          background-size: 400% 400%;
          animation: gradient 8s ease infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .staggered-item:nth-child(1) { animation-delay: 0.1s; }
        .staggered-item:nth-child(2) { animation-delay: 0.2s; }
        .staggered-item:nth-child(3) { animation-delay: 0.3s; }
        .staggered-item:nth-child(4) { animation-delay: 0.4s; }
        .staggered-item:nth-child(5) { animation-delay: 0.5s; }
        .staggered-item:nth-child(6) { animation-delay: 0.6s; }
        
        .link-hover {
          position: relative;
          overflow: hidden;
        }
        
        .link-hover::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .link-hover:hover::before {
          width: 100%;
        }
        
        .social-glow {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .social-glow::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transition: all 0.3s ease;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
        
        .social-glow:hover::before {
          width: 60px;
          height: 60px;
        }
        
        .social-glow:hover {
          transform: scale(1.2) rotate(5deg);
          color: #3b82f6;
        }
      `}</style>

      <section className="relative py-32 bg-white text-gray-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-500 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500 rounded-full blur-xl animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100,100,100,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} className="w-full h-full"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
            {/* Left Section - Brand */}
            <div className="flex flex-col gap-6 lg:max-w-md animate-slideInLeft">
              {/* PropEstate Logo with Pulse Animation */}
              <div className="flex items-center animate-pulse-custom">
                <a href="#" className="flex items-center space-x-3 hover-lift">
                  <div className="w-12 h-12 bg-gradient-animated rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white animate-bounce-gentle"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    PropEstate
                  </span>
                </a>
              </div>

              {/* Description with Shimmer Effect */}
              <div className="relative">
                <p className="text-gray-600 text-base lg:max-w-sm leading-relaxed animate-fadeInUp">
                  {description}
                </p>
                <div className="absolute inset-0 shimmer-effect opacity-10"></div>
              </div>

              {/* Social Links with Glow Effects */}
              <ul className="flex items-center space-x-6 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                {socialLinks.map((social, idx) => (
                  <li key={idx} className="staggered-item">
                    <a 
                      href={social.href} 
                      aria-label={social.label}
                      className="social-glow inline-flex items-center justify-center w-12 h-12 rounded-full glass-effect hover-lift text-gray-600 hover:text-blue-600"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Links */}
            <div className="grid gap-8 md:grid-cols-3 lg:gap-12 flex-1 lg:max-w-3xl animate-slideInRight">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="staggered-item animate-fadeInUp">
                  <div className="glass-effect rounded-2xl p-6 hover-lift border border-gray-100 shadow-lg hover:shadow-xl">
                    <h3 className="mb-6 font-bold text-xl text-gray-800 relative">
                      {section.title}
                      <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    </h3>
                    <ul className="space-y-4 text-sm">
                      {section.links.map((link, linkIdx) => (
                        <li key={linkIdx} className="staggered-item">
                          <a 
                            href={link.href}
                            className="link-hover text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 inline-block py-1"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Copyright and Legal */}
          <div className="mt-16 pt-8 border-t border-gray-200 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="glass-effect rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center text-sm font-medium">
                <div className="order-2 lg:order-1">
                  <p className="text-gray-600 flex items-center space-x-2">
                    <span>{copyright}</span>
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  </p>
                </div>
                
                <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row md:gap-8">
                  {legalLinks.map((link, idx) => (
                    <li key={idx} className="staggered-item">
                      <a 
                        href={link.href}
                        className="link-hover text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity="0.25"
              className="fill-blue-600/20"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity="0.5"
              className="fill-purple-600/20"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-pink-600/20"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Footer7;