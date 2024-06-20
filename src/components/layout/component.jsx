/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { UserContextProvider } from "../../contexts/user/provider";
import { ThemeContextProvider } from "../../contexts/theme/provider";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <div id = "modal" style = {{ position: "relative", zIndex: 2 }}/>
        <div style = {{ zIndex: 1 }}>
          <Header />
            <Outlet />
          <Footer />
        </div>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};
