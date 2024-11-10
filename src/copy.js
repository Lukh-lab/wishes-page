import React, { useState } from 'react';
import Particles from 'react-particles';
import Confetti from 'react-confetti';
import './App.css';

function App() {
    const [showConfetti, setShowConfetti] = useState(false);

    const particlesOptions = {
        particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            color: { value: "#d4a200" },
            line_linked: {
                enable: true,
                color: "#d4a200",
                opacity: 0.5
            }
        }
    };

    const launchConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); // Show confetti for 3 seconds
    };

    return (
        <div>
            {/* Full-page Confetti */}
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

            {/* Particles Background */}
            <Particles params={particlesOptions} className="particles" />

            {/* Main Container */}
            <div className="container">
                <h1 className="header">Sending Warm Wishes</h1>
                
                {/* Typing Effect */}
                <div className="wish-text">
                    <p className="typing-text delay-1">Wishing you a day filled with warmth, love, and happiness. May this special occasion bring you joy and delightful surprises!</p>
                    <p className="typing-text delay-2">More wishes are coming your way! Stay tuned...</p>
                </div>

                <div className="sneak-peek">
                    <h2 className="header">A Sneak Peek of Your Present</h2>
                    <img src="/path/to/circle-logo.png" alt="Sneak peek of a wrapped present" />
                </div>

                <button className="wish-button" onClick={launchConfetti}>Send a Wish</button>

                <img src="/path/to/plushy-sticker.png" className="plushy-sticker" alt="Favorite plushy sticker" />

                <div className="gallery">
                    <img src="/path/to/CreamRedCircleMonogramLogo.png" alt="Memory 1" />
                    <img src="/path/to/crestlogo-orange.png" alt="Memory 2" />
                    <img src="/path/to/CRM_logo_14.png" alt="Memory 3" />
                </div>
            </div>
        </div>
    );
}

export default App;
