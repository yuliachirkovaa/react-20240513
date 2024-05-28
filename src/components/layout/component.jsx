/* eslint-disable react/jsx-key */

import { Scrollbar } from "../scrollbar/component";
import { Header } from "../header/component";
import { Footer } from "../footer/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <Scrollbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
