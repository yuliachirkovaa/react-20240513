/* eslint-disable react/jsx-key */

import { Review } from "../review/component";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { NewReviewForm } from "../new-review-form/component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";

export const Reviews = ({ restaurantId }) => {
  const { data: reviews, isFetching } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (!reviews) {
    return;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ id }) => (
          <li>
            <Review reviewId = {id}/>
          </li>
        ))}
      </ul>
      <NewReviewForm />
    </div>
  );
};
