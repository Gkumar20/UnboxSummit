import React from 'react';

const BackgroundPattern = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute w-96 h-96 bottom-48 left-48 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
    );
};

export default BackgroundPattern;