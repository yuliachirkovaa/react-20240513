/* eslint-disable react/jsx-key */

import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ onTabClick, activeId }) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!restaurants) {
    return;
  }

  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <Tab onClick = {() => onTabClick(id)} isActive = {activeId === id}>{name}</Tab>
      ))}
    </div>
  );
};
