/* eslint-disable react/jsx-key */

import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { restaurants } from "./constants/mock";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";

export const App = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          {restaurants?.length && <Restaurants restaurants={restaurants}/> || <div>Sorry, there are no restaurants here yet</div>}
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};

