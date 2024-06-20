import React, { useEffect } from 'react';
import Topbar from './Topbar';
import './Search.css';
import { IoIosSearch } from "react-icons/io";
import { api_url } from '../pages/api';

const Search = ({length}) => {
  const Display=async()=>{
    const data=await fetch(api_url)
    const res=await data.json()
    console.log(res)
  }
  useEffect(()=>{
    Display()
  })
  return (
    <div>
      <Topbar />
      <div className="snum">{length}</div>
      <div className="container">
       <div><input type='text' placeholder='Search for restaurants and food'></input><IoIosSearch id='isearch'/></div>
        <div className="div">
        
          <h1>Popular Cuisines
            <div className="items">
              <img src='search.png' alt='hello'></img>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Search;
