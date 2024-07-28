import React from 'react'
import { Link } from 'react-router-dom';


const BagSummary = ({itemsArr}) => {
  console.log(itemsArr)
  let CONVENIENCE_FEES;
  if(itemsArr.length==0){
    CONVENIENCE_FEES=0;
  }else{
    CONVENIENCE_FEES=99;
  }
  let totalItem = itemsArr.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  itemsArr.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  return (<>
   <div className="bag-summary"> 
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>

    <Link to={itemsArr.length > 0 ? "/Bag/OrderPlaced":""}>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button></Link>
 
  </div>
  </>
  )
}

export default BagSummary
