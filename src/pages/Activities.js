import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaLaptopCode, FaTrophy, FaCalendar, FaClock, FaUsers, FaStar } from 'react-icons/fa';

const Activities = () => {
    const [activeTab, setActiveTab] = useState('workshops');
    
    const workshops = [
        {
            id: 1,
            title: 'Advanced React Patterns',
            description: 'Learn advanced React patterns and best practices for building scalable applications',
            instructor: 'Sarah Johnson',
            date: '2024-03-25',
            time: '10:00 AM',
            duration: '2 hours',
            participants: 15,
            maxParticipants: 20,
            level: 'Intermediate',
            tags: ['React', 'Frontend', 'Web Development']
        },
        {
            id: 2,
            title: 'Machine Learning Fundamentals',
            description: 'Introduction to core machine learning concepts and practical implementation',
            instructor: 'Michael Chen',
            date: '2024-03-27',
            time: '2:00 PM',
            duration: '3 hours',
            participants: 12,
            maxParticipants: 15,
            level: 'Beginner',
            tags: ['AI/ML', 'Python', 'Data Science']
        }
    ];

    const games = [
        {
            id: 1,
            title: 'Code Challenge Arena',
            description: 'Compete with others in real-time coding challenges',
            difficulty: 'Medium',
            players: 45,
            rating: 4.8,
            reviews: 128,
            categories: ['Algorithms', 'Data Structures']
        },
        {
            id: 2,
            title: 'Debug Master',
            description: 'Find and fix bugs in increasingly complex scenarios',
            difficulty: 'Hard',
            players: 32,
            rating: 4.9,
            reviews: 94,
            categories: ['Debugging', 'Problem Solving']
        }
    ];

    const achievements = [
        {
            id: 1,
            title: 'Workshop Explorer',
            description: 'Attended 3 different workshops',
            progress: 2,
            total: 3,
            points: 150
        },
        {
            id: 2,
            title: 'Code Warrior',
            description: 'Won 5 coding challenges',
            progress: 3,
            total: 5,
            points: 200
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Activities</h1>
                    <p className="text-xl text-gray-600">
                        Enhance your skills through interactive workshops and challenges
                    </p>
                </div>

                {/* Activity Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
                        <button
                            onClick={() => setActiveTab('workshops')}
                            className={`px-4 py-2 rounded-md ${
                                activeTab === 'workshops'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            <FaLaptopCode className="inline mr-2" />
                            Workshops
                        </button>
                        <button
                            onClick={() => setActiveTab('games')}
                            className={`px-4 py-2 rounded-md ${
                                activeTab === 'games'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            <FaGamepad className="inline mr-2" />
                            Learning Games
                        </button>
                        <button
                            onClick={() => setActiveTab('achievements')}
                            className={`px-4 py-2 rounded-md ${
                                activeTab === 'achievements'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            <FaTrophy className="inline mr-2" />
                            Achievements
                        </button>
                    </div>
                </div>

                {/* Workshop Section */}
                {activeTab === 'workshops' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {workshops.map((workshop) => (
                            <motion.div
                                key={workshop.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{workshop.title}</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                        {workshop.level}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">{workshop.description}</p>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <FaCalendar className="mr-2" />
                                        {workshop.date}
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FaClock className="mr-2" />
                                        {workshop.time}
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FaUsers className="mr-2" />
                                        {workshop.participants}/{workshop.maxParticipants} Participants
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        Duration: {workshop.duration}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {workshop.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Register Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Games Section */}
                {activeTab === 'games' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {games.map((game) => (
                            <motion.div
                                key={game.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{game.title}</h3>
                                    <div className="flex items-center">
                                        <FaStar className="text-yellow-400 mr-1" />
                                        <span className="font-medium">{game.rating}</span>
                                        <span className="text-gray-500 text-sm ml-1">({game.reviews})</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">{game.description}</p>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                                        {game.difficulty}
                                    </span>
                                    <div className="text-gray-600">
                                        <FaUsers className="inline mr-2" />
                                        {game.players} Active Players
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {game.categories.map((category, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                                    Play Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Achievements Section */}
                {activeTab === 'achievements' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {achievements.map((achievement) => (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6"
                            >
                                <div className="flex items-center mb-4">
                                    <FaTrophy className="text-yellow-400 text-2xl mr-3" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                                        <p className="text-gray-600">{achievement.description}</p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                                        <span>Progress</span>
                                        <span>{achievement.progress}/{achievement.total}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-yellow-400 h-2 rounded-full"
                                            style={{
                                                width: `${(achievement.progress / achievement.total) * 100}%`
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Reward</span>
                                    <span className="font-semibold text-blue-600">{achievement.points} Points</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Activities;