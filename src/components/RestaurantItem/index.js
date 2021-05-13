import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import CustomCard from '../CustomCard';

const RestaurantItem = props => {
  const { item } = props;

  return useMemo(() => <CustomCard item={item} />, [item]);
};

RestaurantItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RestaurantItem;