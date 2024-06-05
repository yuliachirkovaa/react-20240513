/* eslint-disable react/jsx-key */

import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) => state.restaurant.entities[restaurantId]);

  if (!restaurant) {
    return <div>No restaurant</div>;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {!!menu?.length && <Menu dishIds = {menu}/>}
      {!!reviews?.length && <Reviews reviewIds = {reviews}/>}
    </div>
  );
};
