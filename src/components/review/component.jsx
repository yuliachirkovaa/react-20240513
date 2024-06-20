/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from "../../redux/service/api";
import { selectReviewFromResult, selectUserFromResult } from "../../redux/service/api/selectors";
import { Button } from "../button/component";
import { UpdateReviewForm } from "../update-review-form/component";

export const Review = ({ reviewId }) => {
  const { data: review } = useGetReviewsByRestaurantIdQuery(undefined, {
    selectFromResult: selectReviewFromResult(reviewId),
  });

  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: selectUserFromResult(review?.userId),
  });

  const [isEditModeOn, setIsEditModeOn] = useState(false);

  if (!review) {
    return;
  }

  const { text, rating } = review;

  return (
    <div>
      {isEditModeOn? <UpdateReviewForm review = {review} onClose = {() => setIsEditModeOn(false)}/> : (
        <>
          <div>{user?.name}</div>
          <div>{text}</div>
          <div>{rating}</div>
          <Button onClick = {() => setIsEditModeOn(true)}>Edit</Button>
        </>
      )}
    </div>
  );
};

