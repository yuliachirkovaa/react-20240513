import { useReducer } from "react";
import { Rating } from "../rating/component";
import { Button } from "../button/component";

function reducer (state, { type, payload } = {}) {
  switch (type) {
    case "setText":
      return {...state, text: payload};
    case "setRating":
      return {...state, rating: payload};
    case "cleanForm":
      return {...defaultFormValue};
    default:
      return state;
  }
}

const defaultFormValue = {
  text: "",
  rating: 5,
};

export const ReviewForm = ({ initialValue = defaultFormValue, onSave, onCancel }) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  return (
    <form onSubmit = {(event) => event.preventDefault()}>
      <input
        type="text"
        placeholder="Your review"
        value={form.text}
        onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
      />
      <Rating
        value = {form.rating}
        onChange = {(rating) => dispatch({ type: "setRating", payload: rating })}
      />
      <Button onClick = {() => {
          onSave({...initialValue, ...form});
          dispatch({ type: "cleanForm" });
        }
      }>
        Save
      </Button>
      {onCancel && <Button onClick = {onCancel}>Cancel</Button>}
    </form>
  );
};
