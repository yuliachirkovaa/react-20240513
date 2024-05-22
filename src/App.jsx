/* eslint-disable react/jsx-key */

import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  if (restaurants?.length) {
    return (
      <Layout>
        <Restaurants restaurants={restaurants}/>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div>Sorry, there are no restaurants here yet</div>
      </Layout>
    );
  }
};

