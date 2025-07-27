import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const PropertyTypeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    'Land',
    'House',
    'Apartment',
    'Commercial',
    'Agricultural Land'
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="w-53 relative">
      {/* Main dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:w-[200px] md:px-3 md:py-3 px-1.5 py-1.5 bg-white border border-gray-300 rounded-md md:rounded-lg text-left font-medium hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
          selectedOption ? 'text-gray-700' : 'text-gray-500'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className='text-sm md:text-md'>{selectedOption || 'Select property type'}</span>
          <ChevronDown 
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 ${
                index === 0 ? 'rounded-t-lg' : ''
              } ${
                index === options.length - 1 ? 'rounded-b-lg' : 'border-b border-gray-100'
              } ${
                option === selectedOption ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{option}</span>
                {option === selectedOption && (
                  <Check className="w-5 h-5 text-blue-600" />
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default PropertyTypeSelector;