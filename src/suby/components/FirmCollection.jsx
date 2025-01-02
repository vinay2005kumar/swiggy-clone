import React, { useEffect, useState } from 'react';
import './FirmCollection.css';
import { api_url } from '../pages/api';
import { NavLink } from 'react-router-dom';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import SkeletonCard from './Skelton';
import Cart from './Cart';

const FirmCollection = ({ addToCart, addToBuy, handleshowmore, height }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const a = await fetch(api_url);
    const res = await a.json();
    setData(res.meals);
    setIsLoading(false);
  }

  return (
    <div id='firm'>
      <h5>Restaurants with online food delivery in Vijayawada</h5>
      <div id='list'>
        <section>Filter</section>
        <section>Sort By</section>
        <section>Fast Delivery</section>
        <section>New on Swiggy</section>
        <section>Ratings 4.O+</section>
        <section>Pure Veg</section>
        <section>Offers</section>
        <section>Rs. 3OO-Rs. 6OO</section>
        <section>Less than Rs. 3OO</section>
      </div>
      <div id='maindata'>
        <div className="data" style={{ height: `${height}px` }}>
          {isLoading
            ? Array.from({ length: 32 }).map((_, index) => <SkeletonCard key={index} />)
            : data.map((item) => {
                return (
                  <NavLink to={`/product/${item.strMeal}`} id='link' key={item.idMeal}>
                    <div className='cards'>
                      <div className="imgs">
                        <img src={item.strMealThumb} alt={item.strMeal} id='img' />
                        <div className="dark"></div>
                      </div>
                      <p className='name'>{item.strMeal}</p>
                      <NavLink to='/buy'>
                        <button id='buy' onClick={() => addToBuy(item, 300)}>BUY NOW</button>
                      </NavLink>
                      <NavLink to='/cart'>
                        <button id='button' onClick={() => addToCart(item)}>ADD TO CART</button>
                      </NavLink>
                    </div>
                  </NavLink>
                );
              })}
        </div>
        <button id='show' onClick={handleshowmore}>
          Show More <MdKeyboardDoubleArrowDown id='showicon' />
        </button>
      </div>
    </div>
  );
};

export default FirmCollection;
