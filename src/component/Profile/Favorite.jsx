import React from "react";

import { useSelector } from "react-redux";
import RestaurantCard from "../Restaurant/RestaurantCard";

const Favorite = () => {
  const{auth}=useSelector(store=>store)
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex flex-wrap justify-center">
        {auth.favorites.map((item) => 
          <RestaurantCard item={item}/>
        )}
      </div>
    </div>
  );
};

export default Favorite;
