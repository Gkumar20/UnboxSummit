import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaTrophy, FaMedal } from 'react-icons/fa';

const ProgressTracker = ({ currentPoints = 0, milestones = [] }) => {
    const defaultMilestones = [
        { points: 100, icon: FaStar, label: 'Beginner', color: 'from-blue-400 to-blue-600' },
        { points: 500, icon: FaMedal, label: 'Intermediate', color: 'from-purple-400 to-purple-600' },
        { points: 1000, icon: FaTrophy, label: 'Expert', color: 'from-yellow-400 to-yellow-600' }
    ];

    const activeMilestones = milestones.length > 0 ? milestones : defaultMilestones;
    const maxPoints = Math.max(...activeMilestones.map(m => m.points));
    const progress = (currentPoints / maxPoints) * 100;

    return (
        <div className="w-full p-6 bg-white/10 backdrop-blur-md rounded-lg">
            <div className="relative h-4 bg-gray-700 rounded-full mb-8">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute h-full bg-gradient-to-r  from-yellow-200 to-pink-600 rounded-full"
                />
                {activeMilestones.map((milestone, index) => {
                    const position = (milestone.points / maxPoints) * 100;
                    return (
                        <div
                            key={index}
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{ left: `${position}%` }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 + (index * 0.2) }}
                                className={`w-8 h-8 -mt-6 rounded-full flex items-center justify-center bg-gradient-to-r ${milestone.color} ${currentPoints >= milestone.points ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <milestone.icon className="w-4 h-4 text-white" />
                            </motion.div>
                            <p className="text-sm text-gray-600 mt-2 text-center">
                                {milestone.label}
                                <br />
                                {milestone.points} pts
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="text-center">
                <p className="text-2xl font-bold text-white">
                    {currentPoints} / {maxPoints} Points
                </p>
            </div>
        </div>
    );
};

export default ProgressTracker;