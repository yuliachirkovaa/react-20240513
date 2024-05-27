/* eslint-disable react/jsx-key */

import { useState } from "react";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  if (!restaurants) {
    return <div>Sorry, there are no restaurants here yet</div>;
  }

  return (
    <div>
      <RestaurantTabs restaurants = {restaurants} onTabClick = {setActiveRestaurantIndex} activeIndex = {activeRestaurantIndex}/>
      <Restaurant restaurant = {restaurants[activeRestaurantIndex]}/>
    </div>
  );
};
