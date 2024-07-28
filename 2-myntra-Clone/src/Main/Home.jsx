import React from 'react'
import HomePage from '../components/HomePage'
import { useSelector } from 'react-redux'

const Home = () => {
  const items= useSelector((store)=>{return store.Items})
  return (
    <main className='Content-class'>
    <div className="items-container">
      {items.map((item)=><HomePage key={item.id} item={item}/>)}
    </div>
</main>
  )
}

export default Home
