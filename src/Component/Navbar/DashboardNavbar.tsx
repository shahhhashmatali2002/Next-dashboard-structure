"use client";
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import ProfileDropdown from '@/Component/Dropdown/ProfileDropdown'

const DashboardNavbar = (props: { showSidebar: boolean, toggleSidebar: () => void, toggleDropdown: () => void, dropdownVisible: boolean }) => {
  const router = useRouter();
  
  // Dummy user data
  const userData = {
    userName: "JohnDoe",
    UserId: "12345",
  };

  const logoutUser = () => {
    console.log("User logged out");
  };

  return (
    <nav className="sticky top-0 z-20 bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={props.toggleSidebar}
              className="text-white hover:bg-white/10 p-2 rounded-lg lg:hidden transition-colors"
            >
              {props.showSidebar ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Custom Heading for E-Commerce Scraper */}
            <div className="flex-shrink-0 hover:scale-105 transition-transform">
              <h1 className="text-white text-xl font-semibold">E-Commerce Scraper & Analyzer</h1>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">

            {/* Profile Section */}
            <div className="relative">
              <button 
                onClick={props.toggleDropdown}
                className="flex items-center space-x-3 group"
              >
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-medium text-blue-600">
                    {userData.userName[0]}
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-left hidden lg:block">
                  <p className="text-sm font-medium text-white">{userData.userName}</p>
                  <p className="text-xs font-light text-white/80">User</p>
                </div>
              </button>

              {/* Profile Dropdown */}
              <ProfileDropdown 
                right="right-0" 
                toggleDropdown={props.toggleDropdown} 
                userData={userData} 
                dropdownVisible={props.dropdownVisible} 
                logoutUser={logoutUser} 
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
