/* eslint-disable react/jsx-key */

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ContactsPage } from "./pages/contacts";
import { RestaurantsPage } from "./pages/restaurants";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { Menu } from "./components/menu/component";
import { Reviews } from "./components/reviews/component";
import { Dish } from "./components/dish/component";

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
              {index: true, element: <Menu />},
              {path: "menu", element: <Menu />},
              {path: "reviews", element: <Reviews />},
          ]},
      ]},
      {
        path: "/dish",
        children: [
          {path: ":dishId", element: <Dish />},
      ]},
  ]},
]);

export const App = () => {
  return (
    <RouterProvider router = {router}/>
  );
};

