/* eslint-disable no-unused-vars */

import { AuthorizationButton } from "../authorization-button/component";
import { Scrollbar } from "../scrollbar/component";
import { ThemeToggler } from "../theme-toggler/component";

export const Header = () => {
  return (
    <header style = {{ position: "sticky", top: "0" }}>
      Header will be here
      <ThemeToggler />
      <AuthorizationButton />
      <Scrollbar />
    </header>
  );
};
