import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const SearchComponent = props => {
  const { filterFavourites, setTextInputValue, sortKey, searchKey } = props;

  return useMemo(() => {
    return (
      <div className='mb-0 input-group search-container'>
        <input
          type='text'
          className='form-control text-white'
          placeholder='Search keyword...'
          value={searchKey}
          onChange={event => setTextInputValue(event?.nativeEvent?.target?.value)}
          style={{ backgroundColor: 'rgb(32, 32, 32)', borderColor: '#626368' }}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-danger'
            type='button'
            onClick={() => filterFavourites(searchKey, sortKey)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }, [filterFavourites, setTextInputValue, sortKey, searchKey]);
};

SearchComponent.propTypes = {
  filterFavourites: PropTypes.func.isRequired,
  setTextInputValue: PropTypes.func,
  sortKey: PropTypes.string,
  searchKey: PropTypes.string,
};

export default SearchComponent;
