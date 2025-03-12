import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <div className="prose lg:prose-xl">
                <p className="mb-4">
                    Welcome to our platform. We are dedicated to providing the best experience for our users.
                </p>
                <p className="mb-4">
                    Our mission is to create innovative solutions that help people achieve their goals.
                </p>
            </div>
        </div>
    );
};

export default About;