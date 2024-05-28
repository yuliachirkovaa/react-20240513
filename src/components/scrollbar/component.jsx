import { useState } from "react";
import { useEffect } from "react";

export const Scrollbar = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    document.getElementById("scrollbar").style.width = scrolled + "%";

    document.onscroll = () => {
      let scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
      setScrolled(scrollPercent);
    };
  }, [scrolled]);

  return (
    <div style = {{ position: "fixed", width: "100%", height: "6px" }}>
      <div id = "scrollbar" style = {{ width: "0%", height: "100%", borderRadius: "3px", backgroundColor: "black" }}></div>
    </div>
  );
};
