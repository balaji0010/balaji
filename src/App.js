// src/App.js

import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import IntroVideo from './Introvideo';
import ContactCard from './ContactCard';
import Skills from './Skills'; // Import the Skills component

function App() {
    const [isContactCardVisible, setContactCardVisible] = useState(false);
    const [isSkillsVisible, setSkillsVisible] = useState(false);

    const toggleContactCard = () => {
        setContactCardVisible(!isContactCardVisible);
    };

    const toggleSkillsVisibility = () => {
        setSkillsVisible(!isSkillsVisible);
    };

    return (
        <div className="App">
            <Header onSkillsClick={toggleSkillsVisibility} onContactClick={toggleContactCard} />
            <IntroVideo />
            <Skills isVisible={isSkillsVisible} onClose={toggleSkillsVisibility} /> {/* Pass visibility state */}
            <ContactCard isVisible={isContactCardVisible} onClose={toggleContactCard} />
        </div>
    );
}

export default App;
