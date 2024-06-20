/* eslint-disable react/jsx-key */

import { useSearchParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Tab } from "../tab/component";
import styles from "./styles.module.css";

export const RestaurantTabs = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!restaurants) {
    return;
  }

  return (
    <div className = {styles.root}>
      <input
        value = {searchValue}
        onChange = {event => setSearchParams({ search: event.target.value })}
        style = {{ maxWidth: "150px" }}
      />
      {restaurants
        .filter(
          ({ name }) =>
            name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
        .map(
          ({ id, name }) => (
            <Tab to = {`${id}`}>{name}</Tab>
          )
        )
      }
    </div>
  );
};
