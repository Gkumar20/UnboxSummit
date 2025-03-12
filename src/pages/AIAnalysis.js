import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaRocket, FaCheckCircle } from 'react-icons/fa';

const AIAnalysis = () => {
    const [analysis, setAnalysis] = useState({
        careerPaths: [
            {
                title: 'Full Stack Developer',
                match: 95,
                skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
                description: 'Based on your profile, you show strong potential for full-stack development.'
            },
            {
                title: 'Data Scientist',
                match: 88,
                skills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
                description: 'Your analytical skills align well with data science roles.'
            },
            {
                title: 'DevOps Engineer',
                match: 82,
                skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Platforms'],
                description: 'Your interest in automation and infrastructure is notable.'
            }
        ],
        skillGaps: [
            { skill: 'Cloud Architecture', priority: 'High' },
            { skill: 'System Design', priority: 'Medium' },
            { skill: 'Security Practices', priority: 'High' }
        ],
        recommendations: [
            'Complete AWS Cloud Practitioner certification',
            'Join open-source projects to gain practical experience',
            'Focus on system design principles through online courses'
        ]
    });

    const [isAnalyzing, setIsAnalyzing] = useState(true);

    useEffect(() => {
        // Simulate AI analysis
        setTimeout(() => {
            setIsAnalyzing(false);
        }, 3000);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="text-blue-600 text-6xl mb-4"
                    >
                        <FaBrain />
                    </motion.div>
                    <h2 className="text-2xl font-semibold text-gray-800">Analyzing Your Profile</h2>
                    <p className="text-gray-600 mt-2">Our AI is processing your information...</p>
                </div>
            ) : (
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Career Analysis</h1>
                        <p className="text-xl text-gray-600">Here's what our AI has discovered about your potential</p>
                    </motion.div>

                    {/* Career Paths */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {analysis.careerPaths.map((path, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{path.title}</h3>
                                    <span className="text-lg font-bold text-blue-600">{path.match}% Match</span>
                                </div>
                                <p className="text-gray-600 mb-4">{path.description}</p>
                                <div className="space-y-2">
                                    <h4 className="font-medium text-gray-700">Key Skills:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {path.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Skill Gaps and Recommendations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6"
                        >
                            <div className="flex items-center mb-6">
                                <FaChartLine className="text-2xl text-blue-600 mr-3" />
                                <h2 className="text-2xl font-semibold text-gray-900">Skill Gaps to Address</h2>
                            </div>
                            <div className="space-y-4">
                                {analysis.skillGaps.map((gap, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="text-gray-800">{gap.skill}</span>
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            gap.priority === 'High' ? 'bg-red-100 text-red-800' :
                                            'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {gap.priority} Priority
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6"
                        >
                            <div className="flex items-center mb-6">
                                <FaRocket className="text-2xl text-blue-600 mr-3" />
                                <h2 className="text-2xl font-semibold text-gray-900">Next Steps</h2>
                            </div>
                            <div className="space-y-4">
                                {analysis.recommendations.map((rec, index) => (
                                    <div key={index} className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mt-1 mr-3" />
                                        <p className="text-gray-800">{rec}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="text-center mt-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            Continue to Email Confirmation
                        </motion.button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAnalysis;