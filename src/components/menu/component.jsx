/* eslint-disable react/jsx-key */

import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
  if (!menu) {
    return <div>No menu</div>;
  }

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((dish) => (
          <li>
            <Dish dish = {dish}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
