/* eslint-disable react/jsx-key */

import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectRestaurantFromResult } from "../../redux/service/api/selectors";

export const Restaurant = ({ restaurantId }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    skip: !restaurantId,
    selectFromResult: selectRestaurantFromResult(restaurantId),
  });

  if (!restaurant) {
    return;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {!!menu?.length && <Menu restaurantId = {restaurantId}/>}
      {!!reviews?.length && <Reviews restaurantId = {restaurantId}/>}
    </div>
  );
};
