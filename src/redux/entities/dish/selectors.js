export const selectDishModule = (state) => state.dish;

export const selectDish = (state) => selectDishModule(state).entities;

export const selectDishById = (state, id) => {
  selectDishModule(state).entities[id];
  console.log(state);
};

export const selectDishIds = (state) => selectDishModule(state).ids;
