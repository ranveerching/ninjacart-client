import React, { useState, useRef } from "react";
import filter from "lodash/filter";
import orderBy from "lodash/orderBy";
import isEqual from "lodash/isEqual";
import map from 'lodash/map';

import { myCreations, favouritesSites } from '../utils/fakeData';
import AppContext from "./context";

const AppProvider = (props) => {
  const [blogs, setBlogs] = useState({
    myCreations: [...myCreations],
    myFavourites: [...favouritesSites],
  });

  const [sortKey, updateSortKey] = useState("");
  const [searchKey, updateSearchKey] = useState("");

  let tempArray = useRef({
    ...blogs,
    myCreations: [...blogs?.myCreations],
    myFavourites: [...blogs?.myFavourites],
  });

  return (
    <AppContext.Provider
      value={{
        blogs,
        sortKey,
        searchKey,
        setTextInputValue: (val) => updateSearchKey(val),
        filterFavourites: (key, sortKey) => {
          let filteredMyCreationsData = filter(tempArray.current.myCreations, item => {
            const lowerCaseItem = item?.name.toLowerCase();
            const updatedKey = key.toLowerCase();
            return lowerCaseItem?.indexOf(updatedKey) > -1;
          });

          let filteredMyFavouritesData = filter(tempArray.current.myFavourites, item => {
            const lowerCaseItem = item?.name.toLowerCase();
            const updatedKey = key.toLowerCase();
            return lowerCaseItem?.indexOf(updatedKey) > -1;
          });

          if (!isEqual(sortKey, "")) {
            filteredMyCreationsData = orderBy(filteredMyCreationsData, ["upvote"], [sortKey]);
            filteredMyFavouritesData = orderBy(filteredMyFavouritesData, ["upvote"], [sortKey]);
          }

          setBlogs({
            ...blogs,
            myCreations: [...filteredMyCreationsData],
            myFavourites: [...filteredMyFavouritesData],
          });
        },
        setUpvote: id => {
          tempArray.current = {
            ...tempArray?.current,
            myCreations: map(tempArray.current.myCreations, item => {
              const itemObj = { ...item };

              if (isEqual(itemObj?.id, id)) {
                itemObj.upvote += 1;
              }

              return itemObj;
            }),
            myFavourites: map(tempArray.current.myFavourites, item => {
              const itemObj = { ...item };

              if (isEqual(itemObj?.id, id)) {
                itemObj.upvote += 1;
              }

              return itemObj;
            })
          };

          setBlogs(prevState => {
            return {
              ...prevState,
              myCreations: map(prevState.myCreations, item => {
                const itemObj = { ...item };

                if (isEqual(itemObj?.id, id)) {
                  itemObj.upvote += 1;
                }

                return itemObj;
              }),
              myFavourites: map(prevState.myFavourites, item => {
                const itemObj = { ...item };

                if (isEqual(itemObj?.id, id)) {
                  itemObj.upvote += 1;
                }

                return itemObj;
              }),
            }
          });
        },
        sortBy: (order) => {
          updateSortKey(order);
          if (isEqual(order, "")) {
            setBlogs({
              ...tempArray.current,
              myCreations: [...tempArray.current.myCreations],
              myFavourites: [...tempArray.current.myFavourites],
            });
            updateSearchKey("");
          } else {
            const sortedData = {
              ...blogs,
              myCreations: orderBy(blogs.myCreations, ["upvote"], [order]),
              myFavourites: orderBy(blogs.myFavourites, ["upvote"], [order])
            };
            setBlogs({ ...sortedData });
          }
        },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
