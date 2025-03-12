import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">Logo</Link>
                    <div className="space-x-4">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <Link to="/about" className="hover:text-gray-300">About</Link>
                    </div>
                </div>
            </nav>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto text-center">
                    © 2024 Your Website. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;