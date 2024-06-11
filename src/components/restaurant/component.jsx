/* eslint-disable react/jsx-key */

import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
  const { name, menu, reviews } = restaurant;

  if (!restaurant) {
    return;
  }

  return (
    <div>
      <h2>{name}</h2>
      {!!menu?.length && <Menu restaurantId = {restaurantId}/>}
      {!!reviews?.length && <Reviews restaurantId = {restaurantId}/>}
    </div>
  );
};
