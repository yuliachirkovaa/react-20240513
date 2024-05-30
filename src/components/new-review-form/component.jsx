import { useReducer } from "react";
import { Rating } from "../rating/component";
import { Button } from "../button/component";

function reducer (state, { type, payload } = {}) {
  switch (type) {
    case "setName":
      return {...state, name: payload};
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
  name: "",
  text: "",
  rating: 5,
};

export const NewReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, defaultFormValue);

  return (
    <div>
      <div>
        <h4>Leave a new review:</h4>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(event) => dispatch({ type: "setName", payload: event.target.value })}
          />
        <input
          type="text"
          placeholder="Your review"
          value={form.text}
          onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
          />
        <Rating dispatch = {(event) => dispatch({ type: "setRating", payload: Number(event.target.textContent) })} />
        <Button onClick = {() => dispatch({ type: "cleanForm" })}>Save</Button>
      </div>
    </div>
  );
};
