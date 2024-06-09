/* eslint-disable react/jsx-key */

import { useSelector } from "react-redux";
import { Tab } from "../tab/component";
import { selectRestaurant, selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabs = ({ onTabClick, activeId }) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const restaurants = useSelector(selectRestaurant);

  if (!restaurantIds || !restaurants) {
    return;
  }

  return (
    <div>
      {restaurantIds.map((id) => (
        <Tab onClick = {() => onTabClick(id)} isActive = {activeId === id}>{restaurants[id].name}</Tab>
      ))}
    </div>
  );
};
