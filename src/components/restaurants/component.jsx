/* eslint-disable react/jsx-key */

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { Restaurant } from "../restaurant/component";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <div>
      <RestaurantTabs onTabClick = {setActiveRestaurantId} activeId = {activeRestaurantId}/>
      <Restaurant restaurantId = {activeRestaurantId}/>
    </div>
  );
};
