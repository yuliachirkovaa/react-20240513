import { useSelector } from "react-redux";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => state.review.entities[reviewId]);

  if (!reviewId) {
    return <div>No review</div>;
  }

  if (review.text) {
    return <span>{review.text}</span>;
  } else {
    return <span>No text</span>;
  }
};
