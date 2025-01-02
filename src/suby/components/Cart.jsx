import React, { useContext, useEffect, useState } from 'react'
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
// import {CartContext} from '/src/suby/components/CartContext.jsx'
import Sign from './Sign'
import './Cart.css'
import FirmCollection from './FirmCollection';
import { LuIndianRupee } from "react-icons/lu";
import Topbar from './Topbar';
import { item } from '../pages/data';
import { RxCross1 } from "react-icons/rx";
const Cart = ({data,deleteItem,length,addToBuy}) => {
  const[cdata,setdata]=useState([])
  const[initprice,setinitprice]=useState(300)
  const[cost,setcost]=useState(initprice)
  const[itemcost,setitemcost]=useState(0)
  // console.log('cart',length)
  // const[number,setnumber]=useState(1)
  // const {cartItems}=useContext(CartContext)
  //  console.log(cartItems)
  // setdata(data)
  const datasize=cdata.length;
  // console.log(datasize)
  useEffect(()=>{
    setdata(data.map(item=>({
        ...item,
        quantity:1,
        cost:item.price||300
    })));
  },[data])
  // useEffect(() => {
  //   // Calculate total cost based on current items in cdata
  //   const totalCost = cdata.item.cost
  //   setitemcost(totalCost);
  //   console.log(itemcost)
  // }, [cdata]);
  const inchandle=(id)=>{
  //   if(number>0 && cdata.map((item)=>item.idMeal===id)){
  //   setnumber(number+1)
  //   setcost(prev=>prev+initprice)
  // }
  // else{
  //   setnumber(1)
  // }
  setdata(prev=>prev.map(item=>item.idMeal==id ? {...item,quantity:item.quantity+1,cost:300*(item.quantity+1)}:item))
  // setitemcost(item.price)
  // console.log(itemcost)
  }
  const dechandle=(id,number)=>{
  //   if(number>1 && cdata.map((item)=>item.idMeal===id)){
  //   setnumber(number-1)
  //   setcost(prev=>prev-initprice)
  // }
  // else{
  //   // let b=document.getElementsByClassName('dec')[0];
  //   // b.disabled
  //   setnumber(1)
  // }
  // let b=document.getElementsByClassName('dec')[0];
  // if(number>1){
  setdata(prev=>prev.map(item=>item.idMeal==id && item.quantity>1?{...item,quantity:item.quantity-1,cost:300*(item.quantity-1)}:item))
  // setitemcost(item.cost)
  // console.log(itemcost)
//    b.disabled=false
//    }
//    else{
// }
}
// const deleteItem=(id)=>{
//   console.log('delete',typeof(id))
//   setdata(prevdata=>prevdata.filter(item=>item.idMeal!==id))
//   console.log(cdata)
// }
  return (
    <>
    
    {datasize==0 ?(
     
    <div id='cmain'>
       <Topbar></Topbar>
       <div className="cartnum">{length}</div>
      <div className="middle">
        <div className="cartimg">
          <img src='cartimg.png' alt='hi'></img>
          <h4>Your cart is empty</h4>
          <p>You can go to home page to view more restaurants</p>
        <NavLink to='/'><button id='cbutton'>GO HOME TO ADD ITEMS</button></NavLink>
        </div>
      </div>
      {/* <p>{item.strMeal}</p> */}
    </div>):(
      <div>
        <div id="ctop"><Topbar></Topbar></div>
        <div className="cartnum">{length}</div>
            <h2 id="carttext">Your Cart Items</h2>
    {
      cdata.map((item)=>{
        return(
          <>
          
          <div className="mainCart">
          <div className="cartitem">
            
            <div className="carttext">
              <p>{item.strMeal}</p>
            </div>
            <div className="cartimg2">
              <img src={item.strMealThumb} alt="hi"></img>
            </div>
            
          </div>
          <div className="count">
                <button className="dec" onClick={()=>dechandle(item.idMeal,item.quantity)}>-</button>
                <div className="ccount">{item.quantity}</div>
                <button className="inc"  onClick={()=>inchandle(item.idMeal)}>+</button>
              </div>
              <div className="cost"><LuIndianRupee id='inr'/>{item.cost}</div>
          <NavLink to='/buy'> <button className='cbuy' onClick={()=>addToBuy(item,item.cost)}>BUY NOW</button></NavLink> 
            <div className="delete"><RxCross1 id='cross' onClick={()=>deleteItem(item.idMeal)}/></div>
            </div>
          </>
        )
      })
    }
    </div>
    )
}
    </>
  )
}

export default Cart