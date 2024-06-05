/* eslint-disable react/jsx-key */

import { useState } from "react";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { Restaurant } from "../restaurant/component";
import { useSelector } from "react-redux";

export const Restaurants = () => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);
  const [activeRestaurantId, setActiveRestaurantId] = useState("a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2");

  return (
    <div>
      <RestaurantTabs restaurantIds = {restaurantIds} onTabClick = {setActiveRestaurantId} activeId = {activeRestaurantId}/>
      <Restaurant restaurantId = {activeRestaurantId}/>
    </div>
  );
};
