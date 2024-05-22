/* eslint-disable react/jsx-key */

import { useState } from "react";
import { Button } from "../button/component";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  const [rest, setRest] = useState(0);

  if (!restaurants) {
    return <div>Sorry, there are no restaurants here yet</div>;
  }

  return (
    <div>
      <div>
        {restaurants.map((restaurant) => (
          <Button onClick={() => setRest(restaurants.indexOf(restaurant))}>{restaurant.name}</Button>
        ))}
      </div>
      <Restaurant restaurant={restaurants[rest]}/>
    </div>
  );
};
