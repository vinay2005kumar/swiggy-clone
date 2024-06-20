import React from 'react';
import './Skelton.css';

const SkeletonCard = () => {
  return (
    <div className='cardss'>
      <div className="skeleton skeleton-img"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-button b1"></div>
      <div className="skeleton skeleton-button b2"></div>
    </div>
  );
};

export default SkeletonCard;
