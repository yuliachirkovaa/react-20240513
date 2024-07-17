/* eslint-disable react/jsx-key */

import { Provider } from "react-redux";
import { store } from "./redux";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ContactsPage } from "./pages/contacts";
import { RestaurantsPage } from "./pages/restaurants";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { Menu } from "./components/menu/component";
import { Reviews } from "./components/reviews/component";
import {UserContextProvider} from "./contexts/user/provider";
import {ThemeContextProvider} from "./contexts/theme/provider";
import { DishPage } from "./pages/dish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <HomePage />},
      {path: "/contacts", element: <ContactsPage />},
      {
        path: "/restaurants",
        element: <RestaurantsPage />,
        children: [
          {index: true, element: <div>No restaurant chosen</div>},
          {
            path: ":restaurantId",
            element: <Restaurant />,
            children: [
              {index: true, element: <Navigate to = "menu" replace />},
              {path: "menu", element: <Menu />},
              {path: "reviews", element: <Reviews />},
          ]},
      ]},
      {
        path: "/dish",
        children: [
          {path: ":dishId", element: <DishPage />},
      ]},
  ]},
]);

export const App = () => {
  return (
    <Provider store = {store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <RouterProvider router = {router}/>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};

