// LandingPage.jsx
import React, { useEffect, useState } from 'react';
import Topbar from '../components/Topbar';
import Items from '../components/Items';
import Chains from '../components/Chains';
import FirmCollection from '../components/FirmCollection';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Login from '../components/Login';
import Other from '../components/Other';
import Cart from '../components/Cart';
import './LandingPage.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductMenu from '../components/ProductMenu';
import Buy from '../components/Buy';
import Profile from '../components/Profile';
import Order from '../components/Order';
const LandingPage = () => {
  const[cart,setcart]=useState([])
  const[buy,setbuy]=useState({})
  const[height,setheight]=useState(2550)
  const[fheight,setfheight]=useState(3700)
  const[itemcost2,setitemcost2]=useState(300)
  // const[cnumber,setnumber]=useState()
  const[cartnumber,setcartnumber]=useState(0)
  // const[height,setheight]=useState(840)
  const addToCart=(item)=>{
    // console.log('cart item:')
    console.log(item)
   
    // setcart((prevCart)=>{
    //   const newCart=[...prevCart,item]
    //   return newCart
    // })
    setcart((prevCart) => {
      const newCart = [...prevCart, item];
      return newCart.filter((item, index) => {
          return newCart.findIndex((el) => el.idMeal === item.idMeal) === index;
      });
  }); 
  // const[length,setlen]=useState(cart.length);
  // console.log(length)
  }
  const deleteItem=(id)=>{
    console.log('delete',typeof(id))
    setcart(prevdata=>prevdata.filter(item=>item.idMeal!==id))
    // console.log(cart)
  }
  const addToBuy=(item,itemcost)=>{
    setitemcost2(itemcost)
    // console.log('buy',item)
    setbuy(item)
  }
  const handleshowmore=()=>{
    if(height<8340){
      setheight(prev=>prev+965)
      setfheight(prev=>prev+930)
  
    
    // console.log('handle showmore heigt fheight',height,fheight)
    }
    // console.log('land',height)
  }
  // useEffect(()=>{
  //   console.log(cart)
  // },[height])
  return (
    <>
  
    
      <div>
        <Routes>
          <Route path="/" element={
            <>
            <Topbar length={cart.length}/>
              <Items />
              <div className='line'></div>
              <Chains addToCart={addToCart}/>
              <div className='line2'></div>
              <FirmCollection addToCart={addToCart} addToBuy={addToBuy} handleshowmore={handleshowmore} height={height}/>
              <div className='line3'></div>
              <Footer fheight={fheight}/>
            </>
          } />
          <Route path="/search" element={<Search  length={cart.length}/>} />
          <Route path="/other" element={<Other />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart data={cart} deleteItem={deleteItem} length={cart.length} addToBuy={addToBuy}/>} />
          <Route path='/product/:name' element={<ProductMenu addToCart={addToCart} length={cart.length} addToBuy={addToBuy}></ProductMenu>}></Route>
          <Route path='/buy' element={<Buy item={buy} cost={itemcost2}></Buy>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
        </Routes>
        {/* <ProductMenu addToCart={addToCart}></ProductMenu> */}
      </div>
   
    </>
  );
  
}

export default LandingPage;
