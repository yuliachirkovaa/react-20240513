import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../../contexts/user/hooks";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { Counter } from "../counter/component";
import { selectDishCount } from "../../redux/ui/cart/selectors";
import { decrement, increment } from "../../redux/ui/cart";
import { useCallback } from "react";

export const Dish = ({ dishId }) => {
  if (!dishId) {
    return <div>No dish</div>;
  }

  const dish = useSelector((state) => selectDishById(state, dishId));
  const { user } = useUser();
  const count = useSelector((state) => selectDishCount(state, dishId));
  const dispatch = useDispatch();

  const handleIncrement = useCallback(() =>
    dispatch(increment(dishId)),
  [dispatch, dishId]);

  const handleDecrement = useCallback(() =>
    dispatch(decrement(dishId)),
  [dispatch, dishId]);

  if (dish.name) {
    return (
      <div>
        <span>{dish.name}</span>
        {user && (
          <Counter value = {count} increment = {handleIncrement} decrement = {handleDecrement}/>
          )
        }
      </div>
    );
  } else {
    return <span>No name</span>;
  }
};
