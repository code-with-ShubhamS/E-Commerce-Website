import React from 'react'
import laptop from '../images/laptop.png'
import mobile from '../images/mobiles.png'
import headphone from '../images/headphone.png'

const ShowSales = () => {
  return (
    <>
       <section className="">
      <div className="container grid grid-three--cols">
        <div  className="giveWidth div-extra grid grid-two--cols">
          <div className="extra-text">
            <p>new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Show now</a>
          </div>
          <div className="my-img extra-laptop">
           <img src={laptop} alt="" />
          </div>
        </div>

        <div className="giveWidth div-extra grid grid-two--cols">
          <div className="extra-text">
            <p>new year sale</p>
            <h3>40% discount on speakers</h3>
            <a href="#">Show now</a>
          </div>
          <div className="my-img extra-img">
            <img src={headphone} alt="" />
          </div>
        </div>

        <div className="giveWidth div-extra grid grid-two--cols">
          <div className="extra-text">
            <p>new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Show now</a>
          </div>
          <div className="my-img extra-img">
            <img src={mobile} alt="" />
          </div>
        </div>
      </div>
    </section>
    
    </>
   
  )
}

export default ShowSales
