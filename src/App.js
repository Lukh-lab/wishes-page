import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Particles from 'react-particles';
import Confetti from 'react-confetti';
import Gallery from './Gallery';
import memory1 from './assets/picus1.jpg';
import memory2 from './assets/pic2.jpg';
import memory3 from './assets/pic3.jpg';
import plushySticker from './assets/bubu1.png';
import './App.css';
import Login from './Login'; // Import Login component
import MiniGame from './MiniGame';

function Home() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // Adjust time if needed
        return () => clearTimeout(timer);
    }, []);

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
        setTimeout(() => setShowConfetti(false), 10000); // Show confetti for 3 seconds
    };
    

    if (loading) {
        return <div className="loading-screen"><div className="spinner"></div></div>;
    }
    
    return (
        <div>
            {/* Full-page Confetti */}
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

            {/* Particles Background */}
            <Particles params={particlesOptions} className="particles" />

            {/* Main Container */}
            <div className="container">
            <audio src="/path/to/your-song.mp3" autoPlay loop />

                <h1 className="header">Happy Birthday💛🌻</h1>
                
                {/* Typing Effect */}
                <div className="wish-text">
                    <p className="typing-text delay-1">Wishing you a day filled with warmth, love, and happiness. May this special occasion bring you joy and delightful surprises!</p>
                    <p className="typing-text delay-2">More wishes are coming your way! Stay tuned...</p>
                </div>

                <div className="sneak-peek">
                    <h2 className="header">Your present</h2>
                    <img src="/path/to/circle-logo.png" alt="Sneak peek of a wrapped present" />
                </div>

                <button className="wish-button" onClick={launchConfetti}>For You</button>

                <img src={plushySticker} className="plushy-sticker" alt="Favorite plushy sticker" />

                <div className="gallery">
                    <img src={ memory1}alt="Memory 1" />
                    <img src={ memory2}alt="Memory 2" />
                    <img src={ memory3}alt="Memory 3" />
                </div>
                <Link to="/gallery">
                    <button className="gallery-button">Go to Gallery</button>
                </Link>
            </div>
        </div>
    );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);

    return (
        <Router>
            <Routes>
                {!isLoggedIn ? (
                    <Route path="*" element={<Login onLogin={handleLogin} />} />
                ) : (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/minigame" element={<MiniGame />} /> {/* Add MiniGame route */}
                    </>
                )}
            </Routes>
            {isLoggedIn && (
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/minigame">Mini Game</Link> {/* Link to MiniGame */}
                </div>
            )}
        </Router>
    );
}

export default App;
