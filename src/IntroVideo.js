// src/IntroVideo.js

import React from 'react';
import video from './video.mp4';

const IntroVideo = () => {
    return (
        <div className="video-container">
            <video autoPlay loop muted className="intro-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1>BALAJI</h1>
                <p>UI/UX Designer / Frontend Developer</p>
            </div>
        </div>
    );
};

export default IntroVideo;
