import { useState } from "react";
import { useCallback } from "react";

export const useCount = ({ initialValue = 0, min = 0, max = 5 } = {}) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount === max ? currentCount : currentCount + 1);
  }, [max]);

  const decrement = useCallback(() => {
    setCount((currentCount) => currentCount === min ? currentCount : currentCount - 1);
  }, [min]);

  return { count, increment, decrement, min, max };
};
