/* eslint-disable react/jsx-key */

import { Tab } from "../tab/component";

export const RestaurantTabs = ({ restaurants, onTabClick, activeIndex }) => {
  return (
    <div>
      {restaurants.map(({name}, index) => (
        <Tab onClick = {() => onTabClick(index)} isActive = {activeIndex === index}>{name}</Tab>
      ))}
    </div>
  );
};
