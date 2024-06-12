/* eslint-disable react/jsx-key */

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { Restaurant } from "../restaurant/component";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return (
    <div>
      <RestaurantTabs onTabClick = {setActiveRestaurantId} activeId = {activeRestaurantId}/>
      {activeRestaurantId && <Restaurant restaurantId = {activeRestaurantId}/> || <div>No restaurant chosen</div>}
    </div>
  );
};
