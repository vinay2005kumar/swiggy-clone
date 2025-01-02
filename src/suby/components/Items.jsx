import React, { useRef, useState } from 'react';
import { item } from '../pages/data';
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import './Item.css';

const Items = () => {
  const [data] = useState(item);
  const right = useRef(null);


  const moveRight = () => {
    console.log('moveRight function called');
    right.current.scrollLeft+=100;
    // right.current.scrollBy({
    //   left:100,
    //   behavior:'smooth',
    // });
  };

  const moveLeft = () => {
    console.log('moveLeft function called');
    right.current.scrollLeft-=100;
    // right.current.scrollBy({
    //   left:-100,
    //   behavior:'smooth',
    // });
  };

  return (
    <div className="itemMenu">
      <h1>What's on your mind?</h1>
      <SlArrowLeftCircle className='larrow' onClick={moveLeft}></SlArrowLeftCircle>
      <SlArrowRightCircle className='rarrow' onClick={moveRight} />
      <div className="scroll" ref={right}>
      <div className="items" >
        
        {data.map((img, index) => (
          <div className="item" key={index} >
            <img src={img.item_img} alt={`item-${index}`} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Items;
