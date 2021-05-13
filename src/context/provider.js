import React, { useState, useRef } from "react";
import filter from "lodash/filter";
import orderBy from "lodash/orderBy";
import isEqual from "lodash/isEqual";
import AppContext from "./context";

const AppProvider = (props) => {
  const [restaurants, setRestaurants] = useState([{
    id: 1,
    name: 'Google',
    image: 'https://1.bp.blogspot.com/-gJSIqMr9Kjg/YJ1QkUtNpdI/AAAAAAAABhY/DsMXDOk2Ko0-mSjYtCocrzjpuHF40VcuQCLcBGAsYHQ/s0/google.png',
    url: 'https://google.com/',
    rating: 0,
  }, {
    id: 2,
    name: 'Facebook',
    image: 'https://1.bp.blogspot.com/-x8kdGWF_8vU/YJ1R4cXB3_I/AAAAAAAABh8/VsBS4nonokEn-ZH1f40lBq9DXs7BoakVgCLcBGAsYHQ/s0/facebook.png',
    url: 'https://facebook.com/',
    rating: 0,
  }, {
    id: 3,
    name: 'Apple',
    image: 'https://1.bp.blogspot.com/-dIfJwYxZN24/YJ1QkQCu55I/AAAAAAAABhc/1o7DiMlmbHY-IDbGCvMshRhhUnxDSuquACLcBGAsYHQ/s0/apple.png',
    url: 'https://apple.com/',
    rating: 0,
  }, {
    id: 4,
    name: 'Amazon',
    image: 'https://1.bp.blogspot.com/-PZqjsb-pGUY/YJ1QkaDoLGI/AAAAAAAABhg/A0ZuINLrOKcvKR78imbDH4BImqCJvHEIACLcBGAsYHQ/s0/amazon.png',
    url: 'https://amazon.com/',
    rating: 0,
  }, {
    id: 5,
    name: 'Microsoft',
    image: 'https://1.bp.blogspot.com/-KLH7deH77Ek/YJ1QlTtPKzI/AAAAAAAABhk/VOHqbQhHUYIgDC_AbUsLE4HR_9EVvbuwgCLcBGAsYHQ/s0/microsoft.png',
    url: 'https://microsoft.com/',
    rating: 0,
  }]);

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
          tempArray.current = tempArray.current.map(item => {
            const itemObj = { ...item };

            if (isEqual(itemObj?.id, id)) {
              itemObj.rating = rating;
            }

            return itemObj;
          });

          setRestaurants(prevState => prevState?.map(item => {
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
