import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import CustomCard from '../CustomCard';

const PortfolioItem = props => {
  const { item, setRating } = props;

  return useMemo(() => <CustomCard item={item} setRating={setRating} />, [item]);
};

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PortfolioItem;