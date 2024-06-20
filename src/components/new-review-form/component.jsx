import { useCallback } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { ReviewForm } from "../review-form/component";

export const NewReviewForm = ({ restaurantId }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();

  const handleSave = useCallback((form) => {
    createReview({
      restaurantId,
      newReview: {...form, userId: "a304959a-76c0-4b34-954a-b38dbf310360"}
    });
  }, [createReview, restaurantId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4>Leave a new review:</h4>
      <ReviewForm onSave = {handleSave}/>
    </div>
  );
};
