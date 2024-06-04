import { useUser } from "../../contexts/user/hooks";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";

export const Dish = ({ dish }) => {
  const { user } = useUser();
  const { count, increment, decrement } = useCount();

  if (!dish) {
    return <div>No dish</div>;
  }

  const { name } = dish;

  if (name) {
    return (
      <div>
        <span>{name}</span>
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
