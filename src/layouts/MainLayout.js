import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const MainLayout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-800 shadow-md p-4">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <motion.img 
                                src="/DOX.png" 
                                alt="Amdocs Logo" 
                                className="h-8 w-auto"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            />
                            <span className="text-xl font-bold text-yellow-700 group-hover:text-pink-800 transition-colors">UnBox Summit</span>
                        </Link>
                        
                        {/* Mobile menu button */}
                        <button 
                            onClick={toggleMenu}
                            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-4">
                            <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Home</Link>
                            <Link to="/register" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Register</Link>
                            <Link to="/ai-analysis" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">AI Analysis</Link>
                            <Link to="/email-confirmation" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Email</Link>
                            <Link to="/mentorship" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Mentorship</Link>
                            <Link to="/activities" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Activities</Link>
                            <Link to="/market" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Market Place</Link>
                            <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">About</Link>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                            height: isMenuOpen ? 'auto' : 0,
                            opacity: isMenuOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 pt-4">
                            <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Home</Link>
                            <Link to="/register" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Register</Link>
                            <Link to="/ai-analysis" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">AI Analysis</Link>
                            <Link to="/email-confirmation" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Email</Link>
                            <Link to="/mentorship" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Mentorship</Link>
                            <Link to="/activities" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Activities</Link>
                            <Link to="/market" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Market Place</Link>
                            <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">About</Link>
                        </div>
                    </motion.div>
                </div>
            </nav>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-800 shadow-md p-4">
                <div className="container mx-auto text-center flex flex-col items-center">
                    <motion.img 
                        src="/DOX.png" 
                        alt="Amdocs Logo" 
                        className="h-6 w-auto mb-2"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                    <p className="text-gray-600">© 2024 Amdocs. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;