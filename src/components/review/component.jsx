import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!reviewId) {
    return <div>No review</div>;
  }

  if (review.text) {
    return <span>{review.text}</span>;
  } else {
    return <span>No text</span>;
  }
};
