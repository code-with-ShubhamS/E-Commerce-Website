import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BagAction } from '../store/BagSlice';

const HomePage = ({item}) => {
  const dispatch=useDispatch();
  const BagItems= useSelector(store=>store.Bag)
  const toogleBtn= BagItems.indexOf(item.id) >=0;


  function handleToAdd(){
    dispatch(BagAction.addInBag(item.id))
  }
  function handleToDelete(){
    dispatch(BagAction.deleteFromBag(item.id))
  }

  return (
    <div className="item-container">
    <img className="item-image" src={item.image} alt="item image"/>
    <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
    </div>
    <div className="company-name">{item.company}</div>
    <div className="item-name">{item.item_name}</div>
    <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
    </div>
         {toogleBtn? <button type="button" className="btn-add-bag btn btn-warning" onClick= {handleToDelete}>Delete</button>:       
         <button className="btn-add-bag" onClick= {handleToAdd}>Add to Bag</button>
        }
        
  </div>
  )
}

export default HomePage
