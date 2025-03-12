import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaDownload, FaCheck, FaCalendar } from 'react-icons/fa';

const EmailConfirmation = () => {
    const [emailSent, setEmailSent] = useState(true);
    const [previewOpen, setPreviewOpen] = useState(false);

    const roadmapPreview = {
        shortTerm: [
            'Complete AWS Cloud Practitioner certification (3 months)',
            'Join 2 open-source projects (1 month)',
            'Complete System Design fundamentals course (2 months)'
        ],
        mediumTerm: [
            'Obtain advanced certifications in chosen field',
            'Build portfolio with 3 major projects',
            'Participate in tech conferences or workshops'
        ],
        longTerm: [
            'Transition to senior role',
            'Mentor junior developers',
            'Contribute to industry standards'
        ]
    };

    const handleDownload = () => {
        // Handle roadmap download logic
        console.log('Downloading roadmap...');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8"
                >
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="text-5xl text-blue-600"
                            >
                                <FaEnvelope />
                            </motion.div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Check Your Inbox!</h1>
                        <p className="text-xl text-gray-600">
                            We've sent your personalized career roadmap to your email address
                        </p>
                    </div>

                    {/* Email Status */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                        <div className="flex items-center">
                            <FaCheck className="text-green-500 text-xl mr-3" />
                            <div>
                                <h3 className="text-green-800 font-medium">Email Sent Successfully</h3>
                                <p className="text-green-600">Your roadmap has been delivered to your inbox</p>
                            </div>
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="mb-8">
                        <button
                            onClick={() => setPreviewOpen(!previewOpen)}
                            className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-blue-900">Preview Your Roadmap</span>
                                <span className="text-blue-500 text-sm">
                                    {previewOpen ? 'Hide Preview' : 'Show Preview'}
                                </span>
                            </div>
                        </button>

                        {previewOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 space-y-6"
                            >
                                {/* Short Term Goals */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                        <FaCalendar className="mr-2 text-blue-600" />
                                        Short Term (0-6 months)
                                    </h3>
                                    <ul className="space-y-2">
                                        {roadmapPreview.shortTerm.map((goal, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full" />
                                                <span className="text-gray-700">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Medium Term Goals */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Medium Term (6-12 months)</h3>
                                    <ul className="space-y-2">
                                        {roadmapPreview.mediumTerm.map((goal, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full" />
                                                <span className="text-gray-700">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Long Term Goals */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Long Term (1-2 years)</h3>
                                    <ul className="space-y-2">
                                        {roadmapPreview.longTerm.map((goal, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full" />
                                                <span className="text-gray-700">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleDownload}
                            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            <FaDownload />
                            Download Roadmap PDF
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                        >
                            Continue to Mentorship
                        </motion.button>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-8 text-center text-gray-600 text-sm">
                        <p>Didn't receive the email? Check your spam folder or</p>
                        <button className="text-blue-600 hover:underline">resend the email</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EmailConfirmation;