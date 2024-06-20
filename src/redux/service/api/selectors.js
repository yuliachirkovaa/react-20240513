export const selectRestaurantFromResult = (restaurantId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === restaurantId),
});

export const selectDishFromResult = (dishId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === dishId),
});

export const selectReviewFromResult = (reviewId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === reviewId),
});

export const selectUserFromResult = (userId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === userId),
});
