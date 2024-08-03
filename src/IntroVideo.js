// src/IntroVideo.js

import React from 'react';

const IntroVideo = () => {
    return (
        <div className="video-container">
            <video autoPlay loop muted className="intro-video">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1>BALAJI</h1>
                <p>UI/UX Designer</p>
            </div>
        </div>
    );
};

export default IntroVideo;
