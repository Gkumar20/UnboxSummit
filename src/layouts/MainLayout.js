import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <motion.img 
                            src="/DOX.png" 
                            alt="Amdocs Logo" 
                            className="h-8 w-auto"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <span className="text-xl font-bold group-hover:text-blue-400 transition-colors">UnBox Summit</span>
                    </Link>
                    <div className="space-x-4">
                        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
                    </div>
                </div>
            </nav>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto text-center flex flex-col items-center">
                    <motion.img 
                        src="/DOX.png" 
                        alt="Amdocs Logo" 
                        className="h-6 w-auto mb-2"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                    <p>© 2024 Amdocs. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;