// src/App.js

import React from 'react';
import './App.css';
import IntroVideo from './Introvideo'
import Header from './Header';

function App() {
    return (
        <div className="App">
            <Header />
            <IntroVideo />
            {/* Add other components here for resume, projects, skills, contact */}
        </div>
    );
}

export default App;
