/* eslint-disable react/jsx-key */

import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api";
import { Dish } from "../dish/component";

export const Menu = ({ restaurantId }) => {
  const { data: dishes, isFetching } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (!dishes) {
    return;
  }

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {dishes.map(({ id }) => (
          <li>
            <Dish dishId = {id}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
