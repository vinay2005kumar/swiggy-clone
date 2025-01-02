import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { BiBox } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineMyLocation } from "react-icons/md";
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import Search from './Search'
import Login from './Login';
import Other from './Other';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';
import './Topbar.css'
const Topbar = ({length}) => {
  const about=useNavigate()
  const[drop,setdrop]=useState(0)
  const[hover,sethovered]=useState(false) 
  const[sign,setsign]=useState(false)
  const[signhovered,setsignhovered]=useState(false)
  const[innersign,setinnersign]=useState(false)
  const[signup,setsignup]=useState(false)
  const[number,setnumber]=useState(0)
  const handledrop=(width)=>{
    setdrop(width)
      let drop=document.getElementById('drop');
      drop.style.width=`${width}px`
      document.getElementById('input').style.width='360px'
      if(width==0){
        document.getElementById('input').style.display='none'
        document.getElementById('icon').style.display='none'
        document.getElementById('loc').style.display='none'
        document.getElementById('cross').style.display='none'
      }
      else{
        document.getElementById('input').style.display='block'
        
        document.getElementById('icon').style.display='block'
        document.getElementById('loc').style.display='block'
        document.getElementById('cross').style.display='block'
      }
  }
 

  useEffect(()=>{
    handledrop(0)
    setnumber(length)
  },[])
  function handleNavigate(){
    console.log('navigate')
    
  }

  const handleSign=(width)=>{
    console.log('sing')
    const sign=document.getElementsByClassName('sign')[0];
      sign.style.width=`${width}px`
  }
  const handleLogo=(event)=>{
    console.log('logo')
        event.preventDefault();
        location.reload()
  }
  return (
    <> 
    <div  id='drop'>
    <RxCross1 id='cross' onClick={()=>handledrop(0)}/>
      <input type="text" id='input' placeholder='Search for area,street name..'/>
      <div className="location" id='loc'>
      <MdOutlineMyLocation id='icon'/>
      <div className="text">
      <p>Get current location Using GPS</p>
      </div>
      </div>
      </div>
      <div className="sign">
        { signup ?(
          <div className="signup">
             <RxCross1 id='scross' onClick={()=>handleSign(0)}/>
              <div className="innersignup">
                <h1>Sign up</h1>
                <p id='p1'>or<a href='#' onClick={()=>setsignup(false)}>login to your account</a></p>
                <input type='number' className='number' placeholder='Phone number'></input>
                <input type='text' className='number' placeholder='Name'></input>
                <input type='email' className='number' placeholder='Email'></input>
                <button id='lbutton'>CONTINUE</button>
                <p className='ltext'>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
              </div>

          </div>):
        (<div className="inner">
        <RxCross1 id='scross' onClick={()=>handleSign(0)}/>
        <h1>Login</h1>
    <p>or <a href='#' onClick={()=>setsignup(true)}>create an account</a></p>
    <input type='number' className='number' placeholder='Phone number'></input>
    <button id='lbutton'>LOGIN</button>
    <p className='ltext'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
        </div>)
}
  </div>
{
   (signhovered || innersign) &&(    
<div className="dropsign" onMouseEnter={()=>setinnersign(true)} onMouseLeave={()=>setinnersign(false)}>
  <div className="innersign">
 <NavLink to='/profile' className='link'><div className="profile">Profile</div></NavLink>
 <NavLink to='/order' className='link'> <div className="order">Orders</div></NavLink>
  <div className="logout">LogOut</div>
  </div>
  
</div>)
}
    <div className="nav">
      <div className="mtop">
        <div className="miloc">Other</div>
      </div>
      <div className="mprofile">
        <img src="" alt="" />
      </div>
      <div className='top'>
      <NavLink to='/'><div className='logo' ><img src='logo.png'></img>
        </div></NavLink> 
        
        {/* <NavLink to='/other' className='link' activeClassName="active"><div className="dropdown" onClick={()=>handledrop(500)}>Other<RiArrowDropDownLine className='idrop'/></div></NavLink> */}
        <div className="dropdown" onClick={()=>handledrop(500)}>Other<RiArrowDropDownLine className='idrop'/></div>
        <div className="corporate" onClick={handleNavigate}><BiBox className='ibox'/>Swiggy Corporate</div>
      <NavLink to='/search' className='link' activeClassName="active"> <div className="search"><CiSearch className='isearch'/>Search</div></NavLink> 
        <div className="offers"><BiSolidOffer className='ioffer'/>Offers<sup>NEW</sup></div>
        <div className="help"><IoHelpBuoyOutline className='ihelp'/>Help</div>
      {/* <NavLink to='/login' className='link' activeClassName="active"> <div className="signin"><IoPersonOutline className='isign' onClick={()=>handlesign(520)}/>Sign in</div></NavLink>  */}
      
      <div className="signin" onClick={()=>handleSign(520)} onMouseEnter={()=>setsignhovered(true)} onMouseLeave={()=>setsignhovered(false)}><IoPersonOutline className='isign' />Sign in 

      </div>
      <NavLink to='/cart' className='link' activeClassName="active"> <div className="cart" onMouseEnter={()=>sethovered(true)} onMouseLeave={()=>sethovered(false)}><CiShoppingCart className='icart'></CiShoppingCart><div className="cnum">{number}</div>  Cart</div></NavLink>
      {hover && (
            <>
              {length === 0 && (
                <div className="cartcard">
                  <h1>Cart is Empty</h1>
                  <p>Good food is always cooking! Go ahead, order some yummy items from the menu</p>
                </div>
              )}
              {/* {length === 1 && (
                <div className="cartcard2">
                  You have {length} item in your cart
                </div>
              )} */}
              {length > 0 && (
                <div className="cartcard2">
                 <p> You have <h4>{length}</h4> items in your cart</p>
                </div>
              )}
            </>
          )}</div> 
        <div></div>
        {/* <div className="cnumber">{number}</div> */}
      </div>
      {/* <Routes>
          <Route path='/search' element={<Search></Search>}></Route>
          <Route path='/other' element={<Other></Other>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes> */}
    </>
  )
}

export default Topbar