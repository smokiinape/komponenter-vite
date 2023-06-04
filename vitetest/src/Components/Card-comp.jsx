import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div>
      {image && <img src={image} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
