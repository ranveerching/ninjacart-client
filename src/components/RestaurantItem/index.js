import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import CustomCard from '../CustomCard';

const RestaurantItem = props => {
  const { item, setRating } = props;

  return useMemo(() => <CustomCard item={item} setRating={setRating} />, [item]);
};

RestaurantItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RestaurantItem;