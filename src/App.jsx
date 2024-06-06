/* eslint-disable react/jsx-key */

import { Provider } from "react-redux";
import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store = {store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            {<Restaurants /> || <div>Sorry, there are no restaurants here yet</div>}
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};

