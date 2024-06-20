/* eslint-disable react/jsx-key */

import { useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api";
import { Tab } from "../tab/component";

export const Menu = () => {
  const { restaurantId } = useParams();
  const { data: dishes, isFetching } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (!dishes) {
    return;
  }

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {dishes.map(({ id, name }) => (
          <li>
            <Tab to = {`/dish/${id}`}>{name}</Tab>
          </li>
        ))}
      </ul>
    </div>
  );
};
