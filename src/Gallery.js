// Gallery.js
import React, { useRef, useState, useEffect } from 'react';
import './Gallery.css';
import memory1 from './assets/video1.mp4';
import memory2 from './assets/IMG_0286.MOV';
import memory3 from './assets/IMG_3177.MOV';

function Gallery() {
   const videoRefs = [useRef(null), useRef(null)]; // Reference each video
   const [isOverlayActive, setIsOverlayActive] = useState(false); // Track overlay state
   const [overlayVideo, setOverlayVideo] = useState(null); // Track which video is in overlay

   // Auto-play videos on page load
   useEffect(() => {
      videoRefs.forEach((ref) => {
         if (ref.current) ref.current.play();
      });
   }, []);

   // Handle video click to open overlay
   const handleVideoClick = (index) => {
      setOverlayVideo(index);
      setIsOverlayActive(true);
   };

   // Close overlay
   const closeOverlay = () => {
      setIsOverlayActive(false);
      setOverlayVideo(null);
   };

   return (
      <div className={`gallery-container ${isOverlayActive ? 'blurred' : ''}`}>
         <h2>Your Gallery Memories</h2>
         <div className="gallery-media">
            {/* For video file (memory1) */}
            <div className="video-wrapper" onClick={() => handleVideoClick(0)}>
               <video ref={videoRefs[0]} muted loop className="gallery-video">
                  <source src={memory1} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
               <div className="play-overlay">▶</div>
            </div>

            {/* For image file (memory2) */}
            <div className="video-wrapper" onClick={() => handleVideoClick(1)}>
               <video ref={videoRefs[1]} muted loop className="gallery-video">
                  <source src={memory2} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
               <div className="play-overlay">▶</div>
            </div>

            {/* For another video file (memory3) */}
            <div className="video-wrapper" onClick={() => handleVideoClick(1)}>
               <video ref={videoRefs[2]} muted loop className="gallery-video">
                  <source src={memory3} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
               <div className="play-overlay">▶</div>
            </div>
         </div>

         {/* Full-screen overlay when a video is clicked */}
         {isOverlayActive && (
            <div className="video-overlay" onClick={closeOverlay}>
               <video className="overlay-video" autoPlay muted loop>
                  <source src={overlayVideo === 0 ? memory1 : memory3} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
               <div className="typewriter">Wishing you endless joy and memories!</div>
            </div>
         )}
      </div>
   );
}

export default Gallery;
