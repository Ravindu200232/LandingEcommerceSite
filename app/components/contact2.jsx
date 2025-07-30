'use client';

import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, Globe, MapPin, Send, User, MessageSquare, Sparkles, Heart, Star } from "lucide-react";

const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+94 11 234 5678",
  email = "info@propetate.lk",
  web = { label: "propetate.lk", url: "https://propetate.lk" }
}) => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success animation
    const successElement = document.getElementById('success-message');
    if (successElement) {
      successElement.classList.remove('hidden');
      setTimeout(() => {
        successElement.classList.add('hidden');
      }, 3000);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
      color: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "from-emerald-500 to-teal-500",
      delay: "100ms"
    },
    {
      icon: Globe,
      label: "Website",
      value: web.label,
      href: web.url,
      color: "from-purple-500 to-pink-500",
      delay: "200ms"
    }
  ];

  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className={`absolute animate-float-${(i % 4) + 1} opacity-40`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
      }}
    >
      {i % 3 === 0 ? (
        <Heart className="w-4 h-4 text-pink-400" />
      ) : i % 3 === 1 ? (
        <Star className="w-3 h-3 text-yellow-400" />
      ) : (
        <Sparkles className="w-4 h-4 text-blue-400" />
      )}
    </div>
  ));

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/60 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        {floatingElements}
      </div>

      {/* Success Message */}
      <div id="success-message" className="hidden fixed top-10 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl shadow-2xl animate-bounce">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4" />
            </div>
            <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 lg:flex-row lg:gap-20">
          
          {/* Left Side - Contact Info */}
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-12">
            
            {/* Header */}
            <div 
              id="contact-header"
              data-animate
              className={`text-center lg:text-left transform transition-all duration-1000 ${
                isVisible['contact-header'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full">
                <MessageSquare size={16} className="text-blue-600 animate-pulse" />
                <span className="text-blue-800 text-sm font-medium tracking-wide">Get In Touch</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Contact Details */}
            <div 
              id="contact-details"
              data-animate
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible['contact-details'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <h3 className="text-3xl font-bold mb-8 text-center lg:text-left bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {contactDetails.map((detail, idx) => {
                  const IconComponent = detail.icon;
                  return (
                    <div 
                      key={detail.label}
                      className={`group transform transition-all duration-500 hover:scale-105`}
                      style={{ animationDelay: detail.delay }}
                    >
                      <a 
                        href={detail.href}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:bg-white"
                      >
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${detail.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                            {detail.label}
                          </div>
                          <div className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {detail.value}
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div 
            id="contact-form"
            data-animate
            className={`mx-auto flex max-w-3xl flex-col transform transition-all duration-1000 delay-400 ${
              isVisible['contact-form'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200/50 p-12 shadow-2xl">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.1)_75%)] bg-[length:60px_60px]"></div>
              </div>

              {/* Form Header */}
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-4">
                  Send us a Message
                </h3>
                <p className="text-slate-600">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                {/* Name Fields */}
                <div className="flex gap-6">
                  <div className="flex-1 group">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.firstname}
                        onChange={(e) => handleInputChange('firstname', e.target.value)}
                        onFocus={() => setFocusedField('firstname')}
                        onBlur={() => setFocusedField('')}
                        placeholder="Your first name"
                        className={`w-full px-4 py-4 bg-slate-50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white ${
                          focusedField === 'firstname' 
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                      <User className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                        focusedField === 'firstname' ? 'text-blue-500' : 'text-gray-400'
                      }`} size={18} />
                    </div>
                  </div>
                  
                  <div className="flex-1 group">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.lastname}
                        onChange={(e) => handleInputChange('lastname', e.target.value)}
                        onFocus={() => setFocusedField('lastname')}
                        onBlur={() => setFocusedField('')}
                        placeholder="Your last name"
                        className={`w-full px-4 py-4 bg-slate-50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white ${
                          focusedField === 'lastname' 
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                      <User className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                        focusedField === 'lastname' ? 'text-blue-500' : 'text-gray-400'
                      }`} size={18} />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-4 bg-slate-50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white ${
                        focusedField === 'email' 
                          ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    <Mail className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-emerald-500' : 'text-gray-400'
                    }`} size={18} />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      placeholder="What's this about?"
                      className={`w-full px-4 py-4 bg-slate-50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white ${
                        focusedField === 'subject' 
                          ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    <MessageSquare className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === 'subject' ? 'text-purple-500' : 'text-gray-400'
                    }`} size={18} />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Tell us more about your inquiry..."
                      className={`w-full px-4 py-4 bg-slate-50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white resize-none ${
                        focusedField === 'message' 
                          ? 'border-pink-500 shadow-lg shadow-pink-500/20' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full py-5 px-8 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 hover:from-blue-600 hover:via-emerald-600 hover:to-teal-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export { Contact2 };