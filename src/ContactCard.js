// src/ContactCard.js

import React from 'react';
import './ContactCard.css';

const ContactCard = ({ isVisible, onClose }) => {
    return (
        <div className={`contact-card-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
            <div className="contact-card" onClick={(e) => e.stopPropagation()}>
                <h2>Contact Me</h2>
                <ul>
                    <li>
                        <img src="wp.png" alt="WhatsApp" />
                        <a href="https://wa.me/9597088682" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </li>
                    <li>
                        <img src="gmail.png" alt="Email" />
                        <a href="mailto:uibalaji29@gmail.com">Email</a>
                    </li>
                    <li>
                        <img src="link.png" alt="LinkedIn" />
                        <a href="https://www.linkedin.com/in/balaji-p0001/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <img src="beh.png" alt="Behance" />
                        <a href="https://www.behance.net/balajip29">Behance</a>
                    </li>
                </ul>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ContactCard;
