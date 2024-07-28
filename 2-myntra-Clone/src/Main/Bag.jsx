import React from 'react'
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'
import {useSelector} from 'react-redux'

const Bag = () => {
  const items=useSelector(store=>store.Items)
  const BagData=useSelector(store=>store.Bag)
  // console.log(items,BagData)
  let finalItem=items.filter(item=>{
    const itemIdx=BagData.indexOf(item.id);
    return itemIdx >=0;
  })

  return (
    <div>
    <main className='Content-class'>
      <div className="bag-page">
        <div className="bag-items-container">
        {finalItem.map(item=><BagItem key={item.id} item={item}/>)}
        </div>
       <BagSummary itemsArr={finalItem}/>
      </div>
    </main>
  
    </div>
  )
}

export default Bag
