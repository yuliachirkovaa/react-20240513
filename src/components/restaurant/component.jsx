/* eslint-disable react/jsx-key */

import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return <div>No restaurant</div>;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {!!menu?.length && <Menu menu = {menu}/>}
      {!!reviews?.length && <Reviews reviews = {reviews}/>}
    </div>
  );
};
