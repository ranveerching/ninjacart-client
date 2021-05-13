import React, { useContext } from 'react';
import { Row, Space, Typography } from 'antd';
import map from 'lodash/map';
import AppContext from '../../context/context';
import RestaurantItem from '../../components/RestaurantItem';
import SearchComponent from '../../components/SearchComponent';
import SortingFilters from '../../components/SortingFilters';

const { Title } = Typography;

const Restaurants = () => {
  const {
    restaurants,
    filterRestaurants,
    setTextInputValue,
    sortKey,
    searchKey,
    sortBy,
    setRating,
  } = useContext(AppContext);

  console.log(restaurants);

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

      <Title level={2} className='text-danger text-left font-italic mt-1'>My Favourites</Title>
      <Row gutter={[30, 30]}>
        {map(restaurants, item => <RestaurantItem key={item.id} item={item} setRating={setRating} />)}
      </Row>
    </div>
  );
};

export default Restaurants;