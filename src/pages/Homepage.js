import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaRobot, FaEnvelope, FaUsers, FaGamepad, FaTrophy, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import ProcessNode from '../components/ProcessNode';
import AnimatedCard from '../components/AnimatedCard';
import ProgressTracker from '../components/ProgressTracker';
import './Homepage.css';

const Homepage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const processSteps = [
        { icon: FaUserGraduate, title: 'Registration', description: 'Start your journey by creating your profile' },
        { icon: FaRobot, title: 'AI Career Path', description: 'Get personalized career recommendations' },
        { icon: FaEnvelope, title: 'Email Confirmation', description: 'Receive your customized career roadmap' },
        { icon: FaUsers, title: 'Mentor Connection', description: 'Connect with industry experts' },
        { icon: FaGamepad, title: 'Workshops & Games', description: 'Learn through interactive sessions' },
        { icon: FaTrophy, title: 'Milestone Points', description: 'Track your progress and achievements' }
    ];

    const workshops = [
        { title: 'AI & Machine Learning Basics', date: 'March 20, 2024', spots: 20 },
        { title: 'Web Development Bootcamp', date: 'March 25, 2024', spots: 15 },
        { title: 'Cloud Computing Workshop', date: 'April 1, 2024', spots: 25 },
        { title: 'Data Science Fundamentals', date: 'April 5, 2024', spots: 18 }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const nodeTypes = {
        processNode: ProcessNode,
    };

    const flowNodes = [
        { id: '1', type: 'processNode', position: { x: 0, y: 100 }, data: { label: 'Registration' } },
        { id: '2', type: 'processNode', position: { x: 200, y: 100 }, data: { label: 'AI Analysis' } },
        { id: '3', type: 'processNode', position: { x: 400, y: 100 }, data: { label: 'Email' } },
        { id: '4', type: 'processNode', position: { x: 600, y: 100 }, data: { label: 'Mentorship' } },
        { id: '5', type: 'processNode', position: { x: 800, y: 100 }, data: { label: 'Activities' } },
        { id: '6', type: 'processNode', position: { x: 1000, y: 100 }, data: { label: 'Achievements' } },
    ];

    const edges = [
        { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#3b82f6' } },
        { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#3b82f6' } },
        { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#3b82f6' } },
        { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#3b82f6' } },
        { id: 'e5-6', source: '5', target: '6', animated: true, style: { stroke: '#3b82f6' } },
    ];

    const achievements = [
        { title: 'Complete Profile', points: 50, description: 'Fill out all profile sections' },
        { title: 'First Workshop', points: 100, description: 'Attend your first workshop' },
        { title: 'Connect with Mentor', points: 150, description: 'Schedule first mentor session' },
        { title: 'Project Completion', points: 200, description: 'Complete your first project' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
                <motion.div 
                    className="text-center z-10 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Discover Your Path
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
                        Let AI guide you to your perfect career path with personalized mentorship and hands-on learning
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Start Your Journey
                    </motion.button>
                </motion.div>
            </div>

            {/* Process Steps */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Your Path to Success
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <AnimatedCard key={index} delay={index * 0.1} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                            <step.icon className="w-12 h-12 mb-4 text-blue-400" />
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                        </AnimatedCard>
                    ))}
                </div>
            </div>

            {/* Upcoming Workshops Carousel */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Upcoming Workshops
                </h2>
                <Slider {...sliderSettings} className="workshop-slider">
                    {workshops.map((workshop, index) => (
                        <div key={index} className="px-4">
                            <AnimatedCard className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white h-full">
                                <div className="flex flex-col h-full">
                                    <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
                                    <p className="text-gray-300 mb-4">Date: {workshop.date}</p>
                                    <p className="text-gray-300 mb-4">Available Spots: {workshop.spots}</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
                                    >
                                        Register Now <FaArrowRight />
                                    </motion.button>
                                </div>
                            </AnimatedCard>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Process Flow Diagram */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Your Journey Map
                </h2>
                <div className="h-[400px] bg-gray-800/50 rounded-lg p-4 shadow-xl" data-aos="fade-up">
                    <ReactFlow
                        nodes={flowNodes}
                        edges={edges}
                        nodeTypes={nodeTypes}
                        fitView
                        className="bg-gray-900/50"
                        defaultViewport={{ x: 0, y: 0, zoom: 1.5 }}
                    >
                        <Background color="#3b82f6" gap={16} size={1} />
                        <Controls />
                    </ReactFlow>
                </div>
            </div>

            {/* Achievements & Milestones Section */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 gradient-text">
                    Your Progress Journey
                </h2>
                
                {/* Progress Tracker */}
                <div className="mb-16">
                    <ProgressTracker currentPoints={250} />
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {achievements.map((achievement, index) => (
                        <AnimatedCard 
                            key={index} 
                            delay={index * 0.1} 
                            className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-lg font-semibold">{achievement.title}</h3>
                                <span className="bg-blue-500 px-2 py-1 rounded-full text-sm">
                                    {achievement.points} pts
                                </span>
                            </div>
                            <p className="text-gray-300 text-sm">{achievement.description}</p>
                            <div className="relative w-full h-1 bg-gray-700 rounded-full mt-4 overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '60%' }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </AnimatedCard>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="container mx-auto px-4 py-20">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of successful professionals who found their dream career path through our platform
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Get Started Now
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;