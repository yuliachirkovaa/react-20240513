import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";

export const Dish = ({ dish }) => {
  const { count, increment, decrement, min, max } = useCount();

  if (!dish) {
    return <div>No dish</div>;
  }

  const { name } = dish;

  if (name) {
    return (
      <div>
        <span>{name}</span>
        <div>
          <Button onClick = {decrement} disabled = {count === min}>-</Button>
          {count}
          <Button onClick = {increment} disabled = {count === max}>+</Button>
        </div>
      </div>
    );
  } else {
    return <span>No name</span>;
  }
};
