import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../constants/normalized-mock";

export const ReviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: normalizedReviews.reduce((acc, review) => {
      acc[review.id] = review;
      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
});
