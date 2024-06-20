// import { useUser } from "../../contexts/user/hooks";
import { Counter } from "../counter/component";
import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api";
import { selectDishFromResult } from "../../redux/service/api/selectors";
import { useCart } from "../../hooks/use-cart";
import { useParams } from "react-router-dom";

export const Dish = () => {
  const { dishId } = useParams();
  const { data: dish } = useGetDishesByRestaurantIdQuery(undefined, {
    selectFromResult: selectDishFromResult(dishId),
  });

  // const { user } = useUser();
  const { count, handleIncrement, handleDecrement } = useCart(dishId);

  if (!dish) {
    return;
  }

  const { name, price, ingredients } = dish;

  return (
    <div>
      <h3>{name}</h3>
      <div>{`Price: ${price}$`}</div>
      <div>Ingredients:</div>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <Counter value = {count} increment = {handleIncrement} decrement = {handleDecrement}/>
    </div>
  );
};
