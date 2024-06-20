import { useDispatch, useSelector } from "react-redux";
import { selectDishCount } from "../redux/ui/cart/selectors";
import { useCallback } from "react";
import { decrement, increment } from "../redux/ui/cart";

export const useCart = (id) => {
  const count = useSelector((state) => selectDishCount(state, id));
  const dispatch = useDispatch();

  const handleIncrement = useCallback(() =>
    dispatch(increment(id)),
  [dispatch, id]);

  const handleDecrement = useCallback(() =>
    dispatch(decrement(id)),
  [dispatch, id]);

  return { count, handleIncrement, handleDecrement };
};
