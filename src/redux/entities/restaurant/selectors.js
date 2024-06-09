export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurant = (state) => selectRestaurantModule(state).entities;

export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantDishIds = (state, id) => selectRestaurantById(state, id)?.menu;
