// src/App.js

import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import IntroVideo from './Introvideo';
import ContactCard from './ContactCard';

function App() {
    const [isContactCardVisible, setContactCardVisible] = useState(false);

    const toggleContactCard = () => {
        setContactCardVisible(!isContactCardVisible);
    };

    return (
        <div className="App">
            <Header onContactClick={toggleContactCard} />
            <IntroVideo />
            <ContactCard isVisible={isContactCardVisible} onClose={toggleContactCard} />
        </div>
    );
}

export default App;
