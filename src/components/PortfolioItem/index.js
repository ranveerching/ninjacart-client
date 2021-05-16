import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import CustomCard from '../CustomCard';

const PortfolioItem = props => {
  const { item, setUpvote } = props;

  return useMemo(() => <CustomCard item={item} setUpvote={setUpvote} direction='horizontal' />, [item]);
};

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PortfolioItem;