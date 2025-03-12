import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';

const Market = () => {
    const solutions = [
        {
            title: "AI-Powered Customer Service",
            description: "Intelligent automation solution that enhances customer experience through predictive analytics and natural language processing.",
            icon: "🤖",
            category: "Innovation"
        },
        {
            title: "Cloud Native Solutions",
            description: "Scalable and resilient cloud-native applications built with microservices architecture.",
            icon: "☁️",
            category: "Technology"
        },
        {
            title: "5G Network Solutions",
            description: "End-to-end 5G network management and optimization solutions for telecom providers.",
            icon: "📡",
            category: "Telecom"
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

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Innovation Market Place</h1>
                    <p className="text-xl text-gray-600">Discover Our Innovative Solutions and Career Opportunities</p>
                </motion.div>

                {/* Solutions Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Innovative Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <AnimatedCard key={index}>
                                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-4xl mb-4">{solution.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
                                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                                        {solution.category}
                                    </span>
                                    <p className="text-gray-600">{solution.description}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </section>

                {/* Careers Section */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Career Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {careers.map((career, index) => (
                            <AnimatedCard key={index}>
                                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-4xl mb-4">{career.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{career.title}</h3>
                                    <p className="text-gray-600 mb-4">{career.description}</p>
                                    <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                                        <strong>Requirements:</strong> {career.requirements}
                                    </div>
                                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                                        Learn More
                                    </button>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Market;