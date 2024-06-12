/* eslint-disable no-unused-vars */

import { AuthorizationButton } from "../authorization-button/component";
import { CartIndicator } from "../cart-indicator/component";
import { ThemeToggler } from "../theme-toggler/component";

export const Header = () => {
  return (
    <header>
      Header will be here
      <ThemeToggler />
      <AuthorizationButton />
      <CartIndicator />
    </header>
  );
};
