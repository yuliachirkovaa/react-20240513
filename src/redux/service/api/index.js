import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi ({
  reducerPath: "api",
  tagTypes: ["Review", "Restaurant"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: "dishes",
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result
          .map(({ id }) => ({ type: "Review", id }))
          .concat(
            { type: "Review", id: "All" },
            { type: "Restaurant", restaurantId },
          ),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "Restaurant", id: restaurantId },
      ],
    }),
    updateReview: builder.mutation({
      query: (review) => ({
        url: `review/${review.id}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (result, _, review) => [
        { type: "Review", id: review.id },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = apiService;
