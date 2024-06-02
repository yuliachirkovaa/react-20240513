import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { Button } from "../button/component";

export const Authorization = ({ onSign }) => {
  const user = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <Button onClick = {onSign}>Sign in</Button>
      </div>
    );
  } else {
    return (
      <div>
        <span>{user}</span>
        <Button onClick = {onSign}>Sign out</Button>
      </div>
    );
  }
};
