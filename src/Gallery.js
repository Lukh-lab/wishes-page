import React from 'react';
import './Gallery.css';

function Gallery() {
   return (
       <div className="gallery-container">
           <h2>Your Gallery Memories</h2>
           <div className="gallery-images">
               <img src="/path/to/memory1.png" alt="Memory 1" />
               <img src="/path/to/memory2.png" alt="Memory 2" />
               <img src="/path/to/memory3.png" alt="Memory 3" />
           </div>
       </div>
   );
}

export default Gallery;
