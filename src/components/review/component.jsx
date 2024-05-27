export const Review = ({ review }) => {
  if (!review) {
    return <div>No review</div>;
  }

  const { text } = review;

  if (text) {
    return <span>{text}</span>;
  } else {
    return <span>No text</span>;
  }
};
