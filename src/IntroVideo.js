import React from 'react'; 
import video from './video.mp4';
import './IntroVideo.css';

const IntroVideo = () => {
    return (
        <>
            {/* Static video background */}
            <div className="video-background">
                <video autoPlay loop muted className="background-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Hero Section */}
            <div className="hero-section">
                
                {/* First Section: Name and Position */}
                <section className="hero-content">
                    <h1 className="hero-title">BALAJI</h1>
                    <p className="hero-subtitle">UI/UX Designer / Frontend Developer</p>
                </section>
            </div>

            {/* Second Section: Bio Card */}
            <div class="bio-card">
                <div class ="profile-section">
                    <img src="link.png" alt ="" class=""></img>   
                    <div class="name-info">
                        <h2>BALAJI PAZHANISAMI</h2>
                        <p class="title">UI/UX DESIGNER | FRONTEND DEVELOPER | 3D ARTIST</p> 
                </div>
            </div>
            <div class="bio-section">   
                    <h2>About Me</h2>
                    <p>I am a passionate UI/UX Designer and Frontend Developer with expertise in various web technologies and design tools.</p>
                </div>
            </div>
        </>
    );
};

export default IntroVideo;
