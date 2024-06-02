import { useContext } from "react";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";
import { UserContext } from "../../contexts/user";

export const Dish = ({ dish }) => {
  const user = useContext(UserContext);
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
