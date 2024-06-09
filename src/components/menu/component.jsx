/* eslint-disable react/jsx-key */

import { useDispatch, useSelector } from "react-redux";
import { Dish } from "../dish/component";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { useEffect } from "react";

export const Menu = ({ restaurantId }) => {
  const dishIds = useSelector((state) => selectRestaurantDishIds(state, restaurantId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {dishIds.map((id) => (
          <li>
            <Dish dishId = {id}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
