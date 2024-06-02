import { useScrollbar } from "../../hooks/use-scrollbar";

export const Scrollbar = () => {
  const scrollbar = useScrollbar();

  return (
    <div style = {{ width: "100%", height: "6px" }}>
      <div style = {{
        width: `${scrollbar}%`,
        height: "100%",
        borderRadius: "3px",
        backgroundColor: "black" }} />
    </div>
  );
};
