/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Header } from "../header/component";
import { Footer } from "../footer/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <div id = "modal" style = {{ position: "relative", zIndex: 2 }}/>
      <div style = {{ zIndex: 1 }}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
