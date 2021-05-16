import React, { useContext } from 'react';
import { Row, Col, Typography } from 'antd';
import map from 'lodash/map';

import AppContext from '../../context/context';
import PortfolioItem from '../../components/PortfolioItem';
import SearchComponent from '../../components/SearchComponent';
import SortingFilters from '../../components/SortingFilters';

const { Title } = Typography;

const Portfolio = () => {
  const {
    favourites,
    filterFavourites,
    setTextInputValue,
    sortKey,
    searchKey,
    sortBy,
    setUpvote,
  } = useContext(AppContext);

  return (
    <div className='portfolio-page'>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <SearchComponent
            filterFavourites={filterFavourites}
            sortKey={sortKey}
            searchKey={searchKey}
            setTextInputValue={setTextInputValue}
          />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <SortingFilters sortKey={sortKey} sortBy={sortBy} />
        </Col>
      </Row>

      <Title level={2} className='text-danger text-left font-italic mt-5'>My Favourites</Title>
      <Row gutter={[30, 30]}>
        {map(favourites, item => <PortfolioItem key={item.id} item={item} setUpvote={setUpvote} />)}
      </Row>
    </div>
  );
};

export default Portfolio;