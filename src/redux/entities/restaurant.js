import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../constants/normalized-mock";

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
      acc[restaurant.id] = restaurant;
      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
});
