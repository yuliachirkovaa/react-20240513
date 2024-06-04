import { useState } from "react";
import { useEffect } from "react";

export const useScrollbar = (container) => {
  const [scrollbar, setScrollbar] = useState(0);

  useEffect(() => {
    let element = container?.current;
    const scrollContainer = element || window;
    if (!element) {
      element = document.documentElement;
    }

    const callback = () => {
      const height = element.scrollHeight - element.clientHeight;
      const scrollPercent = (element.scrollTop / height) * 100;
      setScrollbar(scrollPercent);
    };

    scrollContainer.addEventListener("scroll", callback);
    return () => {
      scrollContainer.removeEventListener("scroll", callback);
    };
  }, [container]);

  return scrollbar;
};
