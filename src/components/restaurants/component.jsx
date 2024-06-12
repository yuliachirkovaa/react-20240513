/* eslint-disable react/jsx-key */

import { useState } from "react";
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
