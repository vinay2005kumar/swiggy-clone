import React, { useEffect, useRef, useState } from 'react'
import { DiApple } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa6";
import { SiSwiggy } from "react-icons/si";
import './Footer.css'
const Footer = ({fheight}) => {
  
  // const initialheight=useRef(3700)
  const mainref=useRef(null)
//   const handleshowed=()=>{
//     setfheight(prev=>prev+855)
// }
// useEffect(()=>{
//   setfheight(prev => prev + 830);
// },[height])
  useEffect(()=>{
    // setfheight(prev=>prev+830)
    // initialheight.current+=830
    // console.log('footer',fheight)
    // const main=document.getElementById('main');
    // main.style.top=`${fheight}px`
    if(mainref.current){
      mainref.current.style.top=`${fheight}px`
    }
  },[fheight])
  return (
    <div id='main' ref={mainref}>
        <div className="topfooter">
            <div className="text"><h1>For better experience,download
                     the Swiggy app now</h1></div>
            <div className="gpay">
            {/* <FaGooglePlay />
                <p>GET IT ON</p>
                <h1>Google Play</h1> */}
                <img src='gpay.png' alt='hello'></img>
            </div>
            <div className="apple">
            {/* <DiApple />
            <p>Download on the</p>
            <h1>App Store</h1> */}
            <img src='apple.png' alt='hello'></img>
            </div>
        </div>
        <div className="footer">
                <div className="swiggy">
                
                  <h1><SiSwiggy />Swiggy</h1>
                  <p>@ 2O24 Bunl Technologies Pvt.Ltd</p>
                </div>
                <div className="company">
                  <ol><p>Company</p>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Genie</li>
                  </ol>
                </div>
                <div className="contact">
                  <ol><p> Contact us</p> 
                    <li>Help & Support</li>
                    <li>Partner with us</li>
                    <li>Ride with us</li>
                    <p>Legal</p>
                    <li>Terms and Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    <li>Investor Relations</li>
                  </ol>
                  
                </div>
                <div className="deliver">
                  <ol><p>We deliver to:</p> 
                    <li>Bangalore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                  </ol>
                </div>
        </div>
    </div>
  )
}

export default Footer