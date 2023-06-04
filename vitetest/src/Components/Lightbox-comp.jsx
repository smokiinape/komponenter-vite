import React from 'react';

const Lightbox = ({ images, size, show, onClose }) => {
  if (!show) return null;

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Lightbox;
