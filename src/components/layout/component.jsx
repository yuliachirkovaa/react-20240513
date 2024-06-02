/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useRef } from "react";
import { useScrollbar } from "../../hooks/use-scrollbar";
import { ThemeContext } from "../../contexts/buttons-theme";
import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { useCustomContext } from "../../hooks/use-custom-context";
import { UserContext } from "../../contexts/user";

export const Layout = ({ children }) => {
  const [ theme, changeTheme ] = useCustomContext ("buttonface");
  const [ user, changeUser ] = useCustomContext ();

  const ref = useRef(null);
  const scrollbar = useScrollbar(ref);

  return (
    <UserContext.Provider value = {user}>
      <ThemeContext.Provider value = {theme}>
        <div ref = {ref}>
          <Header onChange = {() => changeTheme("pink")} onSign = {() => changeUser("MockName")}/>
          {children}
          <Footer />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
