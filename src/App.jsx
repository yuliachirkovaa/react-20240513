/* eslint-disable react/jsx-key */

import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";

export const App = () => {

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};

