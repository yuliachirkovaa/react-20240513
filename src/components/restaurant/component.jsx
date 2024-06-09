/* eslint-disable react/jsx-key */

import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({ restaurantId }) => {
  if (!restaurantId) {
    return <div>No restaurant chosen</div>;
  }

  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {!!menu?.length && <Menu restaurantId = {restaurantId}/>}
      {!!reviews?.length && <Reviews reviewIds = {reviews}/>}
    </div>
  );
};
