import React, { useContext } from 'react';
import { Row, Space } from 'antd';
import map from 'lodash/map';
import AppContext from '../../context/context';
import RestaurantItem from '../../components/RestaurantItem';
import SearchComponent from '../../components/SearchComponent';
import SortingFilters from '../../components/SortingFilters';

const Restaurants = () => {
  const {
    restaurants,
    filterRestaurants,
    setTextInputValue,
    sortKey,
    searchKey,
    sortBy,
  } = useContext(AppContext);

  return (
    <div className='restaurant-page'>
      <Space
        direction='horizontal'
        className='w-100 common-container align-align-items-center justify-content-between'
      >
        <SearchComponent
          filterRestaurants={filterRestaurants}
          sortKey={sortKey}
          searchKey={searchKey}
          setTextInputValue={setTextInputValue}
        />

        <SortingFilters sortKey={sortKey} sortBy={sortBy} />
      </Space>

      <Row gutter={[30, 30]}>
        {map(restaurants.createdByMe, item => <RestaurantItem key={item.id} item={item} />)}
      </Row>
    </div>
  );
};

export default Restaurants;