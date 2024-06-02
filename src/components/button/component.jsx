import { useContext } from "react";
import { ThemeContext } from "../../contexts/buttons-theme";

export const Button = ({ children, onClick, disabled }) => {
  const theme = useContext(ThemeContext);

  return (
  <button
    onClick = {onClick}
    disabled = {disabled}
    style = {{
      borderStyle: "solid",
      borderWidth: "0.5px",
      borderRadius: "2px",
      borderColor: "buttonborder",
      background: `${theme}`
    }}
  >
    {children}
  </button>
);
}
