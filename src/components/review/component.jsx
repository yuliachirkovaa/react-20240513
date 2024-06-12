import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";
import { selectReviewFromResult } from "../../redux/service/api/selectors";

export const Review = ({ reviewId }) => {
  const { data: review } = useGetReviewsByRestaurantIdQuery(undefined, {
    selectFromResult: selectReviewFromResult(reviewId),
  });

  if (!review) {
    return;
  if (!review) {
    return;
  }

  const { text } = review;

  return <span>{text}</span>;
};

