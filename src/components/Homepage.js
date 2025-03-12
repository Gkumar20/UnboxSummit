import React from 'react';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 flex items-center justify-center">
            <div className="text-center"></div>
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in-down">
                Welcome to Our Website
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in-up opacity-0 transform translate-y-4 animate-delay-300">
                Your journey to excellence starts here.
            </p>
        </div>
    )
};

export default Homepage;