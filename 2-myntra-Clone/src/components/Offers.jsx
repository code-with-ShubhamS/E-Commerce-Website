import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomePage from "./HomePage";
import ShowSales from "./ShowSales";
import HeroSection from "./HeroSection";


const Offers = () => {
  const items = useSelector((store) => {
    return store.Items;
  });


  return (
    <>
    <HeroSection></HeroSection>
    <ShowSales />
    
      <main className="Content-class">
        <div className="items-container">
          {items
            .filter((item) => item.discount_percentage > 30)
            .map((item) => (
              <HomePage item={item} key={item.id} />
            ))}
        </div>
      </main>


    </>
  );
};

export default Offers;
