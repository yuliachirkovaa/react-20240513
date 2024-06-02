import { useContext } from "react";
import { ThemeContext } from "../../contexts/buttons-theme";

export const Tab = ({ children, onClick, isActive }) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      onClick = {onClick}
      disabled = {isActive}
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
