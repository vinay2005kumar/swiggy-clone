import React, { useEffect, useState } from 'react'
import { api_url } from '../pages/api'
import './Chains.css';
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import ChainSkeleton from './ChainSkeleton';
const Chains = ({addToCart}) => {
const[vendorData,setvendorData]=useState([])
const[scrollPosition,setscrollPosition]=useState(0)
const[isloading,setisloading]=useState(true)
const vendorHandler=async()=>{
  try {
    // console.log('hello')
    const response=await fetch(api_url)
    const newdata=await response.json()
    console.log('Data from API:', newdata); 
    setvendorData(newdata.meals || []);
    setisloading(false)
  } catch (error) {
    
  }
}
useEffect(()=>{
  // console.log('hello')
  vendorHandler()
},[])
const scrollHandler=(direction)=>{
  // console.log('hello')
  const move=document.getElementById('move');
const amount=500;
if(direction==='left'){
  move.scrollTo(
    {
      left:move.scrollLeft -amount,
      behavior:'smooth'
    }
  )
}
else if(direction==='right'){
  move.scrollTo(
    {
      left:move.scrollLeft +amount,
      behavior:'smooth'
    }
  )
}
}
  return (
    <div className="chain">
      <h5 id='text'>Top restaurant chains in Vijayawada</h5> 
   
      <SlArrowLeftCircle id='left' onClick={()=>{
        scrollHandler('left')
      }}/>
      <SlArrowRightCircle id='right'  onClick={()=>{
        scrollHandler('right')
      }} />
      
    <div className='card' id='move' onScroll={(e)=>setscrollPosition(e.target.scrollPosition)}>
     {isloading?Array.from({length:8},(_,index)=><ChainSkeleton key={index}></ChainSkeleton>):
      (
        vendorData.map((item)=>{
          return(
        <NavLink to={`/product/${item.strMeal}`}>
           <div className='ccards'>
            <div className="imgs" >
              <img src={item.strMealThumb} alt='hello' id='img'>
              </img>
              <div className="dark"></div>
                </div>
            <p id='name'>{item.strMeal}</p>
           
          </div>
        </NavLink>
        )
        }
      ))
    }
    </div>
    </div>
  )
}
export default Chains;