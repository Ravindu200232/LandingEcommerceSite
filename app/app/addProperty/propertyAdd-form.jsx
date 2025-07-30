'use client';

import React, { useState } from "react";
import {
  MapPin,
  User,
  Phone,
  Mail,
  MessageCircle,
  Home,
  DollarSign,
  FileText,
  Camera,
  Calendar,
  Tag,
  Upload,
  X,
} from "lucide-react";
import { propertyTypes, provinces, uniqueCity } from "@/lib/filterData";
import { toast } from "react-toastify";
import { createProperty } from "@/actions/property";
import { redirect } from "next/navigation";

export default function PropertyAddForm() {
  const access = false;
  const [formData, setFormData] = useState({
    owner: "",
    owner_type: "owner",
    contact: "",
    email: "",
    whatsapp: "",
    title: "",
    province: "",
    per_price: "",
    totalPrice: "",
    location: "",
    city: "",
    district: "",
    type: "",
    landShape: "",
    offerdFor: "",
    size: "",
    description: "",
    features: [],
    images: [],
    imageFiles: [],
    access,
  });

  const validation = () => {
    let value = true;
    if (
      formData.owner === "" ||
      formData.owner_type === "owner" ||
      formData.contact === "" ||
      formData.email === "" ||
      formData.whatsapp === "" ||
      formData.title === "" ||
      formData.province === "" ||
      formData.per_price === "" ||
      formData.totalPrice === "" ||
      formData.location === "" ||
      formData.city === "" ||
      formData.district === "" ||
      formData.type === "" ||
      formData.landShape === "" ||
      formData.offerdFor === "" ||
      formData.size === "" ||
      formData.description === "" ||
      formData.features.length < 1 ||
      formData.images.length < 1 ||
      formData.imageFiles.length < 1
    ) {
      toast.error("fill the form");
      value = false;
    }
    console.log(value);
    return value;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "features") {
      setFormData((prev) => ({
        ...prev,
        features: value
          .split(",")
          .map((f) => f.trim())
          .filter((f) => f.length > 0),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    const owner = formData.owner;
    const ownerType = formData.owner_type;
    const contact = formData.contact;
    const email = formData.email;
    const whatsapp = formData.whatsapp;
    const title = formData.title;
    const province = formData.province;
    const perPrice = formData.per_price;
    const totalPrice = formData.totalPrice;
    const location = formData.location;
    const city = formData.city;
    const district = formData.district;
    const type = formData.type;
    const landShape = formData.landShape;
    const offeredFor = formData.offerdFor;
    const size = formData.size;
    const description = formData.description;
    const features = formData.features;
    const images = formData.images;
    const imageFiles = formData.imageFiles;

    if (validation()) {
      console.log("Form Data:", formData.email);

      const response = await createProperty({
        owner,
        ownerType,
        contact,
        email,
        whatsapp,
        title,
        province,
        perPrice: parseFloat(perPrice),
        totalPrice: parseFloat(totalPrice),
        location,
        city,
        district,
        type,
        landShape,
        offeredFor,
        size: parseFloat(size),
        description,
        features: Array.isArray(features) ? features : [features],
        images: Array.isArray(images) ? images : [images],
        imageFiles: Array.isArray(imageFiles) ? imageFiles : [imageFiles],
        createdAt: new Date().toISOString(),
        popular : true,
        updatedAt: new Date().toISOString(),
      });

      

      if (response?.success) {
        toast.success(response.message);
      } else {
        toast.success(response.message);
        
      }
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImage = {
            id: Date.now() + Math.random(),
            file: file,
            url: event.target.result,
            name: file.name,
          };

          setFormData((prev) => ({
            ...prev,
            imageFiles: [...prev.imageFiles, newImage],
            images: [...prev.images, event.target.result],
          }));
        };
        reader.readAsDataURL(file);
      }
    });

    // Reset the input
    e.target.value = "";
  };

  const removeImage = (imageId) => {
    setFormData((prev) => ({
      ...prev,
      imageFiles: prev.imageFiles.filter((img) => img.id !== imageId),
      images: prev.images.filter(
        (_, index) => prev.imageFiles[index]?.id !== imageId
      ),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 text-white">
            <div className="flex items-center space-x-3">
              <Home className="w-8 h-8" />
              <div>
                <h1 className="text-3xl font-bold">Sale Your Property</h1>
                <p className="text-blue-100 mt-1">
                  List your property with detailed information
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Owner Information Section */}
            <div className="mb-10">
              <div className="flex items-center space-x-2 mb-6">
                <User className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Owner Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    name="owner"
                    value={formData.owner}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="Enter owner name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Owner Type
                  </label>
                  <select
                    name="owner_type"
                    value={formData.owner_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  >
                    <option value="owner">Owner</option>
                    <option value="agent">Agent</option>
                    <option value="broker">Broker</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>Contact Number</span>
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="0771234567"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Number</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="0771234567"
                  />
                </div>
              </div>
            </div>

            {/* Property Details Section */}
            <div className="mb-10">
              <div className="flex items-center space-x-2 mb-6">
                <Home className="w-5 h-5 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Property Details
                </h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Property Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="10 Perches Bare Land for Sale in Kiribathgoda"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Property Type
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    >
                      <option value="">Select Type</option>
                      {propertyTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Province
                    </label>
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    >
                      <option value="">Select Province</option>
                      {provinces.map((province) => (
                        <option key={province.value} value={province.value}>
                          {province.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    >
                      <option value="">Select City</option>
                      {uniqueCity.map((city) => (
                        <option key={city.value} value={city.value}>
                          {city.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="Gonawala, Kiribathgoda"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      District
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="Kiribathgoda"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Land Shape
                    </label>
                    <select
                      name="landShape"
                      value={formData.landShape}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    >
                      <option value="">Select Shape</option>
                      <option value="square">Square</option>
                      <option value="rectangle">Rectangle</option>
                      <option value="irregular">Irregular</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Size (Perches)
                    </label>
                    <input
                      type="number"
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="20"
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Offered For
                    </label>
                    <select
                      name="offerdFor"
                      value={formData.offerdFor}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    >
                      <option value="">Select Option</option>
                      <option value="sale">For Sale</option>
                      <option value="rent">For Rent</option>
                      <option value="lease">For Lease</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-10">
              <div className="flex items-center space-x-2 mb-6">
                <DollarSign className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Pricing Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Price per Perch (LKR)
                  </label>
                  <input
                    type="number"
                    name="per_price"
                    value={formData.per_price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="250000"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Total Price (LKR)
                  </label>
                  <input
                    type="number"
                    name="totalPrice"
                    value={formData.totalPrice}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="1200000"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            {/* Description and Features Section */}
            <div className="mb-10">
              <div className="flex items-center space-x-2 mb-6">
                <FileText className="w-5 h-5 text-orange-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Description & Features
                </h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Property Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                    placeholder="This great value property, in a highly residential area, awaits its new owner..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Features (comma separated)
                  </label>
                  <textarea
                    name="features"
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                    placeholder="Highly residential area, Few minutes to town, Clear deed"
                  />
                </div>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="mb-10">
              <div className="flex items-center space-x-2 mb-6">
                <Camera className="w-5 h-5 text-pink-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Property Images
                </h2>
              </div>

              <div className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 transition-colors duration-200">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      Upload Property Images
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Drag and drop images here, or click to select files
                    </p>
                    <div className="bg-pink-600 text-white px-6 py-2 rounded-lg inline-block hover:bg-pink-700 transition-colors duration-200">
                      Choose Images
                    </div>
                  </label>
                </div>

                {/* Image Preview Grid */}
                {formData.imageFiles.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {formData.imageFiles.map((image, index) => (
                      <div key={image.id} className="relative group">
                        <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-pink-300 transition-colors duration-200">
                          <img
                            src={image.url}
                            alt={`Property ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => removeImage(image.id)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-4 h-4" />
                        </button>

                        {/* Image Name */}
                        <p className="text-xs text-gray-500 mt-2 truncate">
                          {image.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Upload Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Camera className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-800 mb-1">
                        Image Upload Tips
                      </h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>
                          • Upload multiple high-quality images of your property
                        </li>
                        <li>• Accepted formats: JPG, PNG, WebP</li>
                        <li>• Recommended size: At least 800x600 pixels</li>
                        <li>
                          • First image will be used as the main property photo
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={()=>{
                    redirect(`/`)
                }}
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Publish Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
