/* eslint-disable react/jsx-key */

import { Review } from "../review/component";
import { NewReviewForm } from "../new-review-form/component";

export const Reviews = ({ reviewIds }) => {
  if (!reviewIds) {
    return <div>No reviews</div>;
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
