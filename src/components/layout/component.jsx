/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useRef } from "react";
import { useScrollbar } from "../../hooks/use-scrollbar";
import { Header } from "../header/component";
import { Footer } from "../footer/component";

export const Layout = ({ children }) => {
  const ref = useRef(null);
  const scrollbar = useScrollbar(ref);

  return (
    <div ref = {ref}>
      <div id = "modal" style = {{ position: "relative", zIndex: 2 }}/>
      <div style = {{ zIndex: 1 }}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
