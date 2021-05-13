import React, { useMemo } from 'react';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const SortingFilters = props => {
  const { sortKey, sortBy } = props;

  return useMemo(() => {
    return (
      <div className='d-flex flex-row align-items-center justify-content-end'>
        <Typography.Text className='pr-2 text-white'>
          Sort by Rating :{' '}
        </Typography.Text>
        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <label className='btn btn-danger' onClick={() => sortBy('asc')}>
            <input
              type='radio'
              name='options'
              id='option2'
              autoComplete='off'
              checked={isEqual(sortKey, 'asc')}
            />
          ASC
        </label>
          <label className='btn btn-danger' onClick={() => sortBy('desc')}>
            <input
              type='radio'
              name='options'
              id='option3'
              autoComplete='off'
              checked={isEqual(sortKey, 'desc')}
            />
          DESC
        </label>
          <label className='btn btn-danger' onClick={() => sortBy('')}>
            <input
              type='radio'
              name='options'
              id='option1'
              autoComplete='off'
              checked={isEqual(sortKey, '')}
            />
          Reset
        </label>
        </div>
      </div>
    );
  }, [sortKey, sortBy]);
};

SortingFilters.propTypes = {
  sortKey: PropTypes.string,
  sortBy: PropTypes.func,
};

export default SortingFilters;
