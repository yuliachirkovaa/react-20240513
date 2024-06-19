/* eslint-disable no-unused-vars */

import { AuthorizationButton } from "../authorization-button/component";
import { CartIndicator } from "../cart-indicator/component";
import { ThemeToggler } from "../theme-toggler/component";
import { Tab } from "../tab/component";

export const Header = () => {
  return (
    <header>
      Header will be here
      <ThemeToggler />
      <div>
        <Tab to = "/">Home</Tab>
        <Tab to = "/restaurants">Restaurants</Tab>
        <Tab to = "/contacts">Contacts</Tab>
      </div>
      <AuthorizationButton />
      <CartIndicator />
    </header>
  );
};
