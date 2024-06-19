/* eslint-disable react/jsx-key */

import { RestaurantTabs } from "../restaurant-tabs/component";
import { Outlet } from "react-router-dom";

export const Restaurants = () => {
  return (
    <div>
      <RestaurantTabs />
      <Outlet />
    </div>
  );
};
