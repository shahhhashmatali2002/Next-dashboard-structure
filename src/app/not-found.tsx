'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-4">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `particleMove ${Math.random() * 5 + 5}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10 text-center border border-white/20">
        <div className="space-y-6">
          {/* 404 Number */}
          <div>
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h4>
            <p className="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
          </div>

          {/* Back to Home Button */}
          <div className="pt-6">
            <button
              onClick={goToHome}
              className="h-12 rounded-lg px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300 ease-in-out"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
