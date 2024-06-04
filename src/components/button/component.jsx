import { themes } from "../../contexts/theme/constants";
import { useTheme } from "../../contexts/theme/hooks";

export const Button = ({ children, onClick, disabled }) => {
  const { theme } = useTheme();

  return (
  <button
    onClick = {onClick}
    disabled = {disabled}
    style = {{
      borderStyle: "solid",
      borderWidth: "0.5px",
      borderRadius: "2px",
      borderColor: "buttonborder",
      background: `${theme === themes.default? "buttonface" : "pink"}`
    }}
  >
    {children}
  </button>
);
}
