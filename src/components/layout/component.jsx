/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
    <div id = "modal" style = {{ position: "relative", zIndex: 2 }}/>
    <div style = {{ zIndex: 1 }}>
      <Header />
        <Outlet />
      <Footer />
    </div>
    </>
  );
};
