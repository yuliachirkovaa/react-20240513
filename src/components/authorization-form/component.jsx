import { useState } from "react";
import { Button } from "../button/component";

export const AuthorizationForm = ({ onLogin, onCancel }) => {
  const [name, setName] = useState("");

  return (
    <div>
      <input value = {name} onChange = {(event) => setName(event.target.value)}/>
      <Button
        onClick = {() => {
          onLogin(name);
          setName("");
      }}
      >
        Login
      </Button>
      <Button onClick = {onCancel}>Cancel</Button>
    </div>
  );
};
