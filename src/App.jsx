import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import IntroVideo from './Introvideo';
import ContactCard from './ContactCard';
import Skills from './Skills';
import Projects from './Projects'; 

function App() {
    const [isContactCardVisible, setContactCardVisible] = useState(false);
    const [isSkillsVisible, setSkillsVisible] = useState(false);
    const [isProjectsVisible, setProjectsVisible] = useState(false);

    const toggleContactCard = () => {
        setContactCardVisible(!isContactCardVisible);
    };

    const toggleSkillsVisibility = () => {
        setSkillsVisible(!isSkillsVisible);
    };

    const toggleProjectsVisibility = () => {
        setProjectsVisible(!isProjectsVisible);
    };

    return (
        <div className="App">
            <Header onSkillsClick={toggleSkillsVisibility} onContactClick={toggleContactCard} onProjectsClick={toggleProjectsVisibility} />
            <IntroVideo />
            <Skills isVisible={isSkillsVisible} onClose={toggleSkillsVisibility} />
            <Projects isVisible={isProjectsVisible} onClose={toggleProjectsVisibility} />
            <ContactCard isVisible={isContactCardVisible} onClose={toggleContactCard} />
        </div>
    );
}

export default App;
