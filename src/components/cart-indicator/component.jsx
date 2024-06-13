import { useDispatch, useSelector } from "react-redux";
import { selectCartCount } from "../../redux/ui/cart/selectors";
import { useUser } from "../../contexts/user/hooks";
import { Button } from "../button/component";
import { useCallback } from "react";
import { clear } from "../../redux/ui/cart";

export const CartIndicator = () => {
  const count = useSelector(selectCartCount);
  const { user } = useUser();
  const dispatch = useDispatch();

  const handleClear = useCallback(() =>
    dispatch(clear()),
  [dispatch]);

  if (user) {
    return (
      <div>
        <span>Cart: {count}</span>
        {count > 0 && <Button onClick = {handleClear}>Clear</Button>}
      </div>
    );
  }
};
