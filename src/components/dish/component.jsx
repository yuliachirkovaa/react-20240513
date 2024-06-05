import { useSelector } from "react-redux";
import { useUser } from "../../contexts/user/hooks";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => state.dish.entities[dishId]);
  const { user } = useUser();
  const { count, increment, decrement } = useCount();

  if (!dishId) {
    return <div>No dish</div>;
  }

  if (dish.name) {
    return (
      <div>
        <span>{dish.name}</span>
        {user && (
          <div>
            <Button onClick = {decrement} disabled = {count === 0}>-</Button>
            {count}
            <Button onClick = {increment} disabled = {count === 5}>+</Button>
          </div>
          )
        }
      </div>
    );
  } else {
    return <span>No name</span>;
  }
};
