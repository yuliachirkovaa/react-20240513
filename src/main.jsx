/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */

import React from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";
import { Restaurant } from "./components/restaurant/component";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header/>
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant}/>
      ))}
    </div>
    <Footer/>
  </div>
);

