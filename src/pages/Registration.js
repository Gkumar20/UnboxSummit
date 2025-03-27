import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Registration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        education: '',
        currentRole: '',
        interests: [],
        experience: ''
    });

    const [step, setStep] = useState(1);

    const interestOptions = [
        'Web Development', 'AI/ML', 'Data Science', 'Cloud Computing',
        'Cybersecurity', 'DevOps', 'Mobile Development', 'UI/UX Design'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleInterestToggle = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50 py-8 md:py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-4 md:p-8"
                >
                    <div className="text-center mb-6 md:mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Start Your Journey</h2>
                        <p className="text-sm md:text-base text-gray-600">Create your profile to get personalized career guidance</p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex justify-between mb-6 md:mb-8 px-2">
                        {[1, 2, 3].map((stepNum) => (
                            <div
                                key={stepNum}
                                className={`w-1/3 text-center relative ${
                                    step >= stepNum ? 'text-blue-600' : 'text-gray-400'
                                }`}
                            >
                                <div className={`w-6 h-6 md:w-8 md:h-8 mx-auto rounded-full flex items-center justify-center text-sm md:text-base ${
                                    step >= stepNum ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                }`}>
                                    {stepNum}
                                </div>
                                <div className="mt-1 md:mt-2 text-xs md:text-sm">
                                    {stepNum === 1 ? 'Basic Info' : stepNum === 2 ? 'Professional' : 'Interests'}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {step === 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-4 md:space-y-6"
                            >
                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                        <FaUser className="mr-2" /> Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                        <FaEnvelope className="mr-2" /> Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                        <FaLock className="mr-2" /> Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-4 md:space-y-6"
                            >
                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                        <FaGraduationCap className="mr-2" /> Education Level
                                    </label>
                                    <select
                                        name="education"
                                        value={formData.education}
                                        onChange={handleInputChange}
                                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select Education Level</option>
                                        <option value="high_school">High School</option>
                                        <option value="bachelors">Bachelor's Degree</option>
                                        <option value="masters">Master's Degree</option>
                                        <option value="phd">Ph.D.</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                        <FaBriefcase className="mr-2" /> Current Role
                                    </label>
                                    <input
                                        type="text"
                                        name="currentRole"
                                        value={formData.currentRole}
                                        onChange={handleInputChange}
                                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                        <FaBriefcase className="mr-2" /> Years of Experience
                                    </label>
                                    <input
                                        type="number"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        min="0"
                                        required
                                    />
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                                        Select Your Interests
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                        {interestOptions.map((interest) => (
                                            <button
                                                key={interest}
                                                type="button"
                                                onClick={() => handleInterestToggle(interest)}
                                                className={`p-3 md:p-4 rounded-lg border text-sm md:text-base ${
                                                    formData.interests.includes(interest)
                                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                        : 'border-gray-200 hover:border-blue-500'
                                                } transition-all duration-200`}
                                            >
                                                {interest}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <div className="flex justify-between mt-6 md:mt-8">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="px-4 md:px-6 py-2 border border-gray-300 rounded-lg text-sm md:text-base text-gray-700 hover:bg-gray-50"
                                >
                                    Previous
                                </button>
                            )}
                            {step < 3 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg text-sm md:text-base hover:bg-blue-700 ml-auto"
                                >
                                    Next
                                </button>
                            ) : (
                                <Link
                                    to="/ai-analysis"
                                    className="px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg text-sm md:text-base hover:bg-blue-700 ml-auto"
                                >
                                    Complete Registration
                                </Link>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Registration;