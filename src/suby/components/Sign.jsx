import React from 'react'
import { RxCross1 } from "react-icons/rx";
import './Sign.css'
const Sign = () => {
    const handlewidthSign=(width)=>{
        console.log('sing')
        const sign=document.getElementsByClassName('sign')[0];
          sign.style.width=`${width}px`
      }
  return (
    <div>
        <div className="sign">
     <div className="inner">
     <RxCross1 id='scross' onClick={()=>handlewidthSign(0)}/>
     <h1>Login</h1>
     <p>or <a href='#'>create an account</a></p>
      <input type='number' id='number' placeholder='Phone number'></input>
      <button id='lbutton'>LOGIN</button>
        <p id='ltext'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
</div>

</div>
    </div>
  )
}

export default Sign