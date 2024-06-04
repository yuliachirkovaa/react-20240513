/* eslint-disable react/jsx-key */

import { Review } from "../review/component";
import { NewReviewForm } from "../new-review-form/component";

export const Reviews = ({ reviews }) => {
  if (!reviews) {
    return <div>No reviews</div>;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li>
            <Review review = {review}/>
          </li>
        ))}
      </ul>
      <NewReviewForm />
    </div>
  );
};
