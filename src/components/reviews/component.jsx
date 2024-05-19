/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Review } from "../review/component";

export const Reviews = ({reviews}) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li>
          <Review review={review.text}/>
        </li>
      ))}
    </ul>
  );
};
