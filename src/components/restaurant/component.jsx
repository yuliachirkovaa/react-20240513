/* eslint-disable react/jsx-key */

import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectRestaurantFromResult } from "../../redux/service/api/selectors";
import { Outlet, useParams } from "react-router-dom";
import { Tab } from "../tab/component";

export const Restaurant = () => {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    skip: !restaurantId,
    selectFromResult: selectRestaurantFromResult(restaurantId),
  });

  if (!restaurant) {
    return;
  }

  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Tab to = "menu">Menu</Tab>
      <Tab to = "reviews">Reviews</Tab>
      <Outlet />
    </div>
  );
};
