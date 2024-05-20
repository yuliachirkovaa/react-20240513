/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Position } from "../position/component";

export const Menu = ({menu}) => {
  return (
    <ul>
      {menu.map((position) => (
        <li>
          <Position position={position.name}/>
        </li>
      ))}
    </ul>
  );
};
