import React, { useState, useRef } from "react";
import filter from "lodash/filter";
import orderBy from "lodash/orderBy";
import isEqual from "lodash/isEqual";
import map from 'lodash/map';

import favouritesSites from '../utils/fakeData';
import AppContext from "./context";

const AppProvider = (props) => {
  const [favourites, setFavourites] = useState([...favouritesSites]);

  const [sortKey, updateSortKey] = useState("");
  const [searchKey, updateSearchKey] = useState("");

  let tempArray = useRef([...favourites]);

  return (
    <AppContext.Provider
      value={{
        favourites,
        sortKey,
        searchKey,
        setTextInputValue: (val) => updateSearchKey(val),
        filterFavourites: (key, sortKey) => {
          let filteredData = filter(tempArray?.current, (item) => {
            const brand = item?.name.toLowerCase();
            const updatedKey = key.toLowerCase();
            return brand.indexOf(updatedKey) > -1;
          });

          if (!isEqual(sortKey, "")) {
            filteredData = orderBy(filteredData, ["rating"], [sortKey]);
          }

          setFavourites([...filteredData]);
        },
        setUpvote: (id, rating) => {
          tempArray.current = map(tempArray.current, item => {
            const itemObj = { ...item };

            if (isEqual(itemObj?.id, id)) {
              itemObj.upvote += 1;
            }

            return itemObj;
          });

          setFavourites(prevState => map(prevState, item => {
            const itemObj = { ...item };

            if (isEqual(itemObj?.id, id)) {
              itemObj.upvote += 1;
            }

            return itemObj;
          }));
        },
        sortBy: (order) => {
          updateSortKey(order);
          if (isEqual(order, "")) {
            setFavourites([...tempArray.current]);
            updateSearchKey("");
          } else {
            const sortedData = orderBy(favourites, ["upvote"], [order]);
            setFavourites([...sortedData]);
          }
        },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
