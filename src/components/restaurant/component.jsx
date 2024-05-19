/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({restaurant}) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div>
        <h3>Menu</h3>
        <Menu menu={restaurant.menu}/>
      </div>
      <div>
        <h3>Reviews</h3>
        <Reviews reviews={restaurant.reviews}/>
      </div>
    </div>
  );
};
