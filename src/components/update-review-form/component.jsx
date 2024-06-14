import { useCallback, useMemo } from "react";
import { useUpdateReviewMutation } from "../../redux/service/api";
import { ReviewForm } from "../review-form/component";

export const UpdateReviewForm = ({ review, onClose }) => {
  const { text, rating } = review;
  const [updateReview, { isLoading }] = useUpdateReviewMutation();

  const handleSave = useCallback((form) => {
    updateReview({
      ...review,
      ...form,
    });
    onClose();
  }, [updateReview, review, onClose]);

  const formValue = useMemo(
    () => ({
      text: text,
      rating: rating
    }),
    [text, rating]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ReviewForm initialValue = {formValue} onSave = {handleSave} onCancel = {onClose}/>
  );
};
