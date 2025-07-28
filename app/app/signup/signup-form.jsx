"use client";

import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Home,
  MapPin,
  Users,
  Shield,
  ChevronRight,
  Facebook,
  Chrome,
  Apple,
} from "lucide-react";

import { signUp } from "@/lib/auth-client";

export default function SignupForm() {

  

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const name = firstName+ " " + lastName;
    const email = formData.get("email");
    const password = formData.get("password");
    const rePassword = formData.get("rePassword");

    console.log(firstName, lastName, email, password, rePassword);
        const {data,error} = await signUp.email(
            {email,password,name:name,image: undefined},
            {
                onRequest:(ctx)=> {
                    console.log("onRequest",ctx)
                },
                onSuccess: ()=>{
                    redirect("/login");
                },
                onError: (ctx)=> {
                    alert(ctx.error.message);
                }
            }
        )
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex">
      {/* Left Side - Hero */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1200&fit=crop"
            alt="Property landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-800/70 to-teal-900/80" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">LandVista</h1>
              <p className="text-sm text-white/80">
                Premium Property Solutions
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Join the
              <span className="block text-green-300">LandVista Family</span>
            </h2>
            <p className="text-lg text-white/90">
              Create your account to unlock curated land listings, premium
              support and more.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <Feature
                icon={<MapPin />}
                color="green"
                title="Prime Locations"
                desc="Curated properties across Sri Lanka"
              />
              <Feature
                icon={<Shield />}
                color="blue"
                title="Verified Listings"
                desc="Every land title legally vetted"
              />
              <Feature
                icon={<Users />}
                color="purple"
                title="Expert Support"
                desc="Get help from real estate pros"
              />
            </div>
          </div>

          <p className="text-center italic text-white/80 mt-6">
            "Start your property journey today — it's free!"
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo (Mobile) */}
          <div className="lg:hidden flex justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">LandVista</h1>
              <p className="text-sm text-gray-600">
                Premium Property Solutions
              </p>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600">
              It only takes a minute to get started
            </p>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
              <Chrome className="w-5 h-5 text-blue-500" />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                <Facebook className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">Facebook</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                <Apple className="w-5 h-5 text-gray-900" />
                <span className="font-medium text-gray-700">Apple</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-50 text-gray-500 rounded-full">
                Or sign up with email
              </span>
            </div>
          </div>

          {/* Signup Form */}
          <form className="space-y-5" onSubmit={handleSubmitForm} notValidate>
            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="First Name"
                required
                id="firstName"
                name="firstName"
              />
              <InputField
                label="Last Name"
                required
                id="lastName"
                name="lastName"
              />
            </div>

            <InputField
              icon={<Mail className="h-5 w-5 text-gray-400" />}
              label="Email"
              name="email"
              type="email"
              id="email"
              required
            />

            <PasswordInput
              label="Password"
              name="password"
              id="password"
              required
            />

            <PasswordInput
              label="Re-enter Password"
              name="rePassword"
              id="rePassword"
              required
            />

            {/* Sign Up Button */}
            <button
              type="submit"
              className="group relative w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Create Account
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Already Have Account */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, icon, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={`block w-full ${
            icon ? "pl-12" : "pl-4"
          } pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white`}
          placeholder={label}
        />
      </div>
    </div>
  );
}

function PasswordInput({ label, name, value, onChange, show, toggle }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-gray-400" />
        </div>
        <input
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
          placeholder={label}
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute inset-y-0 right-0 pr-4 flex items-center"
        >
          {show ? (
            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
}

function Feature({ icon, color, title, desc }) {
  const colorMap = {
    green: "text-green-300 bg-green-500/20",
    blue: "text-blue-300 bg-blue-500/20",
    purple: "text-purple-300 bg-purple-500/20",
  };

  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${colorMap[color]}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}
