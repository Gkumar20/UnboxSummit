import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaCalendar, FaClock, FaStar, FaVideo, FaLinkedin, FaGithub } from 'react-icons/fa';

const Mentorship = () => {
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const mentors = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Senior Full Stack Developer',
            company: 'Google',
            experience: 8,
            expertise: ['React', 'Node.js', 'Cloud Architecture'],
            rating: 4.9,
            reviews: 124,
            image: 'https://randomuser.me/api/portraits/women/1.jpg',
            availableSlots: [
                { id: 1, date: '2024-03-20', time: '10:00 AM' },
                { id: 2, date: '2024-03-21', time: '2:00 PM' },
                { id: 3, date: '2024-03-22', time: '11:00 AM' }
            ]
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'AI/ML Engineer',
            company: 'Microsoft',
            experience: 6,
            expertise: ['Machine Learning', 'Python', 'Data Science'],
            rating: 4.8,
            reviews: 98,
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            availableSlots: [
                { id: 4, date: '2024-03-20', time: '3:00 PM' },
                { id: 5, date: '2024-03-21', time: '11:00 AM' },
                { id: 6, date: '2024-03-22', time: '4:00 PM' }
            ]
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'DevOps Lead',
            company: 'Amazon',
            experience: 7,
            expertise: ['AWS', 'Kubernetes', 'CI/CD'],
            rating: 4.7,
            reviews: 86,
            image: 'https://randomuser.me/api/portraits/women/3.jpg',
            availableSlots: [
                { id: 7, date: '2024-03-20', time: '1:00 PM' },
                { id: 8, date: '2024-03-21', time: '9:00 AM' },
                { id: 9, date: '2024-03-22', time: '2:00 PM' }
            ]
        }
    ];

    const handleMentorSelect = (mentor) => {
        setSelectedMentor(mentor);
        setSelectedSlot(null);
    };

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
    };

    const handleScheduleSession = () => {
        if (selectedMentor && selectedSlot) {
            console.log('Scheduling session with:', selectedMentor.name, 'for:', selectedSlot);
            // Handle scheduling logic
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Connect with Expert Mentors</h1>
                    <p className="text-xl text-gray-600">
                        Choose your mentor and schedule a personalized guidance session
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Mentor List */}
                    <div className="lg:col-span-2 space-y-6">
                        {mentors.map((mentor) => (
                            <motion.div
                                key={mentor.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.02 }}
                                className={`bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 cursor-pointer 
                                    ${selectedMentor?.id === mentor.id ? 'ring-2 ring-blue-500' : ''}`}
                                onClick={() => handleMentorSelect(mentor)}
                            >
                                <div className="flex items-start space-x-4">
                                    <img
                                        src={mentor.image}
                                        alt={mentor.name}
                                        className="w-24 h-24 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                                                <p className="text-gray-600">{mentor.role}</p>
                                                <p className="text-gray-500">{mentor.company}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <FaStar className="text-yellow-400 mr-1" />
                                                <span className="font-medium">{mentor.rating}</span>
                                                <span className="text-gray-500 text-sm ml-1">({mentor.reviews})</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="flex flex-wrap gap-2">
                                                {mentor.expertise.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center space-x-4">
                                            <button className="text-blue-600 hover:text-blue-800">
                                                <FaLinkedin className="text-xl" />
                                            </button>
                                            <button className="text-gray-700 hover:text-gray-900">
                                                <FaGithub className="text-xl" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Booking Panel */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 sticky top-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Schedule Session</h3>
                            
                            {selectedMentor ? (
                                <>
                                    <div className="mb-6">
                                        <h4 className="text-sm font-medium text-gray-700 mb-3">Available Time Slots</h4>
                                        <div className="space-y-3">
                                            {selectedMentor.availableSlots.map((slot) => (
                                                <button
                                                    key={slot.id}
                                                    onClick={() => handleSlotSelect(slot)}
                                                    className={`w-full flex items-center justify-between p-3 rounded-lg border 
                                                        ${selectedSlot?.id === slot.id
                                                            ? 'border-blue-500 bg-blue-50'
                                                            : 'border-gray-200 hover:border-blue-500'
                                                        }`}
                                                >
                                                    <div className="flex items-center">
                                                        <FaCalendar className="text-blue-600 mr-2" />
                                                        <span>{slot.date}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <FaClock className="text-blue-600 mr-2" />
                                                        <span>{slot.time}</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleScheduleSession}
                                        disabled={!selectedSlot}
                                        className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg
                                            ${selectedSlot
                                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        <FaVideo />
                                        Schedule Video Call
                                    </button>
                                </>
                            ) : (
                                <div className="text-center text-gray-500">
                                    <FaUserTie className="text-4xl mx-auto mb-2" />
                                    <p>Select a mentor to schedule a session</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentorship;