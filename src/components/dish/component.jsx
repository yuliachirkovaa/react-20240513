import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../../contexts/user/hooks";
import { Counter } from "../counter/component";
import { selectDishCount } from "../../redux/ui/cart/selectors";
import { decrement, increment } from "../../redux/ui/cart";
import { useCallback } from "react";
import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api";
import { selectDishFromResult } from "../../redux/service/api/selectors";

export const Dish = ({ dishId }) => {
  const { data: dish } = useGetDishesByRestaurantIdQuery(undefined, {
    selectFromResult: selectDishFromResult(dishId),
  });

  const { user } = useUser();
  const count = useSelector((state) => selectDishCount(state, dishId));
  const dispatch = useDispatch();

  const handleIncrement = useCallback(() =>
    dispatch(increment(dishId)),
  [dispatch, dishId]);

  const handleDecrement = useCallback(() =>
    dispatch(decrement(dishId)),
  [dispatch, dishId]);

  if (!dish) {
    return;
  }

  const { name } = dish;

  return (
    <div>
      <span>{name}</span>
      {user && (
        <Counter value = {count} increment = {handleIncrement} decrement = {handleDecrement}/>
        )
      }
    </div>
  );
};
