import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import { FiSearch, FiAward, FiBriefcase, FiTrendingUp, FiUsers, FiStar, FiArrowRight } from 'react-icons/fi';
import { IoRocketOutline, IoSparklesSharp } from 'react-icons/io5';
import { BsLightningCharge, BsShieldCheck } from 'react-icons/bs';

const Market = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredCard, setHoveredCard] = useState(null);

    const solutions = [
        {
            title: "AI-Powered Customer Service",
            description: "Intelligent automation solution that enhances customer experience through predictive analytics and NLP.",
            icon: <BsLightningCharge className="w-8 h-8" />,
            category: "Innovation",
            stats: { users: "1.2K+", rating: 4.8 }
        },
        {
            title: "Cloud Native Solutions",
            description: "Scalable and resilient cloud-native applications built with microservices architecture.",
            icon: <IoSparklesSharp className="w-8 h-8" />,
            category: "Technology",
            stats: { users: "850+", rating: 4.6 }
        },
        {
            title: "5G Network Solutions",
            description: "End-to-end 5G network management and optimization solutions for telecom providers.",
            icon: <BsShieldCheck className="w-8 h-8" />,
            category: "Telecom",
            stats: { users: "2.5K+", rating: 4.9 }
        }
    ];

    const careers = [
        {
            title: "Software Architect",
            description: "Design and oversee the implementation of cutting-edge software solutions.",
            requirements: "10+ years experience in software development",
            icon: "👨‍💻"
        },
        {
            title: "AI/ML Engineer",
            description: "Develop machine learning models and AI solutions for business problems.",
            requirements: "Experience with TensorFlow, PyTorch",
            icon: "🧠"
        },
        {
            title: "Cloud Solutions Engineer",
            description: "Build and maintain cloud infrastructure and applications.",
            requirements: "AWS/Azure certification preferred",
            icon: "⚡"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const filterItems = (items) => {
        return items.filter(item => 
            (item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (activeFilter === 'all' || item.category === activeFilter)
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 md:py-12 px-4">
            <div className="container mx-auto">
                {/* Hero Section with Enhanced Animation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16 relative"
                >
                    <motion.div
                        animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="inline-block mb-4 md:mb-6"
                    >
                        <IoRocketOutline className="w-16 h-16 md:w-20 md:h-20 text-indigo-600" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                        Innovation Market Place
                    </h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-600"
                    >
                        Discover Our Innovative Solutions and Career Opportunities
                    </motion.p>
                </motion.div>

                {/* Search and Filter Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 md:mb-12 max-w-2xl mx-auto px-4"
                >
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search solutions and careers..."
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all text-sm md:text-base"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <motion.div 
                        className="flex gap-2 md:gap-4 mt-4 justify-center flex-wrap"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {['all', 'Innovation', 'Technology', 'Telecom'].map((filter) => (
                            <motion.button
                                key={filter}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-3 md:px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                                    activeFilter === filter
                                        ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg'
                                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                }`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Solutions Section */}
                <section className="mb-12 md:mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center"
                    >
                        Innovative Solutions
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                    >
                        {filterItems(solutions).map((solution, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.03,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                                onHoverStart={() => setHoveredCard(index)}
                                onHoverEnd={() => setHoveredCard(null)}
                            >
                                <motion.div
                                    className="absolute top-0 right-0 m-3 md:m-4 flex items-center space-x-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0 }}
                                >
                                    <span className="flex items-center bg-indigo-100 text-indigo-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                                        <FiStar className="mr-1" /> {solution.stats.rating}
                                    </span>
                                </motion.div>
                                <div className="text-indigo-600 mb-3 md:mb-4">
                                    <motion.div
                                        animate={hoveredCard === index ? { 
                                            rotate: 360,
                                            scale: [1, 1.2, 1]
                                        } : {}}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {solution.icon}
                                    </motion.div>
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full mb-3">
                                    {solution.category}
                                </span>
                                <p className="text-sm md:text-base text-gray-600">{solution.description}</p>
                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                                    <span className="flex items-center text-xs md:text-sm text-gray-500">
                                        <FiUsers className="mr-2" /> {solution.stats.users}
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg text-xs md:text-sm hover:from-indigo-700 hover:to-blue-600 transition-all duration-300"
                                    >
                                        Explore <FiArrowRight className="ml-2" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Careers Section */}
                <section>
                    <motion.h2 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl font-bold text-gray-800 mb-8 text-center"
                    >
                        Career Opportunities
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {careers.map((career, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.03,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-indigo-600"
                                    >
                                        {career.icon}
                                    </motion.div>
                                    <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
                                        Active
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{career.title}</h3>
                                <p className="text-gray-600 mb-4">{career.description}</p>
                                <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg mb-4">
                                    <strong>Requirements:</strong> {career.requirements}
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                                >
                                    Apply Now <FiArrowRight className="ml-2" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Market;