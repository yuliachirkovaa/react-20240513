/* eslint-disable react/jsx-key */

import { Button } from "../button/component";

export const Rating = ({ value, onChange, maxRating = 5 }) => {
  return (
    <div>
      <span>Rate this restaurant:</span>
      <div>
        {new Array(maxRating).fill(null).map((_, index) => (
          <Button
            onClick = {() => onChange(index + 1)}
            disabled = {value === index + 1}>{index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};
