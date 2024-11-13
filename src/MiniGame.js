// src/MiniGame.js
import React, { useState, useEffect } from 'react';
import './MiniGame.css';

const images = [
    '/assets/kebaya2.jpg', 
    '/assets/kebaya1.jpg', 
    '/assets/pic1.jpg', 
    '/assets/beach4.jpg',
    '/assets/beach3.jpg',
    '/assets/bubu 2.jpg'
];

function MiniGame() {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);

    // Shuffle images and duplicate them to create pairs
    useEffect(() => {
        const shuffledCards = [...images, ...images]
            .sort(() => Math.random() - 0.5)
            .map((image, index) => ({ id: index, image, isFlipped: false }));

        setCards(shuffledCards);
    }, []);

    const handleFlip = (index) => {
        if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            const [first, second] = newFlipped;
            if (cards[first].image === cards[second].image) {
                setMatched([...matched, first, second]);
            }
            setTimeout(() => setFlipped([]), 1000);
        }
    };

    return (
        <div className="mini-game">
            <h2>Anniversary Matching Game</h2>
            <div className="card-grid">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${flipped.includes(index) || matched.includes(index) ? 'flipped' : ''}`}
                        onClick={() => handleFlip(index)}
                    >
                        <div className="card-front"></div>
                        <div className="card-back" style={{ backgroundImage: `url(${card.image})` }}></div>
                    </div>
                ))}
            </div>
            {matched.length === cards.length && <p className="congrats">Congratulations! You matched all pairs!</p>}
        </div>
    );
}

export default MiniGame;
