import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Topbar from './Topbar';
import { NavLink } from 'react-router-dom';
import './ProductMenu.css'
// import {CartContext} from '/src/suby/components/CartContext'
import { name_api } from '../pages/api';
import { item } from '../pages/data';
const ProductMenu = ({addToCart,length,addToBuy}) => {
  const{name}=useParams();
  const[pdata,setdata]=useState([])
 
  console.log('product',length)
  const handleapi=async()=>{
    const url=`${name_api}${name}`
    const data=await fetch(url)
    const res=await data.json()
    setdata(res.meals)
  }
  useEffect(()=>{
        handleapi()
  },[name])
  const extractIngredients=(meal)=>{
    const ingredients=[]
    let i=1
    while(meal[`strIngredient${i}`]!==""){
          ingredients.push(meal[`strIngredient${i}`])
          i++
    }
    return ingredients
  }
  // const addToCart=(item)=>{
  //   console.log('item')
  //   // console.log(item)
  // }
  return (
    <div id='product'>
      <div className="ptop"><Topbar ></Topbar></div>
      <div className="pnum">{length}</div>
      <div className="pcards">
    <div className="pcard">
      {  pdata.map((item)=>{
            return(
              <div className="pitem" key={item.idMeal}>
              <div className="pimg" >
                <img src={item.strMealThumb} alt="hi" />
                <h4 id='ph1'>{item.strMeal}</h4>
              </div>
              <div className="pcontent">
                <h4 id='ph'>Ingredients</h4>
                {/* <p>{item.strIngredient1}</p>
                <p>{item.strIngredient2}</p>
                <p>{item.strIngredient3}</p>
                <p>{item.strIngredient4}</p>
                <p>{item.strIngredient5}</p> */}
                 { extractIngredients(item).map((ingredient,index)=>{
                  return(
                    <>
                     <p id='p'>{ingredient} ,</p>
                   </>
                  )
                 })
                }
                <div className="tag">
                  <p>(Tags:: {item.strTags})</p>
                </div>
             
                <p></p>
              </div>
              <div className="making">
              <a href={item.strYoutube}>Click here</a>
                  <p id='ptext'>(to watch how to make)</p>
                  
                </div>
            <NavLink to='/buy'><button id='pbuy' onClick={()=>addToBuy(item)}>BUY NOW</button></NavLink>  
              <NavLink to='/cart'><button id='pbutton' onClick={()=>addToCart(item)}>ADD TO CART</button></NavLink>
              </div>
            )
        })}
    </div>
    </div>
    </div>
    
  )
}

export default ProductMenu