/* eslint-disable react/jsx-key */

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./redux/entities/user/thunks/get-users";
import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};

