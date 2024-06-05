/* eslint-disable react/jsx-key */

import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ restaurantIds, onTabClick, activeId }) => {
  const restaurants = useSelector((state) => state.restaurant.entities);

  return (
    <div>
      {restaurantIds.map((id) => (
        <Tab onClick = {() => onTabClick(id)} isActive = {activeId === id}>{restaurants[id].name}</Tab>
      ))}
    </div>
  );
};
