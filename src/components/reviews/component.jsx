/* eslint-disable react/jsx-key */

import { Review } from "../review/component";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { NewReviewForm } from "../new-review-form/component";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const Reviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) => selectRestaurantReviewIds(state, restaurantId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId({ restaurantId }));
  }, [dispatch, restaurantId]);

  if (!reviewIds?.length) {
    return;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewIds.map((id) => (
          <li>
            <Review reviewId = {id}/>
          </li>
        ))}
      </ul>
      <NewReviewForm />
    </div>
  );
};
