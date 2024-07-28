import React, { useState } from "react";
import Header from "./Header";
import logo from '../images/myImage.png'

import ReactConfitti from "react-confetti"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BagAction } from "../store/BagSlice";

const SubmitOrder = () => {
    const [showConfit,setConfit]= useState(true)
    setInterval(()=>{
     setConfit(false)
    },5000);

       const dispatch = useDispatch()
    function handleOnClick(){
        dispatch(BagAction.emptyTheBag())
    }
  return (
    <>
    <Header/>  
      {showConfit && <ReactConfitti/>} 
    <div className="submitOrder">
    <div className="thank-you-card ">
      <img className="myImage" src={logo} alt="sdf" />
      <h1>Thank You!</h1>
      <p>Your Detail has been submited sucessfully</p>
      <p>
        We hope you enjoy your new Product and we look forward to serving you
        again in the future!
      </p>
      <Link to="/"><button onClick={handleOnClick} className="myCardBtn">OK</button></Link>
      <p>
        Warm regards,
        <br />
        Your Mintra Team
      </p>
    </div>
    </div>
   
    </>
  );
};

export default SubmitOrder;
