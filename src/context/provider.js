import React, { useState, useRef } from "react";
import filter from "lodash/filter";
import orderBy from "lodash/orderBy";
import isEqual from "lodash/isEqual";
import map from 'lodash/map';

import fakeData from '../utils/fakeData';
import AppContext from "./context";

const AppProvider = (props) => {
  const [restaurants, setRestaurants] = useState([...fakeData]);

  const [sortKey, updateSortKey] = useState("");
  const [searchKey, updateSearchKey] = useState("");

  let tempArray = useRef([...restaurants]);

  return (
    <AppContext.Provider
      value={{
        restaurants,
        sortKey,
        searchKey,
        setTextInputValue: (val) => updateSearchKey(val),
        filterRestaurants: (key, sortKey) => {
          let filteredData = filter(tempArray?.current, (item) => {
            const brand = item?.name.toLowerCase();
            const updatedKey = key.toLowerCase();
            return brand.indexOf(updatedKey) > -1;
          });

          if (!isEqual(sortKey, "")) {
            filteredData = orderBy(filteredData, ["rating"], [sortKey]);
          }

          setRestaurants([...filteredData]);
        },
        setRating: (id, rating) => {
          tempArray.current = map(tempArray.current, item => {
            const itemObj = { ...item };

            if (isEqual(itemObj?.id, id)) {
              itemObj.rating = rating;
            }

            return itemObj;
          });

          setRestaurants(prevState => map(prevState, item => {
            const itemObj = { ...item };

            if (isEqual(itemObj?.id, id)) {
              itemObj.rating = rating;
            }

            return itemObj;
          }));
        },
        sortBy: (order) => {
          updateSortKey(order);
          if (isEqual(order, "")) {
            setRestaurants([...tempArray.current]);
            updateSearchKey("");
          } else {
            const sortedData = orderBy(restaurants, ["rating"], [order]);
            setRestaurants([...sortedData]);
          }
        },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
