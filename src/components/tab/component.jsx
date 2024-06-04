import { themes } from "../../contexts/theme/constants";
import { useTheme } from "../../contexts/theme/hooks";

export const Tab = ({ children, onClick, isActive }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick = {onClick}
      disabled = {isActive}
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
