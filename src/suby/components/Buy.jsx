import React, { useEffect } from 'react'
import { MdMyLocation } from "react-icons/md";
import './Buy.css'
const Buy = ({item,cost}) => {
  console.log(item)
  console.log(cost)
  useEffect(()=>{
    let a=parseInt(document.getElementById('itemcost').innerHTML)
    let b=parseInt(document.getElementById('partnerfee').innerHTML)
    let c=parseInt(document.getElementById('platform').innerHTML)
    let d=parseInt(document.getElementById('gst').innerHTML)
    let result=a+b+c+d
    let total=document.getElementById('totalcost').innerHTML=result
    console.log(result)
  },[])
  return (
    <div id='bmain'>
      <div className="card1">
      <div className="blocation">
            
              <label htmlFor='check1'><div className="current" >
            <input type="radio" name="radio" id="check1" />
            <MdMyLocation id='ibcurrent'/>use current location(current area location)
            </div></label>
              <p id='or'>or</p>
             
             <div className="prevlocation">
             <label htmlFor="check2"><p id='prevloc'> use previous location</p></label> 
            <input type="radio" name="radio" id="check2" />
            </div>
            <label htmlFor="check3">
            <div className="newlocation">
              <p id='or2'>or</p>
             <input type="radio" name="radio" id="check3" />  
             <p>create new account</p>
              <textarea name="" id="textarea"></textarea>
            </div></label>
      </div>
      <div className="details">
        <h2>Customer Details</h2>
        <hr />
        <div className="titles">
          <p>Name</p>
          <p>Phone Number</p>
          <p>Delivery Address</p>
        </div>
        
        <div className="cols">
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
      </div>
      </div>
      <div className="card2">
        <div className="bitem">
              <div className="bimg">
                <img src={item.strMealThumb} alt='hi'></img>
                <h4 id='bname'>{item.strMeal}</h4>
              </div>
              <div className="bill">
                <p id='tbill'>BILL DETAILS </p>
                <hr />
                <p>Item Total</p>
                <p>Delivery Partner Fee</p>
                <p>Platform Fee</p>
                <p>GST and Restuarant Charges</p>
                <hr />
                <p>TOTAL PAY</p>
                <div className="values">
                  <p id='itemcost'>{cost}</p>
                  <p id='partnerfee'>15</p>
                  <p id='platform'>2</p>
                  <p id='gst'>5</p>
                  <p id='totalcost'>322</p>
                  <hr />
                 
                </div>
              </div>
          <button id='pay'>
            PAY
            </button>
        </div>
      </div>
    </div>
  )
}

export default Buy