import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  if (!dish) {
    return <div>No dish</div>;
  }

  const {name} = dish;

  if (name) {
    return (
      <div>
        <span>{name}</span>
        <Counter />
      </div>
    );
  } else {
    return <span>No name</span>;
  }
};
