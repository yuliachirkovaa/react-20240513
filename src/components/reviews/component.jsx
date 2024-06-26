/* eslint-disable react/jsx-key */

import { Review } from "../review/component";
import { NewReviewForm } from "../new-review-form/component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const { restaurantId } = useParams();
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
      <NewReviewForm restaurantId = {restaurantId} />
    </div>
  );
};
