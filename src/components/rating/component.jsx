import { Button } from "../button/component";

export const Rating = ({ dispatch }) => {
  return (
    <div>
      <span>Rate this restaurant:</span>
      <Button onClick = {dispatch}>1</Button>
      <Button onClick = {dispatch}>2</Button>
      <Button onClick = {dispatch}>3</Button>
      <Button onClick = {dispatch}>4</Button>
      <Button onClick = {dispatch}>5</Button>
    </div>
  );
};
