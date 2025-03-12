import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaLightbulb, 
    FaUsers, 
    FaBrain,
    FaPencilAlt,
    FaHandsHelping
} from 'react-icons/fa';
import { 
    MdDesignServices, 
    MdPsychology,
    MdLightbulb
} from 'react-icons/md';
import AnimatedCard from '../components/AnimatedCard';
import BackgroundPattern from '../components/BackgroundPattern';
import './About.css';

const About = () => {
    const designThinkingPhases = [
        { 
            icon: FaUsers, 
            title: 'Empathize', 
            description: 'Understanding user needs and experiences through deep observation and engagement' 
        },
        { 
            icon: MdPsychology, 
            title: 'Define', 
            description: 'Identifying core problems and framing them from a human-centric perspective' 
        },
        { 
            icon: FaLightbulb, 
            title: 'Ideate', 
            description: 'Generating innovative solutions and creative ideas through collaborative brainstorming' 
        },
        { 
            icon: FaPencilAlt, 
            title: 'Prototype', 
            description: 'Creating quick, experimental solutions to test and refine concepts' 
        }
    ];

    const features = [
        { 
            icon: MdDesignServices, 
            title: 'Design Thinking Workshop', 
            description: 'Learn and apply the principles of human-centered design methodology' 
        },
        { 
            icon: FaHandsHelping, 
            title: 'Collaborative Innovation', 
            description: 'Work in diverse teams to solve real-world challenges' 
        },
        { 
            icon: FaBrain, 
            title: 'Creative Problem Solving', 
            description: 'Develop innovative solutions through design thinking approach' 
        },
        { 
            icon: MdLightbulb, 
            title: 'Innovation Journey', 
            description: 'Transform ideas into impactful solutions through guided process' 
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50 relative overflow-hidden">
            <BackgroundPattern />
            {/* Hero Section */}
            <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
                <motion.div 
                    className="container mx-auto px-4 text-center relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <MdDesignServices className="w-24 h-24 mx-auto text-blue-500 award-icon" />
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r  from-yellow-200 to-pink-600">
                        UnBox Summit 2025
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Unleashing Innovation through Design Thinking - Where Creativity Meets Problem Solving
                    </p>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-20">
                {/* About Section */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r  from-yellow-200 to-pink-600">
                        About UnBox Summit
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="prose prose-lg"
                        >
                            <p className="text-lg text-gray-600 mb-6">
                                UnBox Summit 2025 is Amdocs' premier design thinking hackathon that brings together
                                creative minds to solve real-world challenges through human-centered design approaches.
                            </p>
                            <p className="text-lg text-gray-600">
                                Our mission is to foster innovation by empowering participants with design thinking
                                methodologies, enabling them to create impactful solutions that address genuine human needs.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            {designThinkingPhases.map((phase, index) => (
                                <AnimatedCard
                                    key={index}
                                    delay={index * 0.1}
                                    className="bg-white/80 backdrop-blur-md p-6 rounded-lg text-center shadow-lg border border-blue-100 tech-stack-icon"
                                >
                                    <phase.icon className="w-12 h-12 mx-auto mb-4 text-blue-500 tech-icon" />
                                    <p className="text-gray-700 font-medium">{phase.title}</p>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <AnimatedCard
                            key={index}
                            delay={index * 0.1}
                            className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-lg border border-blue-100 feature-card"
                        >
                            <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </AnimatedCard>
                    ))}
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {[
                        { number: '200+', label: 'Innovators' },
                        { number: '20+', label: 'Design Challenges' },
                        { number: '30+', label: 'Design Mentors' },
                        { number: '50+', label: 'Innovative Solutions' }
                    ].map((stat, index) => (
                        <AnimatedCard
                            key={index}
                            delay={index * 0.1}
                            className="bg-white/80 backdrop-blur-md rounded-lg p-6 text-center shadow-lg border border-blue-100"
                        >
                            <motion.h3
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-4xl font-bold text-blue-500 mb-2 stat-number"
                            >
                                {stat.number}
                            </motion.h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </AnimatedCard>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <a
                            href="#join-program"
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            Join the Innovation Journey <FaLightbulb className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;