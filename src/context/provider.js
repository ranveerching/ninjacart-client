import React, { useState, useRef } from "react";
import filter from "lodash/filter";
import orderBy from "lodash/orderBy";
import isEqual from "lodash/isEqual";
import { forceCheck } from "react-lazyload";
import AppContext from "./context";

const AppProvider = (props) => {
  const [restaurants, setRestaurants] = useState({
    createdByMe: [{
      id: 1,
      name: 'Tutorials Capital',
      image: 'assets/images/tutorialscapital.png',
      url: 'https://tutorialscapital.com/',
    }],
    favourites: [{
      id: 1,
      name: 'Google',
      image: '../assets/images/google.png',
      url: 'https://google.com/',
    }],
  });
  const [sortKey, updateSortKey] = useState("");
  const [searchKey, updateSearchKey] = useState("");

  let tempArray = useRef([]);

  return (
    <AppContext.Provider
      value={{
        restaurants,
        sortKey,
        searchKey,
        setTextInputValue: (val) => updateSearchKey(val),
        filterRestaurants: (key, sortKey) => {
          let filteredData = filter(tempArray?.current, (item) => {
            const brand = item?.Brand.toLowerCase();
            const updatedKey = key.toLowerCase();
            return brand.indexOf(updatedKey) > -1;
          });

          if (!isEqual(sortKey, "")) {
            filteredData = orderBy(filteredData, ["Stars"], [sortKey]);
          }

          setRestaurants([...filteredData]);

          setTimeout(() => forceCheck(), 100);
        },
        sortBy: (order) => {
          updateSortKey(order);
          if (isEqual(order, "")) {
            setRestaurants([...tempArray.current]);
            updateSearchKey("");
          } else {
            const sortedData = orderBy(restaurants, ["Stars"], [order]);
            setRestaurants([...sortedData]);
          }

          setTimeout(() => forceCheck(), 100);
        },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
