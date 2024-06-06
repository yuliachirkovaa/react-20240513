/* eslint-disable react/jsx-key */

import { Dish } from "../dish/component";

export const Menu = ({ dishIds }) => {
  if (!dishIds) {
    return <div>No menu</div>;
  }

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {dishIds.map((id) => (
          <li>
            <Dish dishId = {id}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
