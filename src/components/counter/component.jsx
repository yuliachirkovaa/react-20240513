import { useState } from "react";
import { Button } from "../button/component";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)}
    };

  const increment = () => {
    if (count < 5) {
      setCount(count + 1)}
    };

  return (
    <div>
      <Button onClick = {decrement}>-</Button>
      {count}
      <Button onClick = {increment}>+</Button>
    </div>
  );
};
